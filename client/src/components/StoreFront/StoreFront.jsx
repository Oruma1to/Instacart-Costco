import React, { Component } from "react";
import StoreHeader from "./StoreHeader";
import StoreBody from "./StoreBody";
import "./StoreFront.css";
import { getProducts } from "../../services/product"

export default class StoreFront extends Component {
 constructor() {
  super()
  this.state = {
   products: null
  }
 }
 async componentDidMount() {
  const products = await getProducts();
  this.setState({ products })
 }

 render() {
  return (
   <div className="store-front">
    <StoreHeader user={this.props.user} setSearchProducts={this.props.setSearchProducts} />
    <StoreBody user={this.props.user} searchProducts={this.props.searchProducts} products={this.state.products} setSearchProducts={this.props.setSearchProducts} />
   </div>
  );
 }
}
