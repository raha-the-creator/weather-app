import React from 'react'
import "./Main.css"

const Main = () => {
  return (
    <div className='container'>
      <div className='current'>
        <h2>Today</h2>
        <div className='today'>
          <div className='today-icon'>
            <img 
            alt='weather icon'
            src='icons/01d.png' 
            />
          </div>
          <div className='today-data'>
            <p>19°F</p>
            <p>Clouds</p>
          </div>
        </div>
      </div>
      <div className='forecast-cont'>
        <div className='box'>
          <p>Wednesday</p>
          <img 
            alt='icon'
            src='icons/01d.png'
          />    
          <p>19°F</p>
        </div>
        <div className='box'>
          <p>Wednesday</p>
          <img 
            alt='icon'
            src='icons/01d.png'
          />    
          <p>19°F</p>
        </div>
        <div className='box'>
          <p>Wednesday</p>
          <img 
            alt='icon'
            src='icons/01d.png'
          />    
          <p>19°F</p>
        </div>
        <div className='box'>
          <p>Wednesday</p>
          <img 
            alt='icon'
            src='icons/01d.png'
          />    
          <p>19°F</p>
        </div>
      </div>
    </div>
  )
}

export default Main