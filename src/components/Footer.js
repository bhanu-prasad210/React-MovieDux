import React from "react";
import "../styles.css";

export default function Footer() {
  const getYear = () => new Date().getFullYear(); // ✅ Fixed function call

  return (
    <footer className="footer">
      <p className="footer-text">
        {"\u00A9"} {getYear()} MovieDux. All rights reserved.
      </p>
    </footer>
  );
}
