import React from 'react';
import './Nav.css';

class Nav extends React.Component {
  render() {
    return (
      <nav className='menu'>
        <span className='logo'>ToDo!</span>
        <input type='text' placeholder='Search' />
        <span className='account'>Icon</span>
      </nav>
    )
  }
}

export default Nav;