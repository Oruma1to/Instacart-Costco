import React, { Component } from 'react'
import { Redirect } from "react-router-dom"
import { createProduct } from '../services/product'
import Select from 'react-select'
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
 handleSelected = (selectedOption) => {
  console.log(selectedOption)

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


  const departments = [
   { value: 'Meat & Seafood', label: 'Meat & Seafood', name: "department" },
   { value: 'Produce', label: 'Produce', name: "department" },
   { value: 'Deli', label: 'Deli', name: "department" },
   { value: 'Bakery & Dessert', label: 'Bakery & Dessert', name: "department" }
  ];

  const categories = [
   { value: 'Prime Beef', label: 'Prime Beef', name: "category" },
   { value: 'Pork & Lamb', label: 'Pork & Lamb', name: "category" },
   { value: 'Seafood', label: 'Seafood', name: "category" },
   { value: 'Poultry', label: 'Poultry', name: "category" },
   { value: 'Meat', label: 'Meat' },
   { value: 'Fruit & Vegetable Trays', label: 'Fruit & Vegetable Trays', name: "category" },
   { value: 'Fruit', label: 'Fruit', name: "category" },
   { value: 'Vegetables', label: 'Vegetables', name: "category" },
   { value: 'Salad Mix', label: 'Salad Mix', name: "category" },
   { value: 'Meat & Cheese Trays', label: 'Meat & Cheese Trays', name: "category" },
   { value: 'Prepared Meals', label: 'Prepared Meals', name: "category" },
   { value: 'Prepared Soups & Salad', label: 'Prepared Soups & Salad', name: "category" },
   { value: 'Dips & Spreads', label: 'Dips & Spreads', name: "category" },
   { value: 'Bread', label: 'Bread', name: "category" },
   { value: 'Buns & Rolls', label: 'Buns & Rolls', name: "category" },
   { value: 'Cookies', label: 'Cookies', name: "category" },
   { value: 'Pies & Cakes', label: 'Pies & Cakes', name: "category" }

  ];
  console.log(departments)

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
     {/* <input
      className="input-department"
      placeholder='Department'
      value={post.department}
      name='department'
      required
      autoFocus
      onChange={this.handleChange}
     /> */}
     {/* Department with select */}
     <Select className="select-departments" name="department" options={departments} onChange={this.handleSelected} />


     {/* <input
      className="input-category"
      placeholder='Category'
      value={post.category}
      name='category'
      required
      autoFocus
      onChange={this.handleChange}
     /> */}
     {/* Category with select */}
     <Select className="select-category" name="category" options={categories} onChange={this.handleSelected} />
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
