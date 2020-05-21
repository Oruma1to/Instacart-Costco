import React, { Component } from "react";
import StoreHeader from "./StoreHeader";
import StoreBody from "./StoreBody";

import "./StoreFront.css";

export default class StoreFront extends Component {
 render() {
  // console.log("In Store Front ", this.props.setSearchProducts)
  return (
   <div className="store-front">
    <StoreHeader user={this.props.user} setSearchProducts={this.props.setSearchProducts} />
    <StoreBody user={this.props.user} searchProducts={this.props.searchProducts} />
   </div>
  );
 }
}
