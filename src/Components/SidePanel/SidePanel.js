import React, { Component } from 'react';
import './SidePanel.css';

export class SidePanel extends Component {
  render() {
    return (
      <div className='Panel indigo darken-2'>
        <ul>
          <li>Inbox</li>
          <li>Today</li>
          <li>Tomorrow</li>
          <li>This Week</li>
          <li>Important</li>
        </ul>
      </div>
    );
  }
}

export default SidePanel;
