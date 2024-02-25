import React, { useState } from "react";
import { Weather } from "./Weather";
import "./WeatherForecast.css";
import ForecastFormatDate from "./ForecastFormatDate";
import axios from "axios";

export default function WeatherForecast(props) {
  console.log(props);

  let [forecastLoaded, setForecastLoaded] = useState(false);
  let [dailyForecastData, setDailyForecastData] = useState(null);

  function handleResponse(response) {
    console.log(response.daily);
    setDailyForecastData(response.daily);
    setForecastLoaded(true);
  }

  let longitude = props.coordinates_longitude;
  let latitude = props.coordinates_latitude;

  if (!dailyForecastData) return null;

  if (forecastLoaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">
              <ForecastFormatDate
                date={new Date(dailyForecastData[1].time * 1000)}
              />
            </div>
            <img src={props.icon} />
            <div className="WeatherForecast-temperature">
              <span className="WeatherForecast-temperature-max">
                {Math.round(dailyForecastData[1].temperate.maximum)}°
              </span>
              <span className="WeatherForecast-temperature-min">
                {Math.round(dailyForecastData[1].temperature.minimum)}°
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
