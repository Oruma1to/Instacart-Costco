import React, { Component } from 'react'
import './SignIn.css'
import { signIn } from '../services/user'
import LandingHeader from './LandingHeader'
import { Link } from 'react-router-dom'


class SignIn extends Component {
 constructor(props) {
  super(props)

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
   .then(() => history.push('/costco'))
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

   <>
    <LandingHeader />

    <div className="form-container">
     <img className="sign-in-instacart-detail-image" alt="instacart-logo"
      src={require('../images/instacartlogo@3x.png')} />

     {/* <div className="instacart-detail-image"></div> */}
     <div className="sign-in-welcome">Welcome back</div>
     <div className="login-prompt">Log in with your email and password</div>
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
     </form>

     <div className="separator">or</div>

     <div className="orLoginInfo">
      <div>
       <button className="facebookButton">Continue with Facebook</button>
      </div>
      <div>
       <button className="googleButton">Continue with Google</button>
      </div>
      <div className="alreadyLogin">
       <h4>Don't have an Account? <Link className="signIn" to="/sign-up">Sign Up</Link></h4>
      </div>
     </div>
    </div >
   </>
  )
 }


}

export default SignIn