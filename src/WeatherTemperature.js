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
      <span>
        <span className="currentTemp">{Math.round(props.celsius)}º</span>
        <span className="units fs-5">
          C |{" "}
          <a href="/" onClick={showF}>
            F
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span>
        <span className="currentTemp">{Math.round(fahrenheit())}º</span>
        <span className="units fs-5">
          <a href="/" onClick={showC}>
            C
          </a>{" "}
          | F
        </span>
      </span>
    );
  }
}
