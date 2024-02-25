import React, { useState } from "react";
import { Weather } from "./Weather";
import "./WeatherForecast.css";
import ForecastFormatDate from "./ForecastFormatDate";
import axios from "axios";

export default function WeatherForecast(props) {
  console.log(props);

  let [forecastLoaded, setForecastLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  function handleResponse(response) {
    console.log(response);

    const forecastData = {
      date: new Date(response.data.daily[1].time * 1000),
      max_temperature: response.data.daily[1].temperature.maximum,
      min_temperature: response.data.daily[1].temperature.minimum,
    };

    setForecastData(forecastData);
    setForecastLoaded(true);
  }

  let longitude = props.coordinates_longitude;
  let latitude = props.coordinates_latitude;

  if (!longitude || !latitude) return null;

  if (forecastLoaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">
              {/* {JSON.stringify(forecastData.date)} */}
              <ForecastFormatDate date={forecastData.date} />
            </div>
            <img src={props.icon} />
            <div className="WeatherForecast-temperature">
              <span className="WeatherForecast-temperature-max">
                {Math.round(forecastData.max_temperature)}°
              </span>
              <span className="WeatherForecast-temperature-min">
                {Math.round(forecastData.min_temperature)}°
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiURL = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=698445003bc2a9cbfcb050ae4t74oc8b`;
    console.log(apiURL);
    axios.get(apiURL).then(handleResponse);
    return null;
  }
}
