import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Nav from '../Nav/Nav';
import SidePanel from '../SidePanel/SidePanel';
import DashBoard from '../DashBoard/DashBoard';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <SidePanel />
          <Switch>
            <Route path='/' component={DashBoard} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
