import React, { Component } from 'react'
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
 handleOnSubmit = (e) => {
  e.preventDefault();
  console.log(e.target.value)
  console.log("I was clicked")
 }
 handleSearchChange = e => {
  console.log(e.target.value)
  let filteredValue = e.target.value
  this.setState({ filteredValue })
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
