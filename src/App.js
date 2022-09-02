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
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/vancouver" element={<Vancouver />} />
        <Route path="/ottawa" element={<Ottawa />} />
        <Route path="/almaty" element={<Almaty />} />
      </Routes>
      <br></br>
      <p>Navigate</p>
      {/* <Vancouver />   */}
      {/* <Main /> */}
    </>
  );
}

export default App;
