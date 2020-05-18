import React from "react";

import "./Product.css";

const Product = (props) => {
  const { price, brand, imageURL, name, size } = props;
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
          <button className="product-add-btn">Add</button>
        </div>
      </div>
    </>
  );
};

export default Product;
