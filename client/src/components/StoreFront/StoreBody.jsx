import React, { Component } from "react";
import { DeliveryTo } from "./DeliveryTo";
import ProductList from "./ProductList";
import Departments from "./Departments"
import './StoreBody.css'

export default class StoreBody extends Component {
 constructor(props) {
  super(props);

  this.state = {
   products: [],
  };
 }
 render() {
  console.log("In storeBody", this.props.user)
  console.log("IN STOREBODY", this.props.searchProducts)
  return (
   <div className="storeBodyPage">
    <DeliveryTo />
    <main className="storeBodySection">
     <Departments />
     {/* {props.searchProducts ? } */}
     <div className="storebody-products-list">
      <ProductList user={this.props.user} dataInfo={1} title="Buy Again" />
      <ProductList user={this.props.user} dataInfo={2} title="New Arrivals" />
     </div>
    </main>
   </div>
  );
 }
};
