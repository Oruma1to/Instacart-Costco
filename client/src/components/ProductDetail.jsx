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
   deleted: false
  };
 }

 async componentDidMount() {
  let { id } = this.props.match.params;
  const product = await getProduct(id);
  this.setState({ product });
 }

 deletedThisBlog = async () => {
  console.log("in deletethisblog")
  const { product } = this.state
  if (this.props.user) {
   await deleteProduct(product._id)
   this.setState({
    deleted: true
   }
   )
  } else {
   alert("You are not a Member to delete this")
  }
 }


 render() {
  const { product, deleted } = this.state
  if (deleted) {
   return <Redirect to={`/costco`} />
  }
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
      {this.props.user ? <button className="edit-btn"><Link className="edit-link" to={`/costco/${product._id}/edit`}>Edit</Link></button> : ""}
      {this.props.user ? <button className="delete-btn" onClick={this.deletedThisBlog}>Delete</button> : ""}
     </div>
    </div>


   </div>
  );
 }

}

export default ProductDetail;