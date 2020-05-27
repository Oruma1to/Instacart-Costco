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
          {user && user.admin_key ?
            <button className="product-edit-btn">
              <Link className="product-Link" to={`/costco/${_id}`}>
                Details
        </Link>
            </button>
            :
            <button className="product-add-btn">
              <Link className="product-Link" to="#">Add</Link>
            </button>
          }
        </div>
      </div>
    </>
  );
};

export default Product;