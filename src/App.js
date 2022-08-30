import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Main from "./comps/Main";
import Navbar from "./comps/Navbar";
import Almaty from "./pages/Almaty";
import Ottawa from "./pages/Ottawa";
import Vancouver from "./pages/Vancouver";

function App() {
  const [data, setData] = useState([]);
  const currentURL = `https://api.openweathermap.org/data/2.5/weather?q=Burnaby&appid=b2d920699bdff95168ac769bec7938de`;

  const [currentWeather, setCurrentWeather] = useState([]);
  const [forecast, setForecast] = useState([]);

  const getCurrentWeather = async () => {
    const { data } = await axios.get(currentURL);
    setData(data);
  };

  useEffect(() => {
    getCurrentWeather();
    // console.log(data);
  }, []);

  return (
    <>
      {/* <p>{data.name}</p>
      <p>{data.main.temp}</p>
      <img 
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
    </>
  );
}

export default App;
