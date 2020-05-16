import React, { Component } from "react";
import StoreHeader from "./StoreHeader";
import { StoreBody } from "./StoreBody";

import "./StoreFront.css";

export default class StoreFront extends Component {
  render() {
    return (
      <div className="store-front">
        <StoreHeader />
        <StoreBody />
      </div>
    );
  }
}
