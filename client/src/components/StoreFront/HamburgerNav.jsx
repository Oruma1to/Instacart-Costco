import React, { Component } from 'react'
import { bubble as Menu } from 'react-burger-menu'
import './HamburgerNav.css'

export default class HamburgerNav extends Component {
  render() {
    return (
      <div className= 'hamburger-menu'>
        <Menu width={ '280px' }>
          <a href="google.com">google.com</a>
          <a href="/sign-in">SignIn</a>
        </Menu>
      </div>
    )
  }
}
