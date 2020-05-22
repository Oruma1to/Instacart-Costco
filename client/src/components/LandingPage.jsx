import React, { Component } from "react";
import LandingHeader from "./LandingHeader";
import "./LandingHeader.css";
import { Redirect } from "react-router-dom";
import './LandingPage.css'

export default class LandingPage extends Component {
  render() {
    return (
      <>
        <LandingHeader />
        <Redirect to="/welcome" />
      </>
    );
  }
}
