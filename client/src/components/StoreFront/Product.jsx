import React from "react";

const Product = (props) => {
  const { price, brand, imageURL, name, quantity } = props;
  return (
    <>
      <img src={imageURL} alt={`${brand} ${name}`} />
      <div className="product-price">$ {price}</div>
      <div className="product-title">
        {brand} {name}
      </div>
      <div className="product-quantity">{quantity}</div>
    </>
  );
};

export default Product;
