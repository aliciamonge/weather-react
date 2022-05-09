import React, { useState } from "react";
import "./weather.css";
import axios from "axios";
import FormatedDate from "./FormatedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      city: response.data.name,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      icon: "",
      minTemp: response.data.main.temp_min,
      maxTemp: response.data.main.temp_max,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="card main-container daylight" id="main-container">
          <div className="card-body">
            <form className="d-flex search-city">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Enter city"
                aria-label="Search"
                id="city-wanted"
                autocomplete="off"
              />
              <button type="submit">
                <span role="img" aria-label="search">
                  🔍
                </span>
              </button>
              <button className="btncurrent-location" type="submit">
                <span role="img" aria-label="current-location">
                  📍
                </span>
              </button>
            </form>
            <div className="current-weather">
              <div className="row">
                <div className="col city">
                  <h1>{weatherData.city}</h1>
                </div>
                <div className="col current-temperature">
                  <h2>
                    {weatherData.icon}

                    <span className="currentTemp">
                      {""} {Math.round(weatherData.temperature)}
                    </span>
                    <span className="units">ºC</span>
                  </h2>
                </div>
              </div>
              <div className="row current-time">
                <div className="col time">
                  <p>
                    <FormatedDate date={weatherData.date} />
                  </p>
                </div>
                <div className="col current-weather-sky">
                  <span className="current-sky text-capitalize">
                    {" "}
                    {weatherData.description}
                  </span>{" "}
                  |
                  <span className="current-max-temp">
                    {""} {Math.round(weatherData.maxTemp)}{" "}
                  </span>{" "}
                  /
                  <span className="current-min-temp">
                    {Math.round(weatherData.minTemp)}
                  </span>
                  ºC
                  <br />
                  <span className="current-humidity">
                    {weatherData.humidity}
                  </span>
                  % humidity |
                  <span className="current-wind">
                    {Math.round(weatherData.wind)}
                  </span>{" "}
                  km/h <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "0198dea1996842c503892bac0bb89258";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
