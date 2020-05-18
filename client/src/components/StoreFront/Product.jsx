import React from "react";

const Product = (props) => {
  const { price, brand, imageURL, name, size } = props;
  return (
    <>
      <img src={imageURL} alt={`${brand} ${name}`} />
      <div className="product-price">${price}</div>
      <div className="product-title">
        {brand} {name}
      </div>
      <div className="product-size">{size}</div>
      <div>
        <button className="product-add-btn">ADD</button>
      </div>
    </>
  );
};

export default Product;
