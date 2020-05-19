import React from "react";

import "./DeliveryTo.css";

export const DeliveryTo = () => {
  return (
    <div className="delivery-to">
      <p>Delivery to</p>

      <div className="drop-down">
        <p className= "zip">10014</p><i className="arrow-down"></i>
      </div>

      <span className="delivey-date">Apr 23 - Apr 24</span>
      <img
        className="info-icon"
        src={require("../../images/info-icon.png")}
        alt="information icon"
      />
    </div>
  );
};
