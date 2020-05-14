import React, { Component } from 'react'
import './SignIn.css'
import { signIn } from '../services/user'

class SignIn extends Component {
  constructor() {
    super()

    this.state = {
      email: '',
      password: '',
      isError: false,
      errorMsg: ''
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      isError: false,
      errorMsg: ''
    })
  }

  onSignIn = event => {
    event.preventDefault()

    const { history, setUser } = this.props

    signIn(this.state)
      .then(res => {
        setUser(res.user)
      })
      .then(() => history.push('/'))
      .catch(error => {
        console.error(error)
        this.setState({
          isError: true,
          errorMsg: 'Invalid Credentials',
          email: '',
          password: ''
        })
      })
  }

  renderError = () => {
    const toggleForm = this.state.isError ? 'danger' : ''
    if (this.state.isError) {
      return (
        <button type="submit" className={toggleForm}>
          {this.state.errorMsg}
        </button>
      )
    } else {
      return <button type="submit">Log In</button>
    }
  }

  render() {
    const { email, password } = this.state
    return (
      <div className="form-container">
        <img className="instacart-detail-image" alt="instacart-logo" src="https://bloximages.chicago2.vip.townnews.com/cumberlink.com/content/tncms/assets/v3/editorial/6/3c/63c654ea-6acf-5290-b11e-0f0b0df93964/59b353e502139.image.jpg" />
        <h3>Welcome back</h3>
        <h4>Log in with your email and password</h4>
        <form onSubmit={this.onSignIn}>
          <label>Email</label>
          <input
            required
            type="text"
            name="email"
            value={email}
            placeholder="Email address"
            onChange={this.handleChange}
          />
          <label>Password</label>
          <input
            required
            type="text"
            name="password"
            value={password}
            placeholder="Password (min 6 characters)"
            onChange={this.handleChange}
          />
          {this.renderError()}



          <div className="orLoginInfo">
            <img alt="facebook-login-button" src='' />
            <img alt="google-login-button" src='' />
            <h4>Already have an account? Log in.</h4>
          </div>


        </form>
      </div >
    )
  }


}

export default SignIn