import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { stack as Menu } from 'react-burger-menu'
import './HamburgerNav.css'

export default class HamburgerNav extends Component {
 render() {
  return (
   <div className="hamburger-menu">
    <Menu>
     <h1 className="departments-header">Departments</h1>
     <ul className="parent-menu-hamburger">

      <li><Link className="department-item-hamburger" to="#">Meat & Seafood</Link>

       <ul className="parent-sub-menu-hamburger">

        <li><Link className="department-item-hamburger" to="#">Prime Beef</Link></li>

        <li><Link className="department-item-hamburger" to="#">Pork & Lamb</Link></li>

        <li><Link className="department-item-hamburger" to="#">Beef</Link></li>

        <li><Link className="department-item-hamburger" to="#">Seafood</Link></li>

        <li><Link className="department-item-hamburger" to="#">Poultry</Link></li>

        <li><Link className="department-item-hamburger" to="#">Meat</Link></li>

       </ul>

      </li>

      <li><Link className="department-item-hamburger" to="#">Produce</Link>

       <ul className="parent-sub-menu-hamburger">

        <li><Link className="department-item-hamburger" to="#">Fruit & Vegetable</Link></li>

        <li><Link className="department-item-hamburger" to="#">Fruit</Link></li>

        <li><Link className="department-item-hamburger" to="#">Vegetables</Link></li>

        <li><Link className="department-item-hamburger" to="#">Salad Mix</Link></li>

       </ul></li>

      <li><Link className="department-item-hamburger" to="#">Deli</Link></li>

      <ul className="parent-sub-menu-hamburger">

       <li><Link className="department-item-hamburger" to="#">Meat & Cheese</Link></li>

       <li><Link className="department-item-hamburger" to="#">Prepared Meals</Link></li>

       <li><Link className="department-item-hamburger" to="#">Soups & Salad</Link></li>

       <li><Link className="department-item-hamburger" to="#">Dips & Spreads</Link></li>
      </ul>

      <li><Link className="department-item-hamburger" to="#">Bakery & Desserts</Link>

       <ul className="parent-sub-menu-hamburger">

        <li><Link className="department-item-hamburger" to="#">Bread</Link></li>

        <li><Link className="department-item-hamburger" to="#">Buns & Rolls</Link></li>

        <li><Link className="department-item-hamburger" to="#">Cookies</Link></li>

        <li><Link className="department-item-hamburger" to="#">Pies & Cakes</Link></li>

       </ul>

      </li>
     </ul>
    </Menu>
   </div>
  )
 }
}
