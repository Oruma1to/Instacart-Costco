import React, { Component } from 'react'
import { getSearchProducts } from "../../services/product"

import './SearchBar.css'
import { Redirect } from 'react-router-dom';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredValue: ""
    };
  }
  search = async () => {
    const { filteredValue } = this.state
    let searchProducts = await getSearchProducts(filteredValue);
    this.props.setSearchProducts(searchProducts)
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
  }


  handleSearchChange = e => {
    let filteredValue = e.target.value
    if (filteredValue !== "") {
      this.setState({ filteredValue }, this.search)
    } else {
      this.props.setSearchProducts(null)
    }
  }

  render(props) {
    return (
      <div className="search-bar-container" >
        <form className="search-bar" onSubmit={this.handleOnSubmit}>
          <input
            className="search-input"
            value={this.filteredValue}
            onChange={this.handleSearchChange}
            name="Search"
            placeholder="Search Costco..."
            type="text"
            autoFocus
          />
          <img className="search-icon" alt="search-icon" src="https://i.imgur.com/xONMjhd.png" onClick={this.handleOnSubmit} />

        </form>

      </div>
    )
  }
}
