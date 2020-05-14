// import React, { Component } from 'react'
// import './SignUp.css'
// import {signUp, signIn} from ''

// class SignUp extends Component {
//   constructor() {
//     super()

//     this.state = {
//       email: ''
//     }
//   }

//   handleChange = event =>
//     this.setState({
//       [event.target.name]: event.target.value,
//       isError: false,
//       errorMsg: ''
//     })

//   onSignUp = event => {
//     event.preventDefault()
    
//     const { history, setUser } = this.props
    
//     signUp(this.state)
//       .then(() => signIn(this.state))
//       .then(res => setUser(res.user))
//       .then(() => history.push('/'))
//       .catch(error => {
//         console.error(error)
//         this.setState({
//           email: '',
//           isError: true,
//           errorMsg: 'Please Enter a Valid Email'
        
//         })
//       })

//     }  
  
  
//   render() {
//     return (
//       <div>

//       </div>
//     )
//   }

// }