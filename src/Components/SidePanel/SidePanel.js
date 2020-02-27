import React, { Component } from 'react'
import './SidePanel.css';

export class SidePanel extends Component {
  render() {
    return (
      <div className='Panel grey darken-2'>
        <ul className='collection'>
          <li className='collection-item grey darken-3'>Inbox</li>
          <li className='collection-item grey darken-3'>Today</li>
          <li className='collection-item grey darken-3'>Tomorrow</li>
          <li className='collection-item grey darken-3'>This Week</li>
          <li className='collection-item grey darken-3'>Important</li>
        </ul>
      </div>
    )
  }
}

export default SidePanel