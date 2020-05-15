import React, { Component } from 'react'
import './StoreHeader.css'
import StoreFrontNavBar from './StoreFrontNavBar'

export default class StoreHeader extends Component {
  render() {
    return (
      <div className='apple-header'>
        <StoreFrontNavBar/>
      </div>
    )
  }
}
