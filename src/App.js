import React, { useState, useEffect } from "react";
import axios from "axios";

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

  // axios.get(url).then((response) => {
  //   setData(response.data)
  //   console.log(response.data)
  // })


  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
            <p>{data.main.temp}</p>
            <img 
              alt='weather icon'
              src={`icons/${data.weather[0].icon}.png`}
            />
          </div>
        </div>
        <div className="bottom">
          <p>Feels</p>
        </div>
      </div>
    </div>
  );
}

export default App;
