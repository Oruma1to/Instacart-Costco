import React, { Component } from 'react'
import { Redirect } from "react-router-dom"
import { createProduct } from '../services/product'
import "./ProductCreate.css"

export default class ProductCreate extends Component {
 constructor() {
  super()
  this.state = {
   post: {
    name: '',
    department: '',
    category: '',
    price: 0,
    size: '',
    quantity: 0,
    imgURL: ''
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

 handleSubmit = async (event) => {
  event.preventDefault()
  const created = await createProduct(this.state.post)
  this.setState({ created })
 }

 render() {
  const { post, created } = this.state

  if (created) {
   return <Redirect to={`/posts`} />
  }
  return (
   <div>
    <form className="create-form" onSubmit={this.handleSubmit}>
     <input
      className="input-name"
      placeholder='Name'
      value={post.name}
      name='name'
      required
      autoFocus
      onChange={this.handleChange}
     />
     <input
      className="input-department"
      placeholder='Department'
      value={post.department}
      name='department'
      required
      autoFocus
      onChange={this.handleChange}
     />
     <input
      className="input-category"
      placeholder='Category'
      value={post.category}
      name='category'
      required
      autoFocus
      onChange={this.handleChange}
     />
     <input
      className="input-price"
      placeholder='Price'
      value={post.price}
      name='price'
      required
      autoFocus
      onChange={this.handleChange}
     />
     <input
      className="input-size"
      placeholder='Size'
      value={post.size}
      name='size'
      required
      autoFocus
      onChange={this.handleChange}
     />
     <input
      // This is until I edit my input-quantity css
      className="input-price input-quantity"
      placeholder='Quantity'
      value={post.quantity}
      name='quantity'
      required
      autoFocus
      onChange={this.handleChange}
     />


     {/* ---- */}
     <input
      className="input-image-link"
      placeholder='Image Link'
      value={post.imgURL}
      name='imgURL'
      required
      onChange={this.handleChange}
     />
     <button type='submit' className="submit-button">Submit</button>
    </form>
   </div>
  )
 }
}
