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
      return <button className="logIn" type="submit">Log In</button>
    }
  }

  render() {
    const { email, password } = this.state
    return (
      <div className="form-container">
        <img className="instacart-detail-image" alt="instacart-logo" src="https://bloximages.chicago2.vip.townnews.com/cumberlink.com/content/tncms/assets/v3/editorial/6/3c/63c654ea-6acf-5290-b11e-0f0b0df93964/59b353e502139.image.jpg" />
        <div className="welcome">
          Welcome back
        </div>
        <div className="login-prompt">
          <h4>Log in with your email and password</h4>
        </div>
        <form onSubmit={this.onSignIn}>
          <div className="emailInput">
            <input
              required
              type="text"
              name="email"
              value={email}
              id="emailInput"
              placeholder="Email address"
              onChange={this.handleChange}
            />
          </div>
          <div className="passwordInput">
            <input
              required
              type="text"
              name="password"
              value={password}
              placeholder="Password (min 6 characters)"
              onChange={this.handleChange}
            />
          </div>
          {this.renderError()}





          <div className="orLoginInfo">
            <div>
              <button className="facebookButton">Continue with Facebook</button>
            </div>
            <div>
              <button className="googleButton">Continue with Google</button>
            </div>
            <div className="alreadyLogin">
              <h4>Already have an account?</h4>
            </div>
          </div>


        </form>
      </div >
    )
  }


}

export default SignIn