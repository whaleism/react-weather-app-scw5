import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

import "./Weather.css";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-3">
          <WeatherIcon code={props.data.icon} size={75} />
        </div>
        <div className="col-9">
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
          <div className="row">
            <div className="col-6">
              <h1>{props.data.city}</h1>
            </div>
            <div className="col-6">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              Humidity: <strong>{Math.round(props.data.humidity)}%</strong>
            </div>
            <div className="col-6">
              Wind: <strong>{Math.round(props.data.wind)} mph</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
