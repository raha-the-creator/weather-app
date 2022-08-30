import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {

  return (
    <div className="navbar-cont">
      <Link to="/">
        <h2>Vancouver</h2>
      </Link>
      <Link to="/ottawa">
        <h2>Ottawa</h2>
      </Link>
      <Link to="/almaty">
        <h2>Almaty</h2>
      </Link>
    </div>
  );
};

export default Navbar;
