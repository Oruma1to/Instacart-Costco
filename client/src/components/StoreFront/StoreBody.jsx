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
   filterValue: [],
   found: null
  };
 }
 setFound = found => this.setState({ found })


 renderingProducts = (value) => {

  if (this.props.searchProducts !== null) {
   value =
    this.props.searchProducts.map((product, index) => (
     <Product
      user={this.props.user}
      key={index}
      {...product}
     />
    ))
  } else if (this.state.found) {
   console.log("in the rendering else if statement", this.state.found)
   value = this.state.found.map((product, index) => (
    <Product
     user={this.props.user}
     key={index}
     _id={product._id}
     {...product}
    />
   ))
  }
  return value
 }

 componentDidUpdate = () => {
  if (this.props.searchProducts !== null && this.state.found) {
   this.setState({ found: [] })
  }
 }

 render() {
  let products = null
  products = this.renderingProducts(products);

  return (
   <div className="storeBodyPage">
    <DeliveryTo />
    <main className="storeBodySection">
     <Departments setFound={this.setFound} products={this.props.products} />
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
