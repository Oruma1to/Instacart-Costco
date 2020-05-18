import React, { Component } from "react";

import { getProducts } from "../../services/product";
import Product from "./Product";
import "./ProductList.css";
import { Link } from 'react-router-dom'

class ProductList extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
    };
  }

  async componentDidMount() {
    const products = await getProducts();
    this.setState({ products });
  }

  render() {
    console.log("all products-->", this.state.products);
    const PRODUCTS = this.state.products
      .slice(0, 4)
      .map((product, index) => (
        <Product
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
      <>
        <div className="buyagain">
          <div className="product-header">
            <p className="product-header-title">Buy Again</p>
            <p className="product-header-vm">view 57 more</p>
          </div>
          <div className="carousel">{PRODUCTS}</div>
        </div>
      </>
    );
  }
}

export default ProductList;
