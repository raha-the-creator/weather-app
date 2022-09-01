import React, { useState, useEffect } from "react";
import "./Main.css";
import axios from "axios";

const Main = () => {
  const [data, setData] = useState([]);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const currentURL = `https://api.openweathermap.org/data/2.5/weather?q=Vancouver&appid=b2d920699bdff95168ac769bec7938de`;
  const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=Vancouver&appid=dcb32574b550d9e3caafbfc925539c4b`;

  useEffect(() => {
    axios.get(currentURL).then(async (response) => {
      setCurrentWeather(response.data);
    });

    axios.get(forecastURL).then(async (response) => {
      setForecast(response.data);
      // console.log(response);
    });

    Promise.all([currentURL, forecastURL])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ ...weatherResponse });
        setForecast({ ...forecastResponse });
      })
      .catch((err) => console.log(err));
  }, []);

  // console.log(currentWeather);
  // console.log(forecast);

  return (
    <div className="container">
      <div className="current">
        <h2>Today</h2>
        <div className="today">
          <div className="today-icon">
            <img alt="weather icon" src={`icons/${currentWeather.weather[0].icon}.png`} />
            {/* {currentWeather.weather[0].} */}
          </div>
          <div className="today-data">
            <p>{currentWeather.main.temp}°F</p>
            <p>{currentWeather.weather[0].description}</p>
          </div>
        </div>
      </div>
      <div className="forecast-cont">
        <div className="box">
          <p>Wednesday</p>
          <img alt="icon" src={`icons/${forecast.list[0].weather[0].icon}.png`} />
          <p>{forecast.list[0].main.temp}°F</p>
        </div>
        <div className="box">
          <p>Wednesday</p>
          <img alt="icon" src={`icons/${forecast.list[1].weather[0].icon}.png`} />
          <p>{forecast.list[1].main.temp}°F</p>
        </div>
        <div className="box">
          <p>Wednesday</p>
          <img alt="icon" src={`icons/${forecast.list[2].weather[0].icon}.png`} />
          <p>{forecast.list[2].main.temp}°F</p>
        </div>
        <div className="box">
          <p>Wednesday</p>
          <img alt="icon" src={`icons/${forecast.list[3].weather[0].icon}.png`} />
          <p>{forecast.list[3].main.temp}°F</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
