import React, { Component } from 'react'
import './PostEdit.css'
import { Redirect } from 'react-router-dom'
import Layout from './shared/Layout'
//This is tentative naming...I have to wait till josh finish his services
import { getProduct, updateProduct } from '../services/product'

class PostEdit extends Component {
 constructor(props) {
  super(props)
  this.state = {
   post: {
    title: '',
    imgURL: '',
    content: ''
   },
   updated: false
  }
 }

 async componentDidMount() {
  let { id } = this.props.match.params
  const post = await getProduct(id)
  this.setState({ post })
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
  let { id } = this.props.match.params
  const updated = await updateProduct(id, this.state.post)
  this.setState({ updated })
 }

 render() {

  const { post, updated } = this.state

  if (updated) {
   return <Redirect to={`/posts/${this.props.match.params.id}`} />
  }

  return (
   <Layout user={this.props.user}>
    <div className="product-edit">
     <div className="image-container">
      <img className="edit-product-image" src={post.imgURL} alt={post.title} />
      <form onSubmit={this.handleSubmit}>
       <input
        className="edit-input-image-link"
        placeholder='Image Link'
        value={post.imgURL}
        name='imgURL'
        required
        onChange={this.handleChange}
       />
      </form>
     </div>
     <form className="edit-form" onSubmit={this.handleSubmit}>
      <input
       className="input-name"
       placeholder='Name'
       value={post.title}
       name='title'
       required
       autoFocus
       onChange={this.handleChange}
      />
      <textarea
       className="textarea-description"
       rows={10}
       cols={78}
       placeholder='Description'
       value={post.content}
       name='content'
       required
       onChange={this.handleChange}
      />
      <button type='submit' className="save-button">Save</button>
     </form>
    </div>
   </Layout>
  )
 }
}

export default PostEdit