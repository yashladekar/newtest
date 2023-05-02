import "./App.css";
// import Header from "./components/Header";
import CurrentWeather from "./components/current-weather/current-weather";
import Search from "./components/search/Search";
import { useState } from "react";
import axios from "axios";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);

  const DJANGO_API_URL = "http://127.0.0.1:8000";
  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    axios
      .get(`${DJANGO_API_URL}/weather`, {
        params: {
          lat: lat,
          lon: lon,
        },
      })
      .then((response) => {
        console.log(response.data);
        setCurrentWeather({ city: searchData.label, ...response.data });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  console.log(currentWeather);

  return (
    <div className="App">
      {/* <Header /> */}
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
    </div>
  );
}

export default App;
