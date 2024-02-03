import React from "react";
import "./Weather.css";
export function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter your city"
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" />
          </div>
        </div>
      </form>

      <h1>London</h1>
      <p>Sat, 11:00 am</p>

      <div className="row">
        <div className="col-6">
          <ul>
            <img
              src="https://www.ecosia.org/images?q=clear%20sky%20icon&addon=chrome&addonversion=6.0.2#id=B2B98955E30D4CEF6DE23F2EF24A9B3C013CC4C5"
              alt="clear-sky-icon"
            />
            <li>Clear</li>
            <li>12°C</li>
          </ul>
        </div>
        <div className="col-6">
          <ul>
            <li>Feels like 10°C</li>
            <li>Percepitation 2%</li>
            <li>Wind 5km/h</li>
            <li>Humidity 15%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
