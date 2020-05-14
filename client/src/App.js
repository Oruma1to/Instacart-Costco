import React, { Component } from 'react'
import "./App.css"
import { Switch } from 'react-router-dom'
// import { verifyUser } from './'


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      user: null
    }
  }

  // async componentDidMount() {
  //   const user = await verifyUser
    
  // }

  

  render() {
    return (
      <div>
        <Switch>
          <h1>Sup front</h1>
        </Switch>
      </div>
    )
  }
}
