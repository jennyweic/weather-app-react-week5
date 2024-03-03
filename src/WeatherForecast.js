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
    console.log(response.data.daily);

    setForecastData(response.data.daily);
    setForecastLoaded(true);
  }

  let longitude = props.coordinates_longitude;
  let latitude = props.coordinates_latitude;

  if (!longitude || !latitude) return null;

  if (forecastLoaded) {
    return (
      <div className="d-flex flex-row justify-content-center flex-wrap">
        {forecastData.map(function (forecastData, index) {
          if (index === 0) {
            return null;
          }

          return (
            <div className="row" key={index}>
              <div className="col">
                <div className="WeatherForecast-day">
                  {/* {JSON.stringify(forecastData.date)} */}
                  <ForecastFormatDate
                    date={new Date(forecastData.time * 1000)}
                  />
                </div>
                <img src={forecastData.condition.icon_url} />
                <div className="WeatherForecast-temperature">
                  <span className="WeatherForecast-temperature-max">
                    {Math.round(forecastData.temperature.maximum)}°
                  </span>
                  <span className="WeatherForecast-temperature-min">
                    {Math.round(forecastData.temperature.minimum)}°
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    let apiURL = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=698445003bc2a9cbfcb050ae4t74oc8b`;
    console.log(apiURL);
    axios.get(apiURL).then(handleResponse);
    return null;
  }
}
