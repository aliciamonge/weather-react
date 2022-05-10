import React from "react";
import FormatedDate from "./FormatedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col city">
          <h1>{props.data.city}</h1>
        </div>
        <div className="col current-temperature">
          <h2>
            <WeatherIcon code={props.data.icon} size={60} />
            <WeatherTemperature celsius={props.data.temperature} />
          </h2>
        </div>
      </div>
      <div className="row current-time">
        <div className="col time">
          <p>
            <FormatedDate date={props.data.date} />
          </p>
        </div>
        <div className="col current-weather-sky">
          <span className="current-sky text-capitalize">
            {" "}
            {props.data.description}
          </span>{" "}
          |
          <span className="current-max-temp">
            {""} {Math.round(props.data.maxTemp)}{" "}
          </span>{" "}
          /
          <span className="current-min-temp">
            {Math.round(props.data.minTemp)}
          </span>
          ºC
          <br />
          <span className="current-humidity">{props.data.humidity}</span>%
          humidity |
          <span className="current-wind">{Math.round(props.data.wind)}</span>{" "}
          km/h <br />
        </div>
      </div>
    </div>
  );
}
