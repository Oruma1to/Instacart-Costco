import React, { Component } from 'react'
import './Departments.css'
import { Link } from 'react-router-dom'
import { linkNavBar } from "../selectedOptions.js"

export default class Departments extends Component {
 render() {
  return (
   <div className="department-container">
    <h1>Departments</h1>
    <nav className="side-menu">

     <ul className="parent-menu">

      <li><Link className="department-item" to="#" onClick={() => linkNavBar(this.props.products, this.props.setFound, 'department', "Meat & Seafood")}>Meat & Seafood</Link>

       <ul className="parent-sub-menu">

        <li><Link className="department-item" to="#" onClick={() => linkNavBar(this.props.products, this.props.setFound, 'category', "Prime Beef")}>Prime Beef</Link></li>

        <li><Link className="department-item" to="#" onClick={() => linkNavBar(this.props.products, this.props.setFound, 'category', "Pork & Lamb")}>Pork & Lamb</Link></li>

        <li><Link className="department-item" to="#" onClick={() => linkNavBar(this.props.products, this.props.setFound, 'category', "Beef")}>Beef</Link></li>

        <li><Link className="department-item" to="#" onClick={() => linkNavBar(this.props.products, this.props.setFound, 'category', "Seafood")}>Seafood</Link></li>

        <li><Link className="department-item" to="#" onClick={() => linkNavBar(this.props.products, this.props.setFound, 'category', "Poultry")}>Poultry</Link></li>

       </ul>

      </li>

      <li><Link className="department-item" to="#" onClick={() => linkNavBar(this.props.products, this.props.setFound, 'department', "Produce")}>Produce</Link>

       <ul className="parent-sub-menu">

        <li><Link className="department-item" to="#" onClick={() => linkNavBar(this.props.products, this.props.setFound, 'category', "Fruit & Vegetable Trays")}>Fruit & Vegetable Trays</Link></li>

        <li><Link className="department-item" to="#" onClick={() => linkNavBar(this.props.products, this.props.setFound, 'category', "Fruit")}>Fruit</Link></li>

        <li><Link className="department-item" to="#" onClick={() => linkNavBar(this.props.products, this.props.setFound, 'category', "Vegetable")}>Vegetables</Link></li>

        <li><Link className="department-item" to="#" onClick={() => linkNavBar(this.props.products, this.props.setFound, 'category', "Salad Mix")}>Salad Mix</Link></li>

       </ul></li>

      <li><Link className="department-item" to="#" onClick={() => linkNavBar(this.props.products, this.props.setFound, 'department', "Deli")}>Deli</Link></li>

      <ul className="parent-sub-menu">

       <li><Link className="department-item" to="#" onClick={() => linkNavBar(this.props.products, this.props.setFound, 'category', "Meat & Cheese Trays")}>Meat & Cheese Trays</Link></li>

       <li><Link className="department-item" to="#" onClick={() => linkNavBar(this.props.products, this.props.setFound, 'category', "Prepared Meals")}>Prepared Meals</Link></li>

       <li><Link className="department-item" to="#" onClick={() => linkNavBar(this.props.products, this.props.setFound, 'category', "Prepared Soups & Salad")}>Prepared Soups & Salad</Link></li>

       <li><Link className="department-item" to="#" onClick={() => linkNavBar(this.props.products, this.props.setFound, 'category', "Dips & Spreads")}>Dips & Spreads</Link></li>
      </ul>

      <li><Link className="department-item" to="#" onClick={() => linkNavBar(this.props.products, this.props.setFound, 'department', "Bakery & Desserts")}>Bakery & Desserts</Link>

       <ul className="parent-sub-menu">

        <li><Link className="department-item" to="#" onClick={() => linkNavBar(this.props.products, this.props.setFound, 'category', "Bread")}>Bread</Link></li>

        <li><Link className="department-item" to="#" onClick={() => linkNavBar(this.props.products, this.props.setFound, 'category', "Buns & Rolls")}>Buns & Rolls</Link></li>

        <li><Link className="department-item" to="#" onClick={() => linkNavBar(this.props.products, this.props.setFound, 'category', "Cookies")}>Cookies</Link></li>

        <li><Link className="department-item" to="#" onClick={() => linkNavBar(this.props.products, this.props.setFound, 'category', "Pies & Cakes")}>Pies & Cakes</Link></li>

       </ul>

       <li><Link className="department-item" to="#" onClick={() => linkNavBar(this.props.products, this.props.setFound, 'category', "Meat")}>Back to Main</Link></li>


      </li>
     </ul>
    </nav>
   </div>
  )
 }
}
