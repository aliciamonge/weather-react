import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="column">
          <div className="forecast-day">Thu</div>
          <WeatherIcon code="01d" size={30} />
          <div>
            <span className="forecast-max">19º </span>
            <span className="forecast-min"> 10º</span>
          </div>
        </div>
        <div className="column"></div>
      </div>
    </div>
  );
}
