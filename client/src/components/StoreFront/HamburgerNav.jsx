import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { stack as Menu } from 'react-burger-menu'
import { hamburgerLink } from "../selectedOptions"
import './HamburgerNav.css'

export default class HamburgerNav extends Component {
 render() {
  console.log("In HamburgerNav ", this.props.callbackFromParent)
  return (
   <div className="hamburger-menu">
    <Menu>
     <h1 className="departments-header">Departments</h1>
     <ul className="parent-menu-hamburger">

      <li><Link className="department-item-hamburger" to="#" onClick={() => this.props.callbackFromParent(hamburgerLink(this.props.products, 'department', "Meat & Seafood"))}>Meat & Seafood</Link>

       <ul className="parent-sub-menu-hamburger">

        <li><Link className="department-item-hamburger" to="#" onClick={() => this.props.callbackFromParent(hamburgerLink(this.props.products, 'category', "Prime Beef"))}>Prime Beef</Link></li>

        <li><Link className="department-item-hamburger" to="#" onClick={() => this.props.callbackFromParent(hamburgerLink(this.props.products, 'category', "Pork & Lamb"))}>Pork & Lamb</Link></li>

        <li><Link className="department-item-hamburger" to="#" onClick={() => this.props.callbackFromParent(hamburgerLink(this.props.products, 'category', "Beef"))}>Beef</Link></li>

        <li><Link className="department-item-hamburger" to="#" onClick={() => this.props.callbackFromParent(hamburgerLink(this.props.products, 'category', "Seafood"))}>Seafood</Link></li>

        <li><Link className="department-item-hamburger" to="#" onClick={() => this.props.callbackFromParent(hamburgerLink(this.props.products, 'category', "Poultry"))}>Poultry</Link></li>

       </ul>

      </li>

      <li><Link className="department-item-hamburger" to="#" onClick={() => this.props.callbackFromParent(hamburgerLink(this.props.products, 'department', "Produce"))}>Produce</Link>

       <ul className="parent-sub-menu-hamburger">

        <li><Link className="department-item-hamburger" to="#" onClick={() => this.props.callbackFromParent(hamburgerLink(this.props.products, 'category', "Fruit & Vegetable Trays"))}>Fruit & Vegetable</Link></li>

        <li><Link className="department-item-hamburger" to="#" onClick={() => this.props.callbackFromParent(hamburgerLink(this.props.products, 'category', "Fruit"))}>Fruit</Link></li>

        <li><Link className="department-item-hamburger" to="#" onClick={() => this.props.callbackFromParent(hamburgerLink(this.props.products, 'category', "Vegetable"))}>Vegetables</Link></li>

        <li><Link className="department-item-hamburger" to="#" onClick={() => this.props.callbackFromParent(hamburgerLink(this.props.products, 'category', "Salad Mix"))}>Salad Mix</Link></li>

       </ul></li>

      <li><Link className="department-item-hamburger" to="#" onClick={() => this.props.callbackFromParent(hamburgerLink(this.props.products, 'department', "Deli"))}>Deli</Link></li>

      <ul className="parent-sub-menu-hamburger">

       <li><Link className="department-item-hamburger" to="#" onClick={() => this.props.callbackFromParent(hamburgerLink(this.props.products, 'category', "Meat & Cheese Trays"))}>Meat & Cheese</Link></li>

       <li><Link className="department-item-hamburger" to="#" onClick={() => this.props.callbackFromParent(hamburgerLink(this.props.products, 'category', "Prepared Meals"))}>Prepared Meals</Link></li>

       <li><Link className="department-item-hamburger" to="#" onClick={() => this.props.callbackFromParent(hamburgerLink(this.props.products, 'category', "Prepared Soups & Salad"))}>Soups & Salad</Link></li>

       <li><Link className="department-item-hamburger" to="#" onClick={() => this.props.callbackFromParent(hamburgerLink(this.props.products, 'category', "Dips & Spreads"))}>Dips & Spreads</Link></li>
      </ul>

      <li><Link className="department-item-hamburger" to="#" onClick={() => this.props.callbackFromParent(hamburgerLink(this.props.products, 'department', "Bakery & Desserts"))}>Bakery & Desserts</Link>

       <ul className="parent-sub-menu-hamburger">

        <li><Link className="department-item-hamburger" to="#" onClick={() => this.props.callbackFromParent(hamburgerLink(this.props.products, 'category', "Bread"))}>Bread</Link></li>

        <li><Link className="department-item-hamburger" to="#" onClick={() => this.props.callbackFromParent(hamburgerLink(this.props.products, 'category', "Buns & Rolls"))}>Buns & Rolls</Link></li>

        <li><Link className="department-item-hamburger" to="#" onClick={() => this.props.callbackFromParent(hamburgerLink(this.props.products, 'category', "Cookies"))}>Cookies</Link></li>

        <li><Link className="department-item-hamburger" to="#" onClick={() => this.props.callbackFromParent(hamburgerLink(this.props.products, 'category', "Pies & Cakes"))}>Pies & Cakes</Link></li>

       </ul>

      </li>
     </ul>
    </Menu>
   </div>
  )
 }
}
