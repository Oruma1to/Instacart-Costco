import React, { Component } from 'react'
import '../components/SignUp.css'
// import { signUp, signIn } from '../services/user'
import { Link } from 'react-router-dom'
import LandingHeader from "./LandingHeader"

class SignUp extends Component {
  constructor() {
    super()

    this.state = {
      email: ''
    }
  }

  handleChange = event =>
    this.setState({
      [event.target.name]: event.target.value,
      isError: false,
      errorMsg: ''
    })

  // onSignUp = event => {
  //   event.preventDefault()

  //   const { history, setUser } = this.props

  //   signUp(this.state)
  //     .then(() => signIn(this.state))
  //     .then(res => setUser(res.user))
  //     .then(() => history.push('/'))
  //     .catch(error => {
  //       console.error(error)
  //       this.setState({
  //         email: '',
  //         isError: true,
  //         errorMsg: 'Please Enter a Valid Email'

  //       })
  //     })

  //   }      


  render() {
    const { email } = this.state
    return (
      <>
         <LandingHeader />
      <div className="form-container">
        <img src="" alt="" />
        <p>Create an account to start shopping</p>
        <form onSubmit={this.onSignUp}>
          <label>Email address</label>
          <input
            required
            type="email"
            name="email"
            value={email}
            placeholder="Enter email"
            onChange={this.handleChange}
          />
        </form>
        <p>By signing up, you agree to our <Link src="#blank">Terms of Service</Link> & <Link src="#blank">Privacy Policy</Link></p>
        <button className="eSignUp">Sign up with email</button>
        <hr></hr><p>or</p><hr></hr>
        <button className="facebook">Continue with Facebook</button>
        <button className="google">Continue with Google</button>
      <p>Already have an account? <Link src="/sign-in">Log in</Link> </p>
        </div>
        </>
    )
  }
}

export default SignUp
