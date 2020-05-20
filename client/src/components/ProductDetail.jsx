import React, { Component } from "react";
import StoreFrontNavBar from './StoreFront/StoreFrontNavBar'
import "./ProductDetail.css";
import { getProduct } from "../services/product";
import { Link, NavLink } from "react-router-dom";

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
      <div className="productDetail-outerDiv">
        <div className="productDetail-Header">
          <StoreFrontNavBar user={this.props.user} />
        </div>
        <div className="productDetail-container">

          <div className="details-of-Products">
            <div className="productDetail-image-container">
              <img
                className="productDetail-image"
                src={product.imageURL}
                alt={product.name}
              />
            </div>
            <div className="items-details">
              <div className="productDetail-label">Name:</div>
              <div className="productDetail">{product.name}</div>

              <div className="productDetail-label">Brand:</div>
              <div className="productDetail">{product.brand}</div>

              <div className="productDetail-label">Price:</div>
              <div className="productDetail">${product.price}</div>

              <div className="productDetail-label">Quantity:</div>
              <div className="productDetail">{product.quantity}</div>

              <div className="productDetail-label">Size:</div>
              <div className="productDetail">{product.size}</div>

              <div className="productDetail-label">Deparment:</div>
              <div className="productDetail">{product.department}</div>

              <div className="productDetail-label">Category: </div>
              <div className="productDetail">{product.category}</div>
            </div>

          </div>
          <div className="productDetail-buttons">
            <button className="edit-btn" >EDIT</button>
            <button className="delete-btn" >DELETE</button>
          </div>
        </div>
      </div>
    );
  }

}

export default ProductDetail;
