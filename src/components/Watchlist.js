import React from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

export default function Watchlist({ movies, watchlist, toggleWatchlist }) {
  return (
    <div>
      <h1 className="title">Your Watchlist</h1>
      {watchlist.map((id) => {
        const movie = movies.find((movie) => movie.id === id);
        return (
          <MovieCard
            key={movie.id}
            movie={movie}
            isWatchlist={true}
            toggleWatchlist={toggleWatchlist}
          />
        );
      })}
    </div>
  );
}
