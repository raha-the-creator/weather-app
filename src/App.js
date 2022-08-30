import React, { useState, useEffect } from "react";
import axios from "axios";
import Main from "./comps/Main";

function App() {
  const [data, setData] = useState([])
  const currentURL = `https://api.openweathermap.org/data/2.5/weather?q=Burnaby&appid=b2d920699bdff95168ac769bec7938de`
  
  const [currentWeather, setCurrentWeather] = useState([])
  const [forecast, setForecast] = useState([])

  const getCurrentWeather = async () => {
    const { data } = await axios.get(currentURL)
    setData(data)
  }

  useEffect(() => {
    getCurrentWeather()
    console.log(data);
  }, [])

  return (
    <div className="app">
      {/* <p>{data.name}</p>
      <p>{data.main.temp}</p>
      <img 
        alt='weather icon'
        src={`icons/${data.weather[0].icon}.png`}
      /> */}
      <Main />
    </div>
  );
}

export default App;
