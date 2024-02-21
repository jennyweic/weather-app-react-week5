import React from "react";
import { Weather } from "./Weather";

export default function WeatherForecast(props) {
  console.log(props);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          Thu icon <img src={props.icon} />
          19 10
        </div>
      </div>
    </div>
  );
}
