import React from "react";
import { Link } from "react-router-dom";

import "./Product.css";

const Product = (props) => {
 const { price, imageURL, name, size, _id, user } = props;
 return (
  <>
   <div className="product-wrapper">
    <div className="product-container">
     <img src={imageURL} alt={name} className="product-image" />
     <div className="product-price">${price}</div>
     <div className="product-title">{name}</div>
     <div className="product-size">{size}</div>
    </div>
    <div className="button-container">
     <button className="product-add-btn">
      {/* {this.props.user ? <button className="delete-btn" onClick={this.deletedThisBlog}>Delete</button> : ""} */}
      <Link to={`/costco/${_id}`}>Add</Link>
     </button>
    </div>
   </div>
  </>
 );
};

export default Product;
