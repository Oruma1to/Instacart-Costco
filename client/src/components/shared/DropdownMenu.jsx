import React, { Component } from './node_modules/react'
import { Link } from "./node_modules/react-router-dom"
import "./DropdownMenu.css"

export default class DropdownMenu extends Component {
 render() {
  let choosenMenu = [];
  console.log("In DropDown Menu ", this.props)
  if (this.props.titleMenu === "Account") {
   console.log("Yes it matches")
   choosenMenu = [
    <Link key="1" className="dropdown-links" to="#">Add new Product</Link>,
    <Link key="2" className="dropdown-links" to="#">Edit Product</Link>,
    <Link key="3" className="dropdown-links" to="#">Delete Product</Link>,
    <Link key="4" className="dropdown-links" to="/sign-out">Sign Out</Link>
   ]
  } else if (this.props.titleMenu === "Stores") {
   choosenMenu = [
    <Link key="1" className="dropdown-links" to="#">Queen</Link>,
    <Link key="2" className="dropdown-links" to="#">Manhattan</Link>,
    <Link key="3" className="dropdown-links" to="#">Yonkers</Link>
   ]
  }
  console.log("choosenMenu", choosenMenu)
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