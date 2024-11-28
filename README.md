# Weather App
This Weather App was developed as part of my COMP 3123 - Full Stack Development Lab Test 2. The app allows users to view real-time weather data for any city, including the current weather conditions, detailed hourly forecasts, and air conditions like Real Feel, humidity, and wind speed. The app provides a modern, responsive, and visually appealing interface, making it both functional and user-friendly.

# Author
Developed by Jam Furaque
COMP 3123 - Full Stack Development Lab Test 2
George Brown College

## Features
- City Search: Search for real-time weather data by entering the city name in the search bar.
- Current Weather: Displays the current temperature, weather description, and a weather icon.
- Hourly Forecast: Shows the temperature and weather conditions for the next five time intervals.
- Air Conditions: Highlights additional weather metrics such as:
    - Real Feel: Feels-like temperature
    - Humidity: Percentage of atmospheric humidity
    - Wind Speed: Speed of wind in km/h
- Responsive Design: Adapts seamlessly to both desktop and mobile devices.
- Modern UI: Designed with dynamic gradients, professional layouts, and weather-related icons for improved user experience.

## Technology Stack
This project leverages the following technologies:

- React.js: Frontend library for building the user interface.
- OpenWeatherMap API: Real-time weather data provider.
- CSS: For custom styling with Flexbox and grid layouts.
- Font Awesome: For weather and air condition icons.

## How the App Works
1. Search for a City: 
    - Users can type the name of a city into the search bar to fetch weather data for that location.
2. View Current Weather:
     - Displays the city name, current temperature, and weather description (e.g., "Overcast Clouds").
     - Shows a weather icon that matches the current condition.
3.  View Hourly Forecast:
    - Provides the temperature and weather icons for the next five time slots.
4. Air Conditions:
    - Displays Real Feel, humidity, and wind speed with accompanying icons for better readability.

## Purpose of the App
This project was developed as part of the COMP 3123 - Full Stack Development Lab Test 2 to demonstrate the following skills:

- Integrating external APIs (OpenWeatherMap API) in a React.js application.
- Managing state using React hooks (useState, useEffect).
- Building a responsive and visually appealing user interface.
- Working with dynamic data and handling asynchronous API calls.


## Future Improvements
- Add a 5-day extended forecast view for better weather insights.
- Implement geolocation-based weather search.
- Include additional metrics such as Air Quality Index (AQI).
- Introduce a dark mode for enhanced user experience.