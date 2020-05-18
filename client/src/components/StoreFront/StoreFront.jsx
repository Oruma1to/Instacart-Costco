import React, { Component } from "react";
import StoreHeader from "./StoreHeader";
import { StoreBody } from "./StoreBody";

import "./StoreFront.css";

export default class StoreFront extends Component {
 render() {
  console.log("In Store Front ", this.props.user)
  return (
   <div className="store-front">
    <StoreHeader user={this.props.user} />
    <StoreBody />
   </div>
  );
 }
}
