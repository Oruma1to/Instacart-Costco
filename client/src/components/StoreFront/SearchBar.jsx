import React, { Component } from 'react'
import { getSearchProducts } from "../../services/product"

import './SearchBar.css'

export default class SearchBar extends Component {
 constructor(props) {
  super(props);
  this.state = {
   filteredValue: ""
  };
 }
 handleOnSubmit = (e) => {
  e.preventDefault();
  console.log("in handleSubmit", this.state.filteredValue)
  if (this.state.filteredValue.length < 0) {
   this.setState({ filteredValue: "" })
  }
  this.props.searchForItem(this.state.filteredValue)
 }
 handleSearchChange = e => {
  console.log("SEARCHBAR HANDLESEARCHCHANGE ", e.target.value)
  let filteredValue = e.target.value
  this.setState({ filteredValue })
  this.props.searchForItem(this.state.filteredValue)
 }
 render(props) {
  // console.log("in the search ", this.state.products)
  // console.log("in the search ", this.props.searchForItem)
  // console.log("in the search ", this.props.searchProducts)
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
