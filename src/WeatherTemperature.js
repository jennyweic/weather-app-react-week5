import React from "react";
import { Weather } from "./Weather";

export default function WeatherTemperature({ celsius }) {
  return (
    <div>
      <li className="temperature">{celsius}°C</li>
    </div>
  );
}
