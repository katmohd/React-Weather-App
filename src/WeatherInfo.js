import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="weather-app-icon mt-3 mb-3">
        <img
          src={require(`./icons/${props.data.icon}.svg`)}
          alt="weather icon"
          width="150"
          height="150"
        />
      </div>
      <h1 className="mb-1">{props.data.city}</h1>
      <div>
        <WeatherTemperature celsius={props.data.temperature} />
      </div>
      <h1 className="text-capitalize">{props.data.description}</h1>
      <div className="date mt-3 mb-3">
        <FormattedDate date={props.data.date} />
      </div>
      <div className="weather-app-details">
        <div className="row">
          <div className="col left">Feels like:</div>
          <div className="col right">{props.data.feels}°C</div>
        </div>
        <div className="row">
          <div className="col left">Humidity:</div>
          <div className="col right">{props.data.humidity}%</div>
        </div>
        <div className="row">
          <div className="col left">Wind:</div>
          <div className="col right">{props.data.wind}km/h</div>
        </div>
      </div>
    </div>
  );
}
