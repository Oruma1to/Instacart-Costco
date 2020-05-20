import React, { Component } from "react";

import { getProducts, getNewArrivals } from "../../services/product";
import Product from "./Product";
import "./ProductList.css";
import { Link } from 'react-router-dom'

class ProductList extends Component {
 constructor(props) {
  super(props);

  this.state = {
   products: [],
  };
 }

 async componentDidMount() {
  let products;
  if (this.props.dataInfo === 1) {
   products = await getProducts();
  } else {
   products = await getNewArrivals();
  }
  this.setState({ products });
 }

 render() {
  console.log("all products-->", this.state.products);
  console.log("all products-->", this.props);
  const PRODUCTS = this.state.products
   // .slice(0, 4)
   .map((product, index) => (
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
   ));

  return (
   // <div className="all-carousels"></div>
   <>
    <div className="buyagain">
     <div className="product-header">
      <p className="product-header-title">Buy Again</p>
      <p className="product-header-vm"><Link to="#">View 57 more ></Link></p>
     </div>
     <div className="carousel">{PRODUCTS}</div>
    </div>
   </>




  );
 }
}

export default ProductList;