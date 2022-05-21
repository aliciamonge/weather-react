import React from "react";
import "./weather.css";
export default function Footer() {
  return (
    <p className="coded-by">
      Open-sourced{" "}
      <a
        href="https://github.com/aliciamonge/weather-react"
        target="_blank"
        rel="noopener noreferrer"
      >
        code
      </a>{" "}
      by{" "}
      <a
        href="https://cocky-fermi-cfce54.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Alicia Monge
      </a>
    </p>
  );
}
