import React, { Component } from "react";
import { DeliveryTo } from "./DeliveryTo";
import ProductList from "./ProductList";
import Departments from "./Departments"
import Product from "../StoreFront/Product"
import './StoreBody.css'

export default class StoreBody extends Component {
 constructor(props) {
  super(props);

  this.state = {
   foundProducts: [],
  };
 }
 render() {
  console.log("In storeBody", this.props.user)
  console.log("IN STOREBODY", this.props.searchProducts)
  const products =
   this.props.searchProducts ?
    this.props.searchProducts.map((product, index) => (
     <Product
      user={this.props.user}
      key={index}
      _id={product._id}
      imageURL={product.imageURL}
      brand={product.brand}
      name={product.name}
      price={product.price}
      size={product.size}
     />
    )) :
    "";
  return (
   <div className="storeBodyPage">
    <DeliveryTo />
    <main className="storeBodySection">
     <Departments />
     {products ?
      // <div className="searchProductsOuterDiv"></div>
      <div className="searchProductsOuterDiv">{products}</div>

      :
      <div className="storebody-products-list">
       <ProductList user={this.props.user} dataInfo={1} title="Buy Again" />
       <ProductList user={this.props.user} dataInfo={2} title="New Arrivals" />
      </div>
     }
    </main>
   </div>
  );
 }
};
