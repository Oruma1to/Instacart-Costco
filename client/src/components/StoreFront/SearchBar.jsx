import React, { Component } from 'react'
import './SearchBar.css'

export default class SearchBar extends Component {

  render() {

    console.log("Work!")

    return (
      <div>
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
