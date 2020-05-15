import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import SignUp from './components/SignUp'
import LandingPage from "./components/LandingPage"
import SignIn from './components/SignIn'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
    };
  }

  // async componentDidMount() {
  //   const user = await verifyUser

  // }

  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" render={() => <LandingPage />} />
          <Route exact path="/sign-in" render={() => <SignIn />} />
          <Route exact path="/sign-up" render={() => <SignUp />} />
        </Switch>
      </div>
    );
  }
}
