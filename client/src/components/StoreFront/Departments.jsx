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

        <li><Link className="department-item" to="#" onClick={() => this.props.linkNavBar("Prime Beef")}>Prime Beef</Link></li>

        <li><Link className="department-item" to="#">Pork & Lamb</Link></li>

        <li><Link className="department-item" to="#">Beef</Link></li>

        <li><Link className="department-item" to="#">Seafood</Link></li>

        <li><Link className="department-item" to="#">Poultry</Link></li>

        <li><Link className="department-item" to="#">Meat</Link></li>

       </ul>

      </li>

      <li><Link className="department-item" to="#" onClick={() => this.props.linkNavBar('department', "Produce")}>Produce</Link>

       <ul className="parent-sub-menu">

        <li><Link className="department-item" to="#">Fruit & Vegetable Trays</Link></li>

        <li><Link className="department-item" to="#">Fruit</Link></li>

        <li><Link className="department-item" to="#">Vegetables</Link></li>

        <li><Link className="department-item" to="#">Salad Mix</Link></li>

       </ul></li>

      <li><Link className="department-item" to="#" onClick={() => this.props.linkNavBar('department', "Deli")}>Deli</Link></li>

      <ul className="parent-sub-menu">

       <li><Link className="department-item" to="#">Meat & Cheese Trays</Link></li>

       <li><Link className="department-item" to="#">Prepared Meals</Link></li>

       <li><Link className="department-item" to="#">Prepared Soups & Salad</Link></li>

       <li><Link className="department-item" to="#">Dips & Spreads</Link></li>
      </ul>

      <li><Link className="department-item" to="#" onClick={() => this.props.linkNavBar('department', "Bakery & Desserts")}>Bakery & Desserts</Link>

       <ul className="parent-sub-menu">

        <li><Link className="department-item" to="#">Bread</Link></li>

        <li><Link className="department-item" to="#">Buns & Rolls</Link></li>

        <li><Link className="department-item" to="#">Cookies</Link></li>

        <li><Link className="department-item" to="#">Pies & Cakes</Link></li>

       </ul>

      </li>
     </ul>
    </nav>
   </div>
  )
 }
}
