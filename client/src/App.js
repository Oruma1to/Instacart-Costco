import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
// import { verifyUser } from './'

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
        </Switch>
      </div>
    );
  }
}
