import React from 'react';
import './App.css';

import Nav from '../Nav/Nav';
import SidePanel from '../SidePanel/SidePanel';
import DashBoard from '../DashBoard/DashBoard';

class App extends React.Component {
  render() {
    return (
        <div className="App">
          <Nav />
          <div className='row'>
            <div className='col s12 m4 l3'>
              <SidePanel />
            </div>
            <div className='col s12 m8 l9'>
              <DashBoard />
            </div>
          </div>
        </div>
    );
  }
}

export default App;
