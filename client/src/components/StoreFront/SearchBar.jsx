import React, { Component } from 'react'
import './SearchBar.css'

export default class SearchBar extends Component {

  render() {
    return (
      <div className= "search-bar-container">
        <form className="search-bar">
          <input className="search-input"
            placeholder="Search Costco..."
            type="text"
          />
          <img className="search-icon" alt="search-icon" src="https://i.imgur.com/xONMjhd.png" />

        </form>

      </div>
    )
  }
}
