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
   product: [],
   found: []
  };
 }
 setFound = found => this.setState({ found }, this.props.setSearchProducts(null))


 renderingProducts = (value) => {

  if (this.props.listDataFromChild !== null) {
   value = this.props.listDataFromChild.map((product, index) => (
    <Product
     user={this.props.user}
     key={index}
     {...product}
    />
   ))
  } else {
   if (this.props.searchProducts !== null) {
    value =
     this.props.searchProducts.map((product, index) => (
      <Product
       user={this.props.user}
       key={index}
       {...product}
      />
     ))
   } else if (this.state.found.length > 0) {
    value = this.state.found.map((product, index) => (
     <Product
      user={this.props.user}
      key={index}
      _id={product._id}
      {...product}
     />
    ))
   }
  }
  return value
 }

 componentDidUpdate = () => {
  if (this.props.searchProducts !== null && this.state.found.length) {
   // this.props.setSearchProducts(null)
   this.setState({ found: [] })
  } else if (this.props.searchProducts !== null && this.props.listDataFromChild) {
   this.props.setListDataFromChild(null)
  }
 }

 render() {
  console.log("StoreBody", this.props.listDataFromChild)
  console.log("in rende")
  console.log("Search products", this.props.searchProducts)
  // console.log("found", this.state.found)
  let products = null
  products = this.renderingProducts(products);
  // console.log("in render ", products)

  return (
   <div className="storeBodyPage">
    <DeliveryTo />
    <main className="storeBodySection">
     <Departments setFound={this.setFound} products={this.props.products} setSearchProducts={this.props.setSearchProducts} />
     {products ?
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
