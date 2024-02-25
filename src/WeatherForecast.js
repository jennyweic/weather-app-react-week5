import React, { useState } from "react";
import { Weather } from "./Weather";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  console.log(props);

  let [forecastLoaded, setForecastLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  function handleResponse(response) {
    console.log(response);
    setForecastData(response.data);
  }

  if (forecastLoaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">Thu</div>
            <img src={props.icon} />
            <div className="WeatherForecast-temperature">
              <span className="WeatherForecast-temperature-max"> 19°</span>
              <span className="WeatherForecast-temperature-min"> 10°</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let longitude = props.coordinates_longitude;
    let latitude = props.coordinates_latitude;
    let apiURL = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=698445003bc2a9cbfcb050ae4t74oc8b`;

    axios.get(apiURL).then(handleResponse);

    return null;
  }
}
