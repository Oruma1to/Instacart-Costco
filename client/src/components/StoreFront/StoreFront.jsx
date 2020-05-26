import React, { Component } from "react";
import StoreHeader from "./StoreHeader";
import StoreBody from "./StoreBody";
import "./StoreFront.css";
import { getProducts } from "../../services/product"

export default class StoreFront extends Component {
 constructor() {
  super()
  this.state = {
   products: null,
   listDataFromChild: null
  }
 }
 async componentDidMount() {
  const products = await getProducts();
  this.setState({ products })
 }

 setListDataFromChild = listDataFromChild => this.setState({ listDataFromChild }, this.props.setSearchProducts(null))

 myCallback = (dataFromChild) => {
  this.setState({ listDataFromChild: dataFromChild });
 }

 render() {
  console.log("StoreFront", this.state.listDataFromChild)
  return (
   <div className="store-front">
    <StoreHeader user={this.props.user} setSearchProducts={this.props.setSearchProducts} products={this.state.products} callbackFromParent={this.myCallback} />
    <StoreBody user={this.props.user} searchProducts={this.props.searchProducts} products={this.state.products} setSearchProducts={this.props.setSearchProducts} listDataFromChild={this.state.listDataFromChild} setListDataFromChild={this.setListDataFromChild} />
   </div>
  );
 }
}
