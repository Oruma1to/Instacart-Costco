import React, { Component } from 'react'
import './Departments.css'

export default class Departments extends Component {
  render() {
    return (
      <div className="department-container">
        <h1>Departments</h1>
        <nav id="side-menu">

          <ul class="parent-menu">

            <li><a className="department-item" href="#">Meat & Seafood</a>

              <ul>

                <li><a className="department-item" href="#">Prime Beef</a></li>

                <li><a className="department-item" href="#">Pork & Lamb</a></li>

                <li><a className="department-item" href="#">Beef</a></li>

                <li><a className="department-item" href="#">Seafood</a></li>

                <li><a className="department-item" href="#">Poultry</a></li>

                <li><a className="department-item" href="#">Meat</a></li>

              </ul>

            </li>

            <li><a className="department-item" href="#">Produce</a>

              <ul>

                <li><a className="department-item" href="#">Fruit & Vegetable Trays</a></li>

                <li><a className="department-item" href="#">Fruit</a></li>

                <li><a className="department-item" href="#">Vegetables</a></li>

                <li><a className="department-item" href="#">Salad Mix</a></li>

              </ul></li>

            <li><a className="department-item" href="#">Deli</a></li>

            <ul>

              <li><a className="department-item" href="#">Meat & Cheese Trays</a></li>

              <li><a className="department-item" href="#">Prepared Meals</a></li>

              <li><a className="department-item" href="#">Prepared Meals</a></li>

              <li><a className="department-item" href="#">Prepared Soups & Salad</a></li>

              <li><a className="department-item" href="#">Dips & Spreads</a></li>
            </ul>

            <li><a className="department-item" href="#">Bakery & Desserts</a>

              <ul>

                <li><a className="department-item" href="#">Bread</a></li>

                <li><a className="department-item" href="#">Buns & Rolls</a></li>

                <li><a className="department-item" href="#">Cookies</a></li>

                <li><a className="department-item" href="#">Pies & Cakes</a></li>

              </ul>

            </li>
          </ul>
        </nav>
      </div>
    )
  }
}
