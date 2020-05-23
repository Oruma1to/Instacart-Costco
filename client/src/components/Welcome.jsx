import React, { Component } from 'react'
import './Welcome.css'
import { Link } from 'react-router-dom'
import LandingHeader from "./LandingHeader"
import Facebook from "./Facebook"

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
    localStorage.setItem('usersEmail', this.state.email);
    console.log(localStorage.getItem('usersEmail') || null)
    if (this.state.email) {
      this.props.history.push("/costco")
    }
  }

  render() {
    const { email } = this.state
    console.log(`People also ask
    When did they change Fruit Loops to Froot Loops?
    1963
    Kellogg's, a lawsuit that claimed that the word “fruit” in the cereal name implied it was a fruit-based snack, and that it was misleading. In the end, a settlement out of court was arranged and the cereal name was changed and re-released the year 1963 as Froot Loops.`)
    return (
      <>
        <LandingHeader />
        <div id="suForm" className="form-container-welcome">

          <img className="sign-up-instacart-detail-image" alt="instacart-logo"
            src={require('../images/instacartlogo@3x.png')} />
          <div>
            <p className="sign-up-createAcc">Enter your email to start shopping</p>
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
            <div className="terms-container">
              <p className="terms">By signing up, you agree to our</p>
              <div className="link-container">
                <Link to="#blank">Terms of Service</Link> <span>&</span> <Link to="#blank">Privacy Policy</Link>
              </div>
            </div>

            <button className="sign-up">Sign up with email</button>

            <div className="separator-signup">or</div>

            <div className="orLoginInfo" >
              <div>
                {/* <button className="facebook-button-signup">Continue with Facebook</button> */}
                <Facebook />
              </div>
              <div>
                <button className="google-button-signup">Continue with Google</button>
              </div>
            </div>
            <div className="alreadyAcc">
              Already have an account? <Link className="sign-in-btn" to="/sign-in">Log in</Link>
            </div>
          </form>
        </div>
      </>
    )
  }
}

export default Welcome
