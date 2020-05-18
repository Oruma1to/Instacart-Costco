import React, { Component } from "react";
import LandingHeader from "./LandingHeader";
import "./LandingHeader.css";
import { Redirect } from "react-router-dom";
import './LandingPage.css'
import ProductCreate from "./ProductCreate";

export default class LandingPage extends Component {
 render() {
  return (
   <>
    <LandingHeader />
    {/* <Redirect to="sign-up" /> */}
    <ProductCreate />
   </>
  );
 }
}
