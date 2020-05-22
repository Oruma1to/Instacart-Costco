import React from "react";
import { NavLink } from "react-router-dom";
import "./LandingHeader.css";

const LandingHeader = () => {
  return (
    <nav className="nav-main">
      <div className="shopper">
        <p className="shopper-text">Want to earn extra money?</p>
        <button className="shopper-btn">Become a Shopper</button>
      </div>


      <button className="login-link-container">
        <NavLink className="login-link" to="/sign-in">
          Log in
    </NavLink>
      </button>
    </nav>
  );
};

export default LandingHeader;
