import React, { Component } from "react";

import { getProducts } from "../../services/product";
import Product from "./Product";

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
            <h1>Buy Again</h1>
            <h3>view 57 more</h3>
          </div>
          <div>{PRODUCTS}</div>
        </div>
      </>
    );
  }
}

export default ProductList;
