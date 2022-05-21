import React, { useState } from "react";
import "./weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      city: response.data.name,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
      minTemp: response.data.main.temp_min,
      maxTemp: response.data.main.temp_max,
    });
  }
  function search() {
    const apiKey = "0198dea1996842c503892bac0bb89258";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="card main-container daylight" id="main-container">
          <div className="card-body">
            <form className="d-flex search-city" onSubmit={handleSubmit}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Enter city"
                aria-label="Search"
                id="city-wanted"
                autocomplete="off"
                onChange={handleCityChange}
              />
              <button type="submit">
                <span role="img" aria-label="search">
                  🔍
                </span>
              </button>
            </form>
            <WeatherInfo data={weatherData} />
            <WeatherForecast coordinates={weatherData.coordinates} />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
