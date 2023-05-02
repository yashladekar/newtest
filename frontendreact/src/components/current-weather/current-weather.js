// import React, { useState, useEffect } from "react";

// function CurrentWeather() {
//   const [weatherData, setWeatherData] = useState(null);
//   useEffect(() => {
//     fetch("/api/weather")
//       .then((response) => response.json())
//       .then((data) => setWeatherData(data))
//       .then((data) => console.log(data));
//   }, []);

//   //   useEffect(() => {
//   //     getWeather();
//   //   }, []);

//   //   let getWeather = async () => {
//   //     let response = await fetch("http://127.0.0.1:8000/api/weather");
//   //     let data = await response.json();
//   //     console.log(data);
//   //     setWeatherData(data);
//   //   };

//   return (
//     <div>
//       {weatherData ? (
//         <div>
//           <h1>Current Weather</h1>
//           <p>Temperature: {weatherData.temperature}°F</p>
//           <p>Conditions: {weatherData.conditions}</p>
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }

// export default CurrentWeather;

import React from "react";
import "./current-weather.css";

const CurrentWeather = ({ data }) => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-description">{data.weather[0].description}</p>
        </div>
        <img
          alt="weather"
          className="weather-icon"
          src={`icons/${data.weather[0].icon}.png`}
        />
      </div>
      <div className="bottom">
        <p className="temperature">{Math.round(data.main.temp)}°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">
              {Math.round(data.main.feels_like)}°C
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{data.wind.speed} m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{data.main.humidity}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
