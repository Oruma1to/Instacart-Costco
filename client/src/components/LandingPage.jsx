import React, { Component } from "react";
import LandingHeader from "./LandingHeader";
import DropdownMenu from "./shared/DropdownMenu"
import "./LandingHeader.css";
import { Redirect } from "react-router-dom";
import './LandingPage.css'

export default class LandingPage extends Component {
 render() {
  return (
   <>
    <LandingHeader />
    <DropdownMenu titleMenu={"Account"} />
    <DropdownMenu titleMenu={"Stores"} />

    {/* <Redirect to="sign-up" /> */}
   </>
  );
 }
}
