import React from "react";
import { Weather } from "./Weather";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  console.log(props);

  function handleResponse(response) {
    console.log(response);
  }

  let longitude = -0.1275;
  let latitude = 51.50722;
  let apiURL = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=698445003bc2a9cbfcb050ae4t74oc8b`;

  axios.get(apiURL).then(handleResponse);

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
}
