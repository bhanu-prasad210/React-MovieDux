import React from "react";
import "../styles.css";

export default function MovieCard({ movie, isWatchlist, toggleWatchlist }) {
  const onError = (e) => {
    e.target.src = "images/default-image.png";
  };

  const getRating = (rating) => {
    if (rating >= 7) return "rating-good";

    if (rating >= 4 && rating < 7) return "rating-ok";

    return "rating-bad";
  };
  return (
    <div key={movie.id} className="movie-card">
      {" "}
      {/* ✅ Key moved to the main wrapper */}
      <img src={`images/${movie.image}`} alt={movie.title} onError={onError} />
      <div className="movie-card-info">
        <h3 className="movie-card-title">{movie.title}</h3>
        <div>
          <span className="movie-card-genre">{movie.genre}</span>
          <span className={`movie-card-rating ${getRating(movie.rating)}`}>
            {movie.rating}
          </span>
          <label className="switch">
            <input
              type="checkbox"
              checked={isWatchlist}
              onChange={() => toggleWatchlist(movie.id)}
            ></input>
            <span className="slider">
              <span className="slider-label">
                {isWatchlist ? "Added!" : "Add to Watchlist!"}
              </span>
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}
