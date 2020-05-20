import React, { Component } from 'react'
import './SignUp.css'
import { Link } from 'react-router-dom'
import LandingHeader from "./LandingHeader"

class Welcome extends Component {
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

  onSignUp = event => {
    event.preventDefault()
    if (this.state.email) {
      this.props.history.push("/costco")
    }
  }


  render() {
    const { email } = this.state
    return (
      <>
        <LandingHeader />
        <div id="suForm" className="form-container-signup">

          <img className="sign-up-instacart-detail-image" alt="instacart-logo"
            src={require('../images/instacartlogo@3x.png')} />
          <div className="testing">
            <p className="sign-up-createAcc">Create an account to start shopping</p>
          </div>
          <form onSubmit={this.onSignUp}>
            <div className="sign-up-emailInput">
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

            <button className="sign-up">Sign up with email</button>

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

export default Welcome
