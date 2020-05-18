import React, { Component } from 'react'
import './Departments.css'

export default class Departments extends Component {
  render() {
    return (
      <div>
        <h1>Departments</h1>
        <nav id="side-menu">

          <ul class="parent-menu">

            <li><a href="#">Meat & Seafood</a>

              <ul>

                <li><a href="#">Prime Beef</a></li>

                <li><a href="#">Pork & Lamb</a></li>

                <li><a href="#">Beef</a></li>

                <li><a href="#">Seafood</a></li>

                <li><a href="#">Poultry</a></li>

                <li><a href="#">Meat</a></li>

              </ul>

            </li>

            <li><a href="#">Produce</a>

              <ul>

                <li><a href="#">Fruit & Vegetable Trays</a></li>

                <li><a href="#">Fruit</a></li>

                <li><a href="#">Vegetables</a></li>

                <li><a href="#">Salad Mix</a></li>

              </ul></li>

            <li><a href="#">Deli</a></li>

              <ul>

                <li><a href="#">Meat & Cheese Trays</a></li>

                <li><a href="#">Prepared Meals</a></li>

                <li><a href="#">Prepared Meals</a></li>

                <li><a href="#">Prepared Soups & Salad</a></li>

                <li><a href="#">Dips & Spreads</a></li>
              </ul>

            <li><a href="#">Bakery & Desserts</a>

              <ul>

                <li><a href="#">Bread</a></li>

                <li><a href="#">Buns & Rolls</a></li>

                <li><a href="#">Cookies</a></li>

                <li><a href="#">Pies & Cakes</a></li>

              </ul>

            </li>
          </ul>
        </nav>
      </div>
    )
  }
}
