import React, { Component } from 'react'
import './StoreHeader.css'
import StoreFrontNavBar from './StoreFrontNavBar'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'

export default class StoreHeader extends Component {
 render() {
  // console.log("STOREHEADER ", this.props.user)
  return (
   <div className='apple-header'>
    <StoreFrontNavBar user={this.props.user} />

    <div className="circle-logo">
     <img className="costco-logo" src={require("../../images/costco-logo2.png")} alt="costco-logo" />
    </div>

    <div className="costco-title">Costco</div>

    <div className="view-more-links">
     <Link to="#">View pricing policy</Link>
     <span className="dot">•</span>
     <Link to="#">More info</Link>
    </div>

    <SearchBar searchForItem={this.props.searchForItem} searchProducts={this.props.searchProducts} />
   </div>
  )
 }
}
