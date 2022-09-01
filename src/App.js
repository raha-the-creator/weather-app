import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Main from "./comps/Main";
import Navbar from "./comps/Navbar";
import Almaty from "./pages/Almaty";
import Ottawa from "./pages/Ottawa";
import Vancouver from "./pages/Vancouver";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./api";


function App() {
  // const [data, setData] = useState([]);
  // const [currentWeather, setCurrentWeather] = useState(null);
  // const [forecast, setForecast] = useState(null);

  // const currentURL = `https://api.openweathermap.org/data/2.5/weather?q=Vancouver&appid=b2d920699bdff95168ac769bec7938de`;
  // const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=Vancouver&id=524901&appid=dcb32574b550d9e3caafbfc925539c4b`;


  // useEffect(() => {
  //   axios.get(currentURL)
  //     .then(async (response) => {
  //       setCurrentWeather(response.data)
  //     })

  //   axios.get(forecastURL)
  //     .then(async response => {
  //       setForecast(response.data)
  //       // console.log(response);
  //     })

  //   Promise.all([currentURL, forecastURL])
  //     .then(async (response) => {
  //       const weatherResponse = await response[0].json();
  //       const forecastResponse = await response[1].json();

  //       setCurrentWeather({...weatherResponse})
  //       setForecast({...forecastResponse})
  //     })
  //     .catch((err) => console.log(err))      
  // }, [])

  // console.log(currentWeather);
  // console.log(forecast);
  // console.log(forecast.list[0].main.temp);


  return (
    <>
      {/* <p>{currentWeather.name}</p>
      <p>{currentWeather.main.temp}</p> */}
      {/* <img 
        alt='weather icon'
        src={`icons/${data.weather[0].icon}.png`}
      /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Vancouver />} />
        <Route path="/ottawa" element={<Ottawa />} />
        <Route path="/almaty" element={<Almaty />} />
      </Routes>
      <br></br>
      <Main />
      
      {/* <p>{currentWeather.name}</p>
      <p>Current temperature: {currentWeather.main.temp}</p>
      <p>Forecast temperature for tomorrow: {forecast.list[0].main.temp}</p> */}
    </>
  );
}

export default App;
