import React, { Component } from 'react'
import { getSearchProducts } from "../../services/product"

import './SearchBar.css'

export default class SearchBar extends Component {
 constructor() {
  super();
  this.state = {
   products: [],
   filteredValue: "",
   filteredPosts: null
  };
 }
 searchForItem = async (term) => {
  console.log("In searchFortITEM", term)
  let products = await getSearchProducts(term);
  this.setState({ products });
 }
 handleOnSubmit = (e) => {
  e.preventDefault();
  console.log("in handleSubmit", this.state.filteredValue)
  this.searchForItem(this.state.filteredValue)
 }
 handleSearchChange = e => {
  console.log(e.target.value)
  let filteredValue = e.target.value
  this.setState({ filteredValue })
 }
 render(props) {
  console.log("in the search ", this.state.products)
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
