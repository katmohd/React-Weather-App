import React from "react";

export default function ForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="forecast-day">{day()}</div>
      <img
        src={props.data.condition.icon_url}
        alt="icon"
        width="60px"
        id="forecast-icon"
      />
      <div id="forecast-temp">
        <span id="max-temp">{maxTemp()}</span>
        <span id="min-temp">{minTemp()}</span>
      </div>
    </div>
  );
}
