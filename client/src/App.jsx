import React, { Component } from 'react'
import "./App.css"
import { Switch, Route } from 'react-router-dom'
import LandingPage from "./components/LandingPage"
// import { verifyUser } from './'


export default class App extends Component {
 constructor() {
  super()
  this.state = {
   user: null
  }
 }

 async componentDidMount() {
  const user = await verifyUser()
  if (user) {
   this.setState(user)
  }
 }

 setUser = user => this.setState({ user })

 clearUser = () => this.setState({ user: null })



 render() {
  return (
   <div className="app">
    <Switch>
     <h1>Sup front</h1>
     <Route exact path="/" render={() => <LandingPage />} />
    </Switch>
   </div>
  )
 }
}
