import React, { useState, useEffect } from "react";
import "./Main.css";
import axios from "axios";

const Main = () => {
  const [data, setData] = useState([]);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const currentURL = `https://api.openweathermap.org/data/2.5/weather?q=Almaty&appid=b2d920699bdff95168ac769bec7938de`;
  const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=Almaty&appid=dcb32574b550d9e3caafbfc925539c4b`;

  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [upcomingDays, setUpcomingDays] = useState([]);

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
  // console.log(forecast.list[3].dt_txt);

  const today = new Date();
  let day1 = new Date(today.getTime());
  let day2 = new Date(today.getTime());
  let day3 = new Date(today.getTime());
  let day4 = new Date(today.getTime());

  day1.setDate(day1.getDate() + 1);
  day2.setDate(day2.getDate() + 2);
  day3.setDate(day3.getDate() + 3);
  day4.setDate(day4.getDate() + 4);

  let newDay1 = weekday[day1.getDay()];
  let newDay2 = weekday[day2.getDay()];
  let newDay3 = weekday[day3.getDay()];
  let newDay4 = weekday[day4.getDay()];

  return (
    <div className="container">
      <div className="current">
        <h2>Today</h2>
        <div className="today">
          <div className="today-icon">
            <img
              alt="weather icon"
              src={`icons/${currentWeather.weather[0].icon}.png`}
            />
          </div>
          <div className="today-data">
            <p>{currentWeather.main.temp}°F</p>
            <p>{currentWeather.weather[0].description}</p>
          </div>
        </div>
      </div>
      <div className="forecast-cont">
        <div className="box">
          {/* <p>{forecast.list[3].dt_txt}</p> */}
          <p>{newDay1}</p>
          <img
            alt="icon"
            src={`icons/${forecast.list[3].weather[0].icon}.png`}
          />
          <p>{forecast.list[3].main.temp}°F</p>
        </div>
        <div className="box">
          <p>{newDay2}</p>
          <img
            alt="icon"
            src={`icons/${forecast.list[11].weather[0].icon}.png`}
          />
          <p>{forecast.list[11].main.temp}°F</p>
        </div>
        <div className="box">
          <p>{newDay3}</p>
          <img
            alt="icon"
            src={`icons/${forecast.list[19].weather[0].icon}.png`}
          />
          <p>{forecast.list[19].main.temp}°F</p>
        </div>
        <div className="box">
          <p>{newDay4}</p>
          <img
            alt="icon"
            src={`icons/${forecast.list[27].weather[0].icon}.png`}
          />
          <p>{forecast.list[27].main.temp}°F</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
