import React, { Component } from 'react'
import './EditProduct.css'
import { Redirect } from 'react-router-dom'
import StoreFrontNavBar from './StoreFront/StoreFrontNavBar'
import { departments, checker } from './selectedOptions'
import Select from 'react-select'
//This is tentative naming...I have to wait till josh finish his services
import { getProduct, updateProduct } from '../services/product'

class PostEdit extends Component {
 constructor(props) {
  super(props)
  this.state = {
   product: {
    name: '',
    brand: '',
    department: '',
    category: '',
    imageURL: '',
    price: 0,
    size: '',
    quantity: 0
   },
   updated: false
  }
 }

 async componentDidMount() {
  let { id } = this.props.match.params
  const product = await getProduct(id)
  this.setState({ product })
 }


 handleChange = (event) => {
  const { name, value } = event.target
  this.setState({
   product: {
    ...this.state.product,
    [name]: value
   }
  })
 }

 handleSubmit = async (event) => {
  event.preventDefault()
  let { id } = this.props.match.params
  const updated = await updateProduct(id, this.state.product)
  this.setState({ updated })
 }

 handleSelected = (selectedOption) => {
  this.setState({
   product: {
    ...this.state.product,
    [selectedOption.name]: selectedOption.value
   }
  })
 }

 render() {

  const { product, updated } = this.state

  if (updated) {
   return <Redirect to={`/costco/${this.props.match.params.id}`} />
  }


  return (
   <div className="editProduct-outerDiv">
    <div className="editProduct-Header">
     <StoreFrontNavBar user={this.props.user} />
    </div>

    <div className="editProduct-container">
     <div className="details-of-editProduct">
      <div className="editProduct-image-container">
       <img className="editProduct-image" src={product.imageURL} alt={product.name} />
       <form onSubmit={this.handleSubmit}>
        <input
         className="edit-input-image-link"
         placeholder='Image Link'
         value={product.imageURL}
         name='imageURL'
         required
         onChange={this.handleChange}
        />
       </form>
      </div>
      <form className="editProduct-items-details" onSubmit={this.handleSubmit}>
       {/* <div className="editProduct-items-details"> */}
       <div className="editProduct-label">Name:</div>
       {/* <div className="editProduct">{product.name}</div> */}
       <input
        className="editProduct"
        placeholder='Name'
        value={product.name}
        name='name'
        required
        autoFocus
        onChange={this.handleChange}
       />
       <div className="editProduct-label">Brand:</div>
       <input
        className="editProduct"
        placeholder='Brand'
        value={product.brand}
        name='brand'
        required
        autoFocus
        onChange={this.handleChange}
       />
       <div className="editProduct-label">Price:</div>
       <input
        className="editProduct"
        placeholder="Price"
        value={`${product.price}`}
        name='price'
        required
        autoFocus
        onChange={this.handleChange}
       />
       <div className="editProduct-label">Quantity:</div>
       <input
        className="editProduct"
        placeholder='Quantity'
        value={product.quantity}
        name='quantity'
        required
        autoFocus
        onChange={this.handleChange}
       />
       <div className="editProduct-label">Size:</div>
       <input
        className="editProduct"
        placeholder='Size'
        value={product.size}
        name='size'
        required
        autoFocus
        onChange={this.handleChange}
       />
       <div className="editProduct-label">Deparment:</div>
       <div className="editProduct">{product.department}</div>
       <Select
        className="editProduct"
        placeholder={product.department}
        value={product.department}
        options={departments}
        onChange={this.handleSelected}
       />
       <div className="editProduct-label">Category: </div>
       <div className="editProduct">{product.category}</div>
       {product.department ?
        <Select
         className="editProduct"
         placeholder={product.category}
         options={checker(product.department)}
         onChange={this.handleSelected}
        />
        : ""}
       {/* </div> */}
       <div className="editProduct-button">
        <button type='submit' className="editProduct-save">Save</button>
       </div>
      </form>
     </div>

    </div>
   </div >

   // <div className="product-edit">
   //  <div className="image-container">
   //   <img className="edit-product-image" src={product.imageURL} alt={product.title} />
   // <form onSubmit={this.handleSubmit}>
   //  <input
   //   className="edit-input-image-link"
   //   placeholder='Image Link'
   //   value={product.imageURL}
   //   name='imageURL'
   //   required
   //   onChange={this.handleChange}
   //  />
   // </form>
   //  </div>
   //  <form className="edit-form" onSubmit={this.handleSubmit}>
   //   <input
   //    className="input-name"
   //    placeholder='Name'
   //    value={product.name}
   //    name='name'
   //    required
   //    autoFocus
   //    onChange={this.handleChange}
   //   />
   //   <input
   //    className="input-brand"
   //    placeholder='Brand'
   //    value={product.brand}
   //    name='brand'
   //    required
   //    autoFocus
   //    onChange={this.handleChange}
   //   />
   //   <input
   //    className="input-department"
   //    placeholder='Department'
   //    value={product.department}
   //    name='deparment'
   //    required
   //    autoFocus
   //    onChange={this.handleChange}
   //   />
   //   <input
   //    className="input-category"
   //    placeholder='Category:'
   //    value={product.category}
   //    name='category'
   //    required
   //    autoFocus
   //    onChange={this.handleChange}
   //   />
   //   <input
   //    className="input-price"
   //    placeholder='Price:'
   //    value={product.price}
   //    name='price'
   //    required
   //    autoFocus
   //    onChange={this.handleChange}
   //   />
   //   <input
   //    className="input-quantity"
   //    placeholder='Price:'
   //    value={product.quantity}
   //    name='quantity'
   //    required
   //    autoFocus
   //    onChange={this.handleChange}
   //   />
   //   <button type='submit' className="save-button">Save</button>
   //  </form>
   // </div>


  )
 }
}

export default PostEdit