/**
 * Lab Test 2 for COMP 3123 - Full Stack Development
 * @author: Jam Furaque
 */

import React from "react";

const AirConditions = ({ data }) => {
  return (
    <div className="air-conditions card shadow p-4">
      <h3>Air Conditions</h3>
      <p>Real Feel: {data.main.feels_like}°C</p>
      <p>Wind Speed: {data.wind.speed} km/h</p>
      <p>Humidity: {data.main.humidity}%</p>
    </div>
  );
};

export default AirConditions;
