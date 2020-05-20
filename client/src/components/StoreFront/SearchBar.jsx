import React, { Component } from 'react'
import './SearchBar.css'

export default class SearchBar extends Component {

 render(props) {
  return (
   <div className="search-bar-container" >
    <form className="search-bar" onSubmit={(e) => props.onSubmit(e)}>
     <input
      className="search-input"
      value={props.value}
      onChange={(e) => props.onChange(e)}
      name="Search"
      placeholder="Search Costco..."
      type="text"
      autoFocus
     />
     <img className="search-icon" alt="search-icon" src="https://i.imgur.com/xONMjhd.png" />

    </form>

   </div>
  )
 }
}
