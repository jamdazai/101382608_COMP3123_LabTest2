/**
 * Lab Test 2 for COMP 3123 - Full Stack Development
 * @author: Jam Furaque
 */
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTemperatureHigh, faTint, faWind } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Weather = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [error, setError] = useState("");

  const fetchWeather = async (cityName) => {
    const API_KEY = "9039eea60c7f9f5d49e5a478c7382575";
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      setWeatherData(response.data);
      setError("");

      const forecastResponse = await axios.get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      const filteredForecast = forecastResponse.data.list.slice(0, 5).map((item) => ({
        time: new Date(item.dt * 1000).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        temp: item.main.temp,
        icon: item.weather[0].icon,
      }));
      setForecastData(filteredForecast);
    } catch (err) {
      setError("City not found!");
    }
  };

  const capitalizeWords = (string) => {
    return string
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };
  
  

  useEffect(() => {
    fetchWeather(city || "Toronto");
  }, [city]);

  return (
    <div className="weather-box">
      {error && <p>{error}</p>}
      {weatherData && (
        <div className="current-weather">
          <h2>{weatherData.name}</h2>
          <h3>{weatherData.main.temp}°C</h3>
          <p>{capitalizeWords(weatherData.weather[0].description)}</p>
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt="Weather icon"
          />
        </div>
      )}
      {forecastData.length > 0 && (
        <div className="forecast">
          <h3>Today's Forecast</h3>
          <div className="forecast-details">
            {forecastData.map((hour, index) => (
              <div key={index} className="forecast-item">
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
      )}
      {weatherData && (
        <div className="air-conditions">
        <h3>Air Conditions</h3>
        <div className="condition-item">
          <FontAwesomeIcon icon={faTemperatureHigh} className="icon" />
          <p>Real Feel: {weatherData.main.feels_like}°C</p>
        </div>
        <div className="condition-item">
          <FontAwesomeIcon icon={faTint} className="icon" />
          <p>Humidity: {weatherData.main.humidity}%</p>
        </div>
        <div className="condition-item">
          <FontAwesomeIcon icon={faWind} className="icon" />
          <p>Wind: {weatherData.wind.speed} km/h</p>
        </div>
      </div>      
      )}
    </div>
  );
};

export default Weather;
