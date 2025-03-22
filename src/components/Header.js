import React from "react";
import "../styles.css";

export default function Header() {
  return (
    <div className="header">
      <img className="logo" src="logo.png" alt="Moviedux" />
      <h2 className="app-subtitle">
        Its time for popcorn, find your movies here!!!
      </h2>
    </div>
  );
}
