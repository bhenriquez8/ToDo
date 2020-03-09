import React from 'react';
import './App.css';

import { connect } from 'react-redux';

import Nav from '../Nav/Nav';
import SidePanel from '../SidePanel/SidePanel';
import DashBoard from '../DashBoard/DashBoard';
import TaskForm from '../TaskForm/TaskForm';

const App = props => {
  return (
    <div className='App'>
      <Nav />
      <div className='row'>
        <div className='col s12 m4 l2'>
          <SidePanel />
        </div>
        <div className='col s12 m8 l6'>
          <DashBoard />
        </div>
        <div className='col l4 hide-on-med-and-down'>
          {props.showEdit && <TaskForm />}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    showEdit: state.showEdit
  };
};

export default connect(mapStateToProps)(App);
