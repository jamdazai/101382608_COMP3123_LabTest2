/**
 * Lab Test 2 for COMP 3123 - Full Stack Development
 * @author: Jam Furaque
 */
import React, { useState } from "react";
import Weather from "./components/Weather";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  const [city, setCity] = useState("New York");

  return (
    <div className="app-container">
      <h1 className="title">Weather App</h1>
      <h2 className="student-name">by: Jam Furaque - 101382608</h2>
      <SearchBar onSearch={(city) => setCity(city)} />
      <div className="weather-container">
        <Weather city={city} />
      </div>
    </div>
  );
}

export default App;
