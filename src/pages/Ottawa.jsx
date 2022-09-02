import React, { useState, useEffect } from "react";
import "../comps/Main";
import axios from "axios";

const Ottawa = () => {
  const [data, setData] = useState([]);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const currentURL = `https://api.openweathermap.org/data/2.5/weather?q=Ottawa&appid=b2d920699bdff95168ac769bec7938de`;
  const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=Ottawa&appid=dcb32574b550d9e3caafbfc925539c4b`;

  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [upcomingDays, setUpcomingDays] = useState([]);

  // useEffect(() => {
  //   axios.get(currentURL).then(async (response) => {
  //     setCurrentWeather(response.data);
  //   });

  //   axios.get(forecastURL).then(async (response) => {
  //     setForecast(response.data);
  //     // console.log(response);
  //   });

  //   Promise.all([currentURL, forecastURL])
  //     .then(async (response) => {
  //       const weatherResponse = await response[0].json();
  //       const forecastResponse = await response[1].json();

  //       setCurrentWeather({ ...weatherResponse });
  //       setForecast({ ...forecastResponse });
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  // console.log(currentWeather);
  // console.log(forecast);
  // console.log(forecast.list[3].dt_txt);

  // let updateDay1 = weekday[day1.getDay()]

  // const day1 = forecast.list[3].dt_txt
  // const weekDay = day1.getDay();
  // console.log(day1);


  // const d = new Date();
  // const today = weekday[d.getDay()
  // for(i = 0; i < today.valueOf; i++) {

  // }
  // let day1 = weekday[d.getDay() + 1];
  // let day2 = weekday[d.getDay() + 2];
  // let day3 = weekday[d.getDay() + 3];
  // console.log(day1);
  // console.log(day2);
  // console.log(day3);

  // console.log(weekDay);

  return (
    <div className="container">
      {/* <div className="current">
        <h2>Today</h2>
        <div className="today">
          <div className="today-icon">
            <img alt="weather icon" src={`icons/${currentWeather.weather[0].icon}.png`} />
          </div>
          <div className="today-data">
            <p>{currentWeather.main.temp}°F</p>
            <p>{currentWeather.weather[0].description}</p>
          </div>
        </div>
      </div>
      <div className="forecast-cont">
        <div className="box">
          <p>{forecast.list[3].dt_txt}</p>
          <p>Wednesday</p>
          <img alt="icon" src={`icons/${forecast.list[3].weather[0].icon}.png`} />
          <p>{forecast.list[3].main.temp}°F</p>
        </div>
        <div className="box">
          <p>Wednesday</p>
          <img alt="icon" src={`icons/${forecast.list[11].weather[0].icon}.png`} />
          <p>{forecast.list[11].main.temp}°F</p>
        </div>
        <div className="box">
          <p>Wednesday</p>
          <img alt="icon" src={`icons/${forecast.list[19].weather[0].icon}.png`} />
          <p>{forecast.list[19].main.temp}°F</p>
        </div>
        <div className="box">
          <p>Wednesday</p>
          <img alt="icon" src={`icons/${forecast.list[27].weather[0].icon}.png`} />
          <p>{forecast.list[27].main.temp}°F</p>
        </div>
      </div> */}
    </div>
  );
};

export default Ottawa;
