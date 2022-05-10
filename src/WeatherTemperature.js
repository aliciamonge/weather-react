import React, { useState } from "react";
export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showF(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showC(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }
  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="currentTemp">{Math.round(props.celsius)}</span>
        <span className="units">
          ºC |{" "}
          <a href="/" onClick={showF}>
            {" "}
            ºF
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="currentTemp">{Math.round(fahrenheit())}</span>
        <span className="units">
          <a href="/" onClick={showC}>
            {" "}
            ºC
          </a>{" "}
          | ºF
        </span>
      </div>
    );
  }
}
