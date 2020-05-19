import React, { Component } from 'react'
import './Departments.css'

export default class Departments extends Component {
  render() {
    return (
      <div className="department-container">
        <h1>Departments</h1>
        <nav id="side-menu">

          <ul class="parent-menu">

            <li><a className="department-item" src="#">Meat & Seafood</a>

              <ul className="parent-sub-menu">

                <li><a className="department-item" src="#">Prime Beef</a></li>

                <li><a className="department-item" src="#">Pork & Lamb</a></li>

                <li><a className="department-item" src="#">Beef</a></li>

                <li><a className="department-item" src="#">Seafood</a></li>

                <li><a className="department-item" src="#">Poultry</a></li>

                <li><a className="department-item" src="#">Meat</a></li>

              </ul>

            </li>

            <li><a className="department-item" src="#">Produce</a>

              <ul className="parent-sub-menu">

                <li><a className="department-item" src="#">Fruit & Vegetable Trays</a></li>

                <li><a className="department-item" src="#">Fruit</a></li>

                <li><a className="department-item" src="#">Vegetables</a></li>

                <li><a className="department-item" src="#">Salad Mix</a></li>

              </ul></li>

            <li><a className="department-item" src="#">Deli</a></li>

            <ul className="parent-sub-menu">

              <li><a className="department-item" src="#">Meat & Cheese Trays</a></li>

              <li><a className="department-item" src="#">Prepared Meals</a></li>

              <li><a className="department-item" src="#">Prepared Soups & Salad</a></li>

              <li><a className="department-item" src="#">Dips & Spreads</a></li>
            </ul>

            <li><a className="department-item" src="#">Bakery & Desserts</a>

              <ul className="parent-sub-menu">

                <li><a className="department-item" src="#">Bread</a></li>

                <li><a className="department-item" src="#">Buns & Rolls</a></li>

                <li><a className="department-item" src="#">Cookies</a></li>

                <li><a className="department-item" src="#">Pies & Cakes</a></li>

              </ul>

            </li>
          </ul>
        </nav>
      </div>
    )
  }
}
