import React, { Component } from 'react'

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

                <li><a href="#">item</a></li>

                <li><a href="#">item</a></li>

                <li><a href="#">item</a></li>

                <li><a href="#">item</a></li>

              </ul>

            </li>

            <li><a href="#">header</a>

              <ul>

                <li><a href="#">item</a></li>

                <li><a href="#">item</a></li>

                <li><a href="#">item</a></li>

                <li><a href="#">item</a></li>

                <li><a href="#">item</a></li>

              </ul></li>

            <li><a href="#">header</a>

              <ul>

                <li><a href="#">item</a></li>

                <li><a href="#">item</a></li>

                <li><a href="#">item</a></li>

                <li><a href="#">item</a></li>

              </ul></li>

            <li><a href="#">header</a>

              <ul>

                <li><a href="#">item</a></li>

                <li><a href="#">item</a></li>

                <li><a href="#">item</a></li>

                <li><a href="#">item</a></li>

              </ul>

            </li>
          </ul>
        </nav>
      </div>
    )
  }
}
