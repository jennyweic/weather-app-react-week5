import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export function Weather() {
  let [city, setCity] = useState("");

  /**
   * When data is ready, it looks like this:
   * {
    temperature: 10,
    description: windy,
    wind: 10,
    humiditiy: 10,
    feels_like: 1-,
  }
  We set it intially to false as there is no data...
   */
  let [weatherData, setWeatherData] = useState(false);

  function updateCity(event) {
    setCity(event.target.value);
  }

  //Do something with the data
  function getResponse(event) {
    event.preventDefault();

    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=698445003bc2a9cbfcb050ae4t74oc8b`;
    axios.get(url).then((data) => {
      const weatherData = {
        date: new Date(data.data.time * 1000),
        temperature: Math.round(data.data.temperature.current),
        description: data.data.condition.description,
        wind: data.data.wind.speed,
        humidity: data.data.temperature.humidity,
        feels_like: data.data.temperature.feels_like,
        icon: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${data.data.condition.icon}.png`,
        coordinates_longitude: data.data.coordinates.longitude,
        coordinates_latitude: data.data.coordinates.latitude,
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

      {weatherData ? (
        <div>
          <h1>{city}</h1>
          <p>
            <FormattedDate date={weatherData.date} />
          </p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li className="condition-description text-capitalize">
                  {" "}
                  <img src={weatherData.icon} alt={""} />
                  {weatherData.description}
                </li>
                <WeatherTemperature celsius={weatherData.temperature} />
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
      ) : (
        <div>make this pretty</div>
      )}

      <WeatherForecast icon={weatherData.icon} />
      <WeatherForecast
        coordinates_longitude={weatherData.coordinates_longitude}
        coordinates_latitude={weatherData.coordinates_latitude}
      />
    </div>
  );
}
