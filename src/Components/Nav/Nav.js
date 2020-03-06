import React from 'react';
//import './Nav.css';

class Nav extends React.Component {
  render() {
    return (
      <nav id='menu' className='nav-wrapper indigo darken-1'>
        <span className="brand-logo left">Logo</span> 
        <ul className='hide-on-med-and-down right'>
          <li>
            <div className='center row'>
              <div className='col s12'>
                <div className='row' id='topbarseach'>
                  <div className='input-field col s6 s12'>
                    <i className='white-text material-icons prefix'>search</i>
                    <input className='indigo lighten-1' type='text' placeholder='search' id='autocomplete-input'/>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Nav;