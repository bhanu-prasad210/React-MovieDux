import React, { useState, useEffect } from "react";
import "../styles.css";
import MovieCard from "./MovieCard";
export default function MovieGrid({ movies, watchlist, toggleWatchlist }) {
  const [searchMovie, setSearchMovie] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");

  const searchMovieName = (e) => {
    setSearchMovie(e.target.value);
  };

  const searchGenre = (e) => {
    setGenre(e.target.value);
  };

  const searchRating = (e) => {
    setRating(e.target.value);
  };

  const matchesGenre = (movie, genre) => {
    return (
      genre === "All Genre" || movie.genre.toLowerCase() === genre.toLowerCase()
    );
  };
  const matchSearchterm = (movie, searchMovie) => {
    return movie.title.toLowerCase().includes(searchMovie.toLowerCase());
  };

  const matchesRating = (movie, rating) => {
    switch (rating) {
      case "Good":
        return movie.rating >= 7;
      case "Ok":
        return movie.rating >= 4 && movie.rating < 7;
      case "Bad":
        return movie.rating < 4;
      default:
        return true;
    }
  };

  const filteredMovies = movies.filter((movie) => {
    return (
      matchesGenre(movie, genre) &&
      matchSearchterm(movie, searchMovie) &&
      matchesRating(movie, rating)
    );
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Search Movies.."
        className="search-input"
        value={searchMovie}
        onChange={searchMovieName}
      />
      <div className="filter-bar">
        <div className="filter-slot">
          <label>Genre</label>
          <select
            className="filter-dropdown"
            value={genre}
            onChange={searchGenre}
          >
            <option>All Genre</option>
            <option>Action</option>
            <option>Drama</option>
            <option>Fantasy</option>
            <option>Horror</option>
          </select>
        </div>
        <div className="filter-slot">
          <label>Rating</label>
          <select
            className="filter-dropdown"
            value={rating}
            onChange={searchRating}
          >
            <option>All</option>
            <option>Good</option>
            <option>Ok</option>
            <option>Bad</option>
          </select>
        </div>
      </div>

      <div className="movie-grid">
        {filteredMovies.map((movie) => (
          <MovieCard
            movie={movie}
            toggleWatchlist={toggleWatchlist}
            isWatchlist={watchlist.includes(movie.id)}
            key={movie.id}
          ></MovieCard>
        ))}
      </div>
    </div>
  );
}
