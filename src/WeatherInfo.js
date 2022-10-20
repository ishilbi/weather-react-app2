import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
              alt="sunnycloudy"
              className="float-left"
            ></img>{" "}
            <span className="temperature">
              {Math.round(props.data.temperature)}
            </span>{" "}
            <span className="unit">°C</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Temp min: {Math.round(props.data.tempMin)}°C</li>
            <li>Temp max: {Math.round(props.data.tempMax)}°C</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/hr</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
