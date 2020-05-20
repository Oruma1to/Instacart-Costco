import React, { Component } from "react";
import StoreFrontNavBar from './StoreFront/StoreFrontNavBar'
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

 deletedThisProduct = async () => {
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
   <div className="productDetail-outerDiv">
    <div className="productDetail-Header">
     <StoreFrontNavBar user={this.props.user} />
    </div>
    <div className="productDetail-container">

     <div className="details-of-Products">
      <div className="productDetail-image-container">
       <img className="productDetail-image" src={product.imageURL} alt={product.name} />
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
      {this.props.user ? <button className="edit-btn"><Link className="edit-link" to={`/costco/${product._id}/edit`}>Edit</Link></button> : ""}
      {this.props.user ? <button className="delete-btn" onClick={this.deletedThisProduct}>Delete</button> : ""}
     </div>
    </div>
   </div>
  );
 }
}
export default ProductDetail;
