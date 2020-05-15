import React, { Component } from 'react'
import './SignUp.css'
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
        <div id="suForm" className="form-container-signUP">

          <img className="instacart-detail-image" alt="instacart-logo"
            src={require('../images/instacartlogo@3x.png')} />
          <div>
            <p className="createAcc">Create an account to start shopping</p>
          </div>
          <form onSubmit={this.onSignUp}>
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
            <div>
              <p className="terms">By signing up, you agree to our <Link src="#blank">Terms of Service</Link> & <Link src="#blank">Privacy Policy</Link></p>
            </div>

            <button className="logIn">Sign up with email</button>

            <div className="separator">or</div>

            <div className="orLoginInfo" >
              <div>
                <button className="facebookButton">Continue with Facebook</button>
              </div>
              <div>
                <button className="googleButton">Continue with Google</button>
              </div>
            </div>
            <div className="alreadyAcc">
              Already have an account? <Link className="signIn" to="/sign-in">Log in</Link>
            </div>
          </form>
        </div>
      </>
    )
  }
}

export default SignUp
