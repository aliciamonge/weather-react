import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function displayForecast(response) {}
  let apiKey = "0198dea1996842c503892bac0bb89258";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayForecast);
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
