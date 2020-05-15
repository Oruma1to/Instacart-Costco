import React, { Component } from 'react'
import './StoreHeader.css'
import StoreFrontNavBar from './StoreFrontNavBar'
import SearchBar from './SearchBar'

export default class StoreHeader extends Component {
  render() {
    return (
      <div className='apple-header'>
        <StoreFrontNavBar />
        <SearchBar />
      </div>
    )
  }
}
