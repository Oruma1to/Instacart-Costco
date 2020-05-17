import React from "react";
import { NavLink } from "react-router-dom";
import "./LandingHeader.css";

const LandingHeader = () => {
 return (
  <nav className="nav-main">
   <div className="shopper">
    <p>Want to earn extra money?</p>
    <button className="shopper-btn">Become a Shopper</button>
   </div>

   {/* <div className="outer-btn"> */}
   <button className="login-link-container">
    <NavLink className="login-link" to="/sign-in">
     Log in
          </NavLink>
   </button>
   {/* </div> */}
  </nav>
 );
};

export default LandingHeader;
