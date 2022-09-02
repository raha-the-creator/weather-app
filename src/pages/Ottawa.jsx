import React, { useState, useEffect } from "react";
import "../comps/Main.css";
import axios from "axios";
import Navbar from "../comps/Navbar";
import { Route, Routes } from "react-router-dom";


const Ottawa = () => {
  const [data, setData] = useState([]);
  const [ottawaCurrentWeather, setOttawaCurrentWeather] = useState(null);
  const [ottawaForecast, setOttawaForecast] = useState(null);

  const currentURL = `https://api.openweathermap.org/data/2.5/weather?q=Ottawa&appid=b2d920699bdff95168ac769bec7938de`;
  const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=Ottawa&appid=dcb32574b550d9e3caafbfc925539c4b`;

  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  useEffect(() => {
    axios.get(currentURL).then(async (response) => {
      setOttawaCurrentWeather(response.data);
    });

    axios.get(forecastURL).then(async (response) => {
      setOttawaForecast(response.data);
      // console.log(response);
    });

    Promise.all([currentURL, forecastURL])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setOttawaCurrentWeather({ ...weatherResponse });
        setOttawaForecast({ ...forecastResponse });
      })
      .catch((err) => console.log(err));
  }, []);

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
    <>
      <div className="container">
        <div className="current">
          <h2>Today</h2>
          <div className="today">
            <div className="today-icon">
              <img
                alt="weather icon"
                src={`icons/${ottawaCurrentWeather.weather[0].icon}.png`}
              />
            </div>
            <div className="today-data">
              <p>{ottawaCurrentWeather.main.temp}°F</p>
              <p>{ottawaCurrentWeather.weather[0].description}</p>
            </div>
          </div>
        </div>
        <div className="forecast-cont">
          <div className="box">
            <p>{ottawaForecast.list[3].dt_txt}</p>
            <p>Wednesday</p>
            <img
              alt="icon"
              src={`icons/${ottawaForecast.list[3].weather[0].icon}.png`}
            />
            <p>{ottawaForecast.list[3].main.temp}°F</p>
          </div>
          <div className="box">
            <p>Wednesday</p>
            <img
              alt="icon"
              src={`icons/${ottawaForecast.list[11].weather[0].icon}.png`}
            />
            <p>{ottawaForecast.list[11].main.temp}°F</p>
          </div>
          <div className="box">
            <p>Wednesday</p>
            <img
              alt="icon"
              src={`icons/${ottawaForecast.list[19].weather[0].icon}.png`}
            />
            <p>{ottawaForecast.list[19].main.temp}°F</p>
          </div>
          <div className="box">
            <p>Wednesday</p>
            <img
              alt="icon"
              src={`icons/${ottawaForecast.list[27].weather[0].icon}.png`}
            />
            <p>{ottawaForecast.list[27].main.temp}°F</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ottawa;
