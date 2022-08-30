import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {

  return (
    <div className="navbar-cont">
      <Link to="/" style={{textDecoration: 'none'}} activeStyle={{color: '#5FB0E8'}}>
        <h2 className="city">VANCOUVER</h2>
      </Link>
      <Link to="/ottawa" style={{textDecoration: 'none'}}>
        <h2>OTTAWA</h2>
      </Link>
      <Link to="/almaty" style={{textDecoration: 'none'}}>
        <h2>ALMATY</h2>
      </Link>
    </div>
  );
};

export default Navbar;
