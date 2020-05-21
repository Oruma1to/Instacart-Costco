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
   foundProducts: [],
   filterValue: []
  };
 }

 async componentDidMount() {
  const filterValue = await getProducts();
  this.setState({ filterValue })
 }

 linkDepartments = (value) => {
  let found = this.state.filterValue.filter(function (product) {
   return product.department === value
  })
  console.log(found)
 }
 render() {
  // console.log("STOREBODY", this.props.user)
  let searchProductdata = true;
  console.log("STOREBODY SEARCH DATA", this.props.searchProducts)
  if (this.props.searchProducts === null) {
   searchProductdata = false
  }
  const products =
   searchProductdata ?
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
    )) : null;
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
