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
      product: {
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
      product: {
        ...this.state.product,
        [name]: value
      }
    })
  }



  handleSelected = (selectedOption) => {
    this.setState({
      product: {
        ...this.state.product,
        [selectedOption.name]: selectedOption.value
      }
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const created = await createProduct(this.state.product)
    this.setState({ created })
  }


  render() {

    const { product, created } = this.state

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
              value={product.name}
              name='name'
              required
              autoFocus
              onChange={this.handleChange}
            />
            <label className="create-label" for="brand">Brand</label>
            <input
              className="add-product-input input-brand"
              placeholder='Brand'
              value={product.brand}
              name='brand'
              required
              autoFocus
              onChange={this.handleChange}
            />
            {/* Department with select */}
            <label className="create-label" for="deparment">Department</label>
            <Select className="select-departments" placeholder="Department" options={departments} onChange={this.handleSelected} />
            {/* Category with select */}
            {this.state.product.department ? <>
              <label className="create-label" for="category">Category</label>
              <Select className="select-category" placeholder="Category" options={checker(this.state.product.department)} onChange={this.handleSelected} />
            </> : ""}

            <label className="create-label" for="price">Price</label>
            <input
              className="add-product-input input-number"
              placeholder='$ Price'
              value={product.price}
              name='price'
              required
              autoFocus
              onChange={this.handleChange}
            />
            <label className="create-label" for="size">Size</label>
            <input
              className="add-product-input input-size"
              placeholder='Size'
              value={product.size}
              name='size'
              required
              autoFocus
              onChange={this.handleChange}
            />
            <label className="create-label" for="quanity">Quantity</label>
            <input
              className="add-product-input input-number"
              placeholder='Quantity'
              value={product.quantity}
              name='quantity'
              required
              autoFocus
              onChange={this.handleChange}
            />
            <label className="create-label" for="imageURL">Image Link</label>
            <input
              className="add-product-input input-image-link"
              placeholder='Image Link'
              value={product.imageURL}
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
