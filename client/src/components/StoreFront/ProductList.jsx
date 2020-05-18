import React, { Component } from "react";

import { getProducts } from "../../services/product";

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
    return <div></div>;
  }
}

export default ProductList;
