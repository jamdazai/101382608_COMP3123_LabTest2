/**
 * Lab Test 2 for COMP 3123 - Full Stack Development
 * @author: Jam Furaque
 */

import React from "react";

const CurrentWeather = ({ data }) => {
  return (
    <div className="current-weather card shadow p-4">
      <h2>{data.name}</h2>
      <h3>{data.main.temp}°C</h3>
      <p>{data.weather[0].description}</p>
      <img
        className="weather-icon"
        src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt="Weather icon"
      />
    </div>
  );
};

export default CurrentWeather;
