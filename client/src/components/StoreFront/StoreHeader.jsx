import React, { Component } from 'react'
import './StoreHeader.css'
import StoreFrontNavBar from './StoreFrontNavBar'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'

export default class StoreHeader extends Component {
  render() {
    return (
      <div className='apple-header'>
        <StoreFrontNavBar />

        <div className="circle-logo"><img className="costco-logo" src={require("../../images/costco-logo2.png")} /></div>
        
        <div className="costco-title">Costco</div>
        
        <div className="view-more-links">
          <Link className="aboveSearch">View pricing policy</Link>
          <span className="dot">•</span>
          <Link className="viewMoreText">More info</Link></div>

        <SearchBar />
      </div>
    )
  }
}
