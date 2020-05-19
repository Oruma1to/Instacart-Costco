import React, { Component } from "react";

import "./ProductDetail.css";
import { getProduct } from "../services/product";
import { Link } from "react-router-dom";

class ProductDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {
        name: "",
        brand: "",
        department: "",
        category: "",
        imageURL: "",
        price: 0,
        quantity: 0,
        size: "",
      },
    };
  }

  async componentDidMount() {
    let { id } = this.props.match.params;
    const product = await getProduct(id);
    this.setState({ product });
  }

  render() {
    const { product } = this.state;
    return (
      <div>
        <div>
          <img className="" src={product.imageURL} alt={product.name} />
        </div>
        <div>
          <div className="">{product.name}</div>
          <div className="">{product.brand}</div>
          <div className="">{product.department}</div>
          <div className="">{product.category}</div>
          <div className="">${product.price}</div>
          <div className="">{product.quantity}</div>
          <div className="">{product.size}</div>
        </div>
        <div>
          <button className="edit-btn">
            <Link to="">EDIT</Link>
          </button>
          <button className="delete-btn">
            <Link to="">DELETE</Link>
          </button>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
