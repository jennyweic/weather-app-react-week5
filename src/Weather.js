import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export function Weather() {
  let [city, setCity] = useState("");
  let [weatherData, setWeatherData] = useState({
    temperature: null,
    description: null,
    wind: null,
    humiditiy: null,
    feels_like: null,
  });

  function updateCity(event) {
    setCity(event.target.value);
  }

  //Do something with the data
  function getResponse(event) {
    event.preventDefault();

    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=698445003bc2a9cbfcb050ae4t74oc8b`;
    axios.get(url).then((data) => {
      const weatherData = {
        temperature: Math.round(data.data.temperature.current),
        description: data.data.condition.description,
        wind: data.data.wind.speed,
        humidity: data.data.temperature.humidity,
        feels_like: data.data.temperature.feels_like,
      };

      setWeatherData(weatherData);
    });
  }

  return (
    <div className="Weather">
      <form onSubmit={getResponse}>
        <div className="row">
          <div className="col-9">
            <input
              className="Search-text-btn form-control"
              type="search"
              placeholder="Enter your city"
              onChange={updateCity}
            />
          </div>
          <div className="col-3">
            <input className="btn" type="Submit" value="Search" />
          </div>
        </div>
      </form>

      <h1>{city}</h1>
      <p>Sat, 11:00 am</p>

      <div className="row">
        <div className="col-6">
          <ul>
            <li className="condition-description text-capitalize">
              {" "}
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
                alt="clear-sky-icon"
              />
              {weatherData.description}
            </li>
            <li className="temperature">{weatherData.temperature}°C</li>
          </ul>
        </div>
        <div className="col-6">
          <ul className="details">
            <li>Feels like {weatherData.feels_like}°C</li>
            <li>Wind {weatherData.wind}km/h</li>
            <li>Humidity {weatherData.humidity}%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
