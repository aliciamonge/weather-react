import React from "react";
import "./weather.css";
export default function Weather() {
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
            <button type="submit">🔍</button>
            <button className="btncurrent-location" type="submit">
              📍
            </button>
          </form>
          <div className="current-weather">
            <div className="row">
              <div className="col city">
                <h1>Madrid</h1>
              </div>
              <div className="col current-temperature">
                <h2>
                  ☁<span className="currentTemp">20</span>
                  <span className="units">ºC</span>
                </h2>
              </div>
            </div>
            <div className="row current-time">
              <div className="col time">
                <p>Friday, 11:50</p>
              </div>
              <div className="col current-weather-sky">
                <span className="current-sky"> Cloudy</span> |
                <span className="current-max-temp">22 </span> /
                <span className="current-min-temp">16</span>ºC
                <br />
                <span className="current-humidity">60</span>% humidity |
                <span className="current-wind"></span> <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
