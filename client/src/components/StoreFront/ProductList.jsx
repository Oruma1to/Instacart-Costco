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
    const PRODUCTS = this.state.products.map((product, index) => (
      <Product
        key={index}
        imageURL={product.imageURL}
        brand={product.brand}
        name={product.name}
        quantity={product.quantity}
      />
    ));

    return <div>{PRODUCTS}</div>;
  }
}

export default ProductList;
