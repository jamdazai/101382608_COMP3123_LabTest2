/**
 * Lab Test 2 for COMP 3123 - Full Stack Development
 * @author: Jam Furaque
 */

import React from "react";

const Forecast = ({ forecast }) => {
  return (
    <div className="forecast card shadow p-4">
      <h3>Today's Forecast</h3>
      <div className="d-flex justify-content-around">
        {forecast.map((hour, index) => (
          <div key={index} className="text-center">
            <p>{hour.time}</p>
            <img
              src={`http://openweathermap.org/img/wn/${hour.icon}@2x.png`}
              alt="Weather icon"
            />
            <p>{hour.temp}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
