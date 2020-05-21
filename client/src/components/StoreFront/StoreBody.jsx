import React, { Component } from "react";
import { DeliveryTo } from "./DeliveryTo";
import ProductList from "./ProductList";
import Departments from "./Departments"
import Product from "../StoreFront/Product"
import './StoreBody.css'
import { getProducts } from "../../services/product";

export default class StoreBody extends Component {
 constructor(props) {
  super(props);

  this.state = {
   filterValue: [],
   found: [],
   products: null
  };
 }

 async componentDidMount() {
  const filterValue = await getProducts();
  this.setState({ filterValue })
 }




 linkDepartments = (value) => {
  let products = this.state.filterValue.filter(function (product) {
   return product.department === value
  })
  console.log("Found products: ", products)
  this.setState({ found: products })
 }


 renderingProducts = (value) => {
  // let searchProductdata = true;
  if (this.props.searchProducts !== null) {
   value =
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
    ))
  } else if (this.state.found.length > 0) {
   value = this.state.found.map((product, index) => (
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
   ))
  }

  return value
 }


 render() {
  let products = null
  products = this.renderingProducts(products);

  return (
   <div className="storeBodyPage">
    <DeliveryTo />
    <main className="storeBodySection">
     <Departments linkDepartments={this.linkDepartments} />
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
