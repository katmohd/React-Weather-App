import React, { useState } from "react";
import WEATHER_API_KEY from "./api";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      icon: response.data.weather[0].icon,
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      feels: Math.round(response.data.main.feels_like),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      condition: response.data.weather[0].main,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className={`container ${weatherData.condition}`}>
        <div className="Weather">
          <header>
            <form onSubmit={handleSubmit} className="search-form">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control search-form-input"
                autoFocus="on"
                onChange={handleCityChange}
              />
              <input
                type="submit"
                value="Search"
                className="search-form-button"
              />
            </form>
          </header>
          <main>
            <WeatherInfo data={weatherData} />
            <WeatherForecast coordinates={weatherData.coordinates} />
          </main>
          <footer>
            This project was coded by{" "}
            <a
              href="https://www.linkedin.com/in/katmohd/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kat
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/katmohd/React-Weather-App"
              target="_blank"
              rel="noopener noreferrer"
            >
              open-sourced on GitHub
            </a>{" "}
            and{" "}
            <a
              href="https://endearing-cucurucho-8053a9.netlify.app//"
              target="_blank"
              rel="noopener noreferrer"
            >
              hosted on Netlify
            </a>
          </footer>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
