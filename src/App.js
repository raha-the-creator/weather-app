import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([])
  const url = `https://api.openweathermap.org/data/2.5/weather?q=Burnaby&appid=b2d920699bdff95168ac769bec7938de`
  
  const getData = async () => {
    const { data } = await axios.get(url)
    setData(data)
  }

  useEffect(() => {
    getData()
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
            <p></p>
            <img 
              alt='weather'
              src={`icons/${data.weather[0].icon}.png`}
            />
            <h1>Temp: {data.main.temp}°F</h1>
            <p>Clouds</p>
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
