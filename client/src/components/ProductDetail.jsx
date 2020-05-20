import React, { Component } from "react";

import "./ProductDetail.css";
import { getProduct, deleteProduct } from "../services/product";
import { Link, Redirect } from "react-router-dom";

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
   <div className="productDetail-container">

    <div className="productDetail-image-container">
     <img
      className="productdetail-image"
      src={product.imageURL}
      alt={product.name}
     />
    </div>


    <div className="items-details">
     <div className="productDetail-name">{product.name}</div>
     <div className="productDetail-brand">{product.brand}</div>
     <div className="productDetail-department">{product.department}</div>
     <div className="productdetail-category">{product.category}</div>
     <div className="productDetail-price">${product.price}</div>
     <div className="productDetail-quantity">{product.quantity}</div>
     <div className="productDetail-size">{product.size}</div>

     <div className="productDetail-buttons">
      {/* {this.props.user ? <button > */}
      <Link className="edit-btn" to="">EDIT</Link>
      {/* </button> : ""} */}

      {/* {this.props.user ? <button > */}
      <Link className="delete-btn" to="">DELETE</Link>
      {/* </button> : ""} */}
     </div>
    </div>


   </div>
  );
 }

}

export default ProductDetail;