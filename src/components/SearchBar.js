/**
 * Lab Test 2 for COMP 3123 - Full Stack Development
 * @author: Jam Furaque
 */
import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city) {
      onSearch(city);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for cities"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
