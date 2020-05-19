import React, { Component } from 'react'
import { Redirect } from "react-router-dom"
import { createProduct } from '../services/product'
import Select from 'react-select'
import { departments, checker } from "./selectedOptions"
import "./ProductCreate.css"
import StoreFrontNavBar from './StoreFront/StoreFrontNavBar'

export default class ProductCreate extends Component {
 constructor() {
  super()
  this.state = {
   post: {
    name: '',
    brand: '',
    department: '',
    category: '',
    price: 0,
    size: '',
    quantity: 0,
    imageURL: ''
   },
   created: false
  }
 }

 handleChange = (event) => {
  const { name, value } = event.target
  this.setState({
   post: {
    ...this.state.post,
    [name]: value
   }
  })
 }



 handleSelected = (selectedOption) => {
  this.setState({
   post: {
    ...this.state.post,
    [selectedOption.name]: selectedOption.value
   }
  })
 }

 handleSubmit = async (event) => {
  event.preventDefault()
  const created = await createProduct(this.state.post)
  this.setState({ created })
 }


 render() {
  console.log("rendering ", this.state.post)
  console.log("product create", this.props.user)

  const { post, created } = this.state

  if (created) {
   return <Redirect to={`/costco`} />
  }
  return (
   <>
    <div className="productCreate-Header">
     <StoreFrontNavBar user={this.props.user} />
    </div>
    <div className="add-product-body">
     <div className="productCreate-title">New Product Form</div>
     <form className="create-form" onSubmit={this.handleSubmit}>
      <label className="create-label" for="name">Name</label>
      <input
       className="add-product-input input-name"
       placeholder='Name'
       value={post.name}
       name='name'
       required
       autoFocus
       onChange={this.handleChange}
      />
      <label className="create-label" for="brand">Brand</label>
      <input
       className="add-product-input input-brand"
       placeholder='Brand'
       value={post.brand}
       name='brand'
       required
       autoFocus
       onChange={this.handleChange}
      />
      {/* Department with select */}
      <label className="create-label" for="deparment">Department</label>
      <Select className="select-departments" placeholder="Department" options={departments} onChange={this.handleSelected} />
      {/* Category with select */}
      {this.state.post.department ? <>
       <label className="create-label" for="category">Category</label>
       <Select className="select-category" placeholder="Category" options={checker(this.state.post.department)} onChange={this.handleSelected} />
      </> : ""}

      <label className="create-label" for="price">Price</label>
      <input
       className="add-product-input input-number"
       placeholder='Price'
       value={post.price}
       name='price'
       required
       autoFocus
       onChange={this.handleChange}
      />
      <label className="create-label" for="size">Size</label>
      <input
       className="add-product-input input-size"
       placeholder='Size'
       value={post.size}
       name='size'
       required
       autoFocus
       onChange={this.handleChange}
      />
      <label className="create-label" for="quanity">Quantity</label>
      <input
       // This is until I edit my input-quantity css
       className="add-product-input input-number"
       placeholder='Quantity'
       value={post.quantity}
       name='quantity'
       required
       autoFocus
       onChange={this.handleChange}
      />
      <label className="create-label" for="imageURL">Image Link</label>
      <input
       className="add-product-input input-image-link"
       placeholder='Image Link'
       value={post.imageURL}
       name='imageURL'
       required
       onChange={this.handleChange}
      />
      <button type='submit' className="submit-button">Submit</button>
     </form>
    </div>
   </>
  )
 }
}
