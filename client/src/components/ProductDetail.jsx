import React, { Component } from "react";
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
  const { product, deleted } = this.state;
  if (deleted) {
   return <Redirect to={`/costco`} />
  }
  return (
   <div className="product-container">
    <div>
     <img
      className="product-image"
      src={product.imageURL}
      alt={product.name}
     />
    </div>

    <div>
     <div className="product-name">{product.name}</div>
     <div className="product-brand">{product.brand}</div>
     <div className="product-department">{product.department}</div>
     <div className="product-category">{product.category}</div>
     <div className="product-price">${product.price}</div>
     <div className="product-quantity">{product.quantity}</div>
     <div className="product-size">{product.size}</div>
    </div>

    <div>
     <button className="edit-btn">
      {this.props.user ? <button><Link className="edit-link" to={`/products/${product._id}/edit`}>Edit</Link></button> : ""}
     </button>
     <button className="delete-btn">
      {this.props.user ? <button onClick={this.deletedThisBlog}>Delete</button> : ""}
     </button>
    </div>
   </div>
  );
 }
}

export default ProductDetail;
