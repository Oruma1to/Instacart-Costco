import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "./DropdownMenu.css"

export default class DropdownMenu extends Component {
 render() {
  console.log("In Store Dropdown Menu", this.props.user)


  let choosenMenu = [];
  if (this.props.titleMenu === "Account") {
   if (this.props.user !== null) {
    choosenMenu = [
     <Link key="1" className="dropdown-links-user" to="/add-product">Add new Product</Link>,
     <Link key="2" className="dropdown-links-user" to="#">Edit Product</Link>,
     <Link key="3" className="dropdown-links-user" to="#">Delete Product</Link>,
     <Link key="4" className="dropdown-links-user" to="/sign-out">Sign Out</Link>
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