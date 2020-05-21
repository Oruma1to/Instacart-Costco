import React, { Component } from 'react'
import './Departments.css'
import { Link } from 'react-router-dom'

export default class Departments extends Component {
 constructor(props) {
  super(props);
 }
 render() {
  return (
   <div className="department-container">
    <h1>Departments</h1>
    <nav className="side-menu">

     <ul className="parent-menu">

      <li><Link className="department-item" to="#" onClick={() => this.props.linkNavBar('department', "Meat & Seafood")}>Meat & Seafood</Link>

       <ul className="parent-sub-menu">

        <li><Link className="department-item" to="#" onClick={() => this.props.linkNavBar('category', "Prime Beef")}>Prime Beef</Link></li>

        <li><Link className="department-item" to="#" onClick={() => this.props.linkNavBar('category', "Pork & Lamb")}>Pork & Lamb</Link></li>

        <li><Link className="department-item" to="#" onClick={() => this.props.linkNavBar('category', "Beef")}>Beef</Link></li>

        <li><Link className="department-item" to="#" onClick={() => this.props.linkNavBar('category', "Seafood")}>Seafood</Link></li>

        <li><Link className="department-item" to="#" onClick={() => this.props.linkNavBar('category', "Poultry")}>Poultry</Link></li>

        <li><Link className="department-item" to="#" onClick={() => this.props.linkNavBar('category', "Meat")}>Meat</Link></li>

       </ul>

      </li>

      <li><Link className="department-item" to="#" onClick={() => this.props.linkNavBar('department', "Produce")}>Produce</Link>

       <ul className="parent-sub-menu">

        <li><Link className="department-item" to="#" onClick={() => this.props.linkNavBar('category', "Fruit & Vegetable Trays")}>Fruit & Vegetable Trays</Link></li>

        <li><Link className="department-item" to="#" onClick={() => this.props.linkNavBar('category', "Fruit")}>Fruit</Link></li>

        <li><Link className="department-item" to="#" onClick={() => this.props.linkNavBar('category', "Vegetables")}>Vegetables</Link></li>

        <li><Link className="department-item" to="#" onClick={() => this.props.linkNavBar('category', "Salad Mix")}>Salad Mix</Link></li>

       </ul></li>

      <li><Link className="department-item" to="#" onClick={() => this.props.linkNavBar('department', "Deli")}>Deli</Link></li>

      <ul className="parent-sub-menu">

       <li><Link className="department-item" to="#" onClick={() => this.props.linkNavBar('category', "Meat & Cheese Trays")}>Meat & Cheese Trays</Link></li>

       <li><Link className="department-item" to="#" onClick={() => this.props.linkNavBar('category', "Prepared Meals")}>Prepared Meals</Link></li>

       <li><Link className="department-item" to="#" onClick={() => this.props.linkNavBar('category', "Prepared Soups & Salad")}>Prepared Soups & Salad</Link></li>

       <li><Link className="department-item" to="#" onClick={() => this.props.linkNavBar('category', "Dips & Spreads")}>Dips & Spreads</Link></li>
      </ul>

      <li><Link className="department-item" to="#" onClick={() => this.props.linkNavBar('department', "Bakery & Desserts")}>Bakery & Desserts</Link>

       <ul className="parent-sub-menu">

        <li><Link className="department-item" to="#" onClick={() => this.props.linkNavBar('category', "Bread")}>Bread</Link></li>

        <li><Link className="department-item" to="#" onClick={() => this.props.linkNavBar('category', "Buns & Rolls")}>Buns & Rolls</Link></li>

        <li><Link className="department-item" to="#" onClick={() => this.props.linkNavBar('category', "Cookies")}>Cookies</Link></li>

        <li><Link className="department-item" to="#" onClick={() => this.props.linkNavBar('category', "Pies & Cakes")}>Pies & Cakes</Link></li>

       </ul>

      </li>
     </ul>
    </nav>
   </div>
  )
 }
}
