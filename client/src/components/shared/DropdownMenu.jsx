import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "./DropdownMenu.css"

export default class DropdownMenu extends Component {
 render() {
  console.log("In Store Dropdown Menu", this.props.user)
  console.log(window.location.pathname === "/add-product")
  let loc = window.location.pathname
  console.log(loc)
  let choosenMenu = [];
  if (this.props.titleMenu === "Account") {
   if (this.props.user !== null) {
    let path = "/add-product"
    let content = "Add new Product"
    if (window.location.pathname === "/add-product") {
     path = "/costco"
     content = "Main Page"
    }
    choosenMenu = [
     <Link key="1" className="dropdown-links" to={path}>{content}</Link>,
     <Link key="2" className="dropdown-links" to="#">Edit Product</Link>,
     <Link key="3" className="dropdown-links" to="#">Delete Product</Link>,
     <Link key="4" className="dropdown-links" to="/sign-out">Sign Out</Link>
    ]
   } else {
    choosenMenu = [
     <Link key="1" className="dropdown-links" to="/sign-up">Sign Up</Link>,
     <Link key="2" className="dropdown-links" to="/sign-in">Sign In</Link>,
    ]
   }

  } else if (this.props.titleMenu === "Stores") {
   choosenMenu = [
    <Link key="1" className="dropdown-links" to="#">Queen</Link>,
    <Link key="2" className="dropdown-links" to="#">Manhattan</Link>,
    <Link key="3" className="dropdown-links" to="#">Yonkers</Link>
   ]
  }
  return (
   <div className="dropDownMenu" >
    <button className="dropbtn">{this.props.titleMenu}
     <i className="dropdown-arrow-down"></i>
    </button>
    <div className="dropdown-content">
     {choosenMenu.map(tag => tag)}
    </div>
   </div>
  )
 }
}

//Testing purposes
   // choosenMenu = [
   //  {
   //   name: "Add new Product",
   //   where: "#"
   //  },
   //  {
   //   name: "Edit Product",
   //   where: "#"
   //  },
   //  {
   //   name: "Delete Product",
   //   where: "#"
   //  },
   //  {
   //   name: "Sign out",
   //   where: "#"
   //  },
   // ]