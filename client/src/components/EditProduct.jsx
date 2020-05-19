import React, { Component } from 'react'
import './EditProduct.css'
import { Redirect } from 'react-router-dom'
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

 render() {

  const { product, updated } = this.state

  if (updated) {
   return <Redirect to={`/costco/${this.props.match.params.id}`} />
  }

  return (
   <div className="product-edit">
    <div className="image-container">
     <img className="edit-product-image" src={product.imageURL} alt={product.title} />
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
    <form className="edit-form" onSubmit={this.handleSubmit}>
     <input
      className="input-name"
      placeholder='Name'
      value={product.name}
      name='name'
      required
      autoFocus
      onChange={this.handleChange}
     />
     <input
      className="input-brand"
      placeholder='Brand'
      value={product.brand}
      name='brand'
      required
      autoFocus
      onChange={this.handleChange}
     />
     <input
      className="input-department"
      placeholder='Department'
      value={product.department}
      name='deparment'
      required
      autoFocus
      onChange={this.handleChange}
     />
     <input
      className="input-category"
      placeholder='Category:'
      value={product.category}
      name='category'
      required
      autoFocus
      onChange={this.handleChange}
     />
     <input
      className="input-price"
      placeholder='Price:'
      value={product.price}
      name='price'
      required
      autoFocus
      onChange={this.handleChange}
     />
     <input
      className="input-quantity"
      placeholder='Price:'
      value={product.quantity}
      name='quantity'
      required
      autoFocus
      onChange={this.handleChange}
     />
     <button type='submit' className="save-button">Save</button>
    </form>
   </div>
  )
 }
}

export default PostEdit