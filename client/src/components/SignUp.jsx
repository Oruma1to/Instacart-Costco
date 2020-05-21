import React, { Component } from 'react'
import './SignUp.css'
import { signUp, signIn } from '../services/user'
import LandingHeader from './LandingHeader'
import { Link } from 'react-router-dom'

class CreateAccount extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirm: '',
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

  onSignUp = event => {
    event.preventDefault()

    const { history, setUser } = this.props
    console.log(this.state)
    signUp(this.state)
      .then(() => signIn(this.state))
      .then(res => setUser(res.user))
      .then(() => history.push('/costco'))
      .catch(error => {
        console.error(error)
        this.setState({
          username: '',
          email: '',
          password: '',
          isError: true,
          errorMsg: 'Sign Up Details Invalid'
        })
      })
  }

  renderError = () => {
    const toggleForm = this.state.isError ? 'danger-signup' : ''
    if (this.state.isError) {
      return (
        <button type="submit" className={toggleForm}>
          {this.state.errorMsg}
        </button>
      )
    } else {
      return <button className="login-signup" type="submit">Sign Up / Log In</button>
    }
  }

  render() {
    const { username, email, password } = this.state
    return (

      <>
        <LandingHeader />

        <div className="form-container-signup">
          <img className="sign-in-instacart-detail-image" alt="instacart-logo"
            src={require('../images/instacartlogo@3x.png')} />

          {/* <div className="instacart-detail-image"></div> */}
          <div className="signup-welcome">Welcome to Instacart</div>
          <div className="signup-prompt">Create a profile using your email and password</div>
          <form onSubmit={this.onSignUp}>

            <div className="usernameInput">
              <input
                required
                type="text"
                name="username"
                value={username}
                id="username-input-signup"
                placeholder="Username"
                onChange={this.handleChange}
              />
            </div>

            <div className="emailInput">
              <input
                required
                type="text"
                name="email"
                value={email}
                id="email-input-signup"
                placeholder="Email address"
                onChange={this.handleChange}
              />
            </div>
            <div className="passwordInput">
              <input
                required
                type="password"
                name="password"
                value={password}
                id="password-input-signup"
                placeholder="Password (min 6 characters)"
                onChange={this.handleChange}
              />
            </div>
            {this.renderError()}
          </form>
          
          <div className="separator-signup">or</div>

          <div className="orLoginInfo">
            <div>
              <button className="facebook-button-signup">Sign up with Facebook</button>
            </div>
            <div>
              <button className="google-button-signup">Sign up with Google</button>
            </div>
            <div className="already-signup">
              <h4>Already have an account? <Link to="/sign-in">Log In</Link></h4>
            </div>
          </div>
        </div >
      </>
    )
  }
}

export default CreateAccount