import React from "react";
import "./Weather.css";
export function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              className="Search-text-btn"
              type="search"
              placeholder="Enter your city"
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input className="btn" type="submit" value="Search" />
          </div>
        </div>
      </form>

      <h1>London</h1>
      <p>Sat, 11:00 am</p>

      <div className="row">
        <div className="col-6">
          <ul>
            <li className="condition-description">
              {" "}
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
                alt="clear-sky-icon"
              />
              Clear
            </li>
            <li className="temperature">12°C</li>
          </ul>
        </div>
        <div className="col-6">
          <ul className="details">
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
