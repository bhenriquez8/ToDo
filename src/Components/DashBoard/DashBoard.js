import React from 'react';
import './DashBoard.css';

import EnterTaskBar from '../EnterTaskBar/EnterTaskBar';
import ToDoList from '../ToDoList/ToDoList';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

const DashBoard = props => {
  return (
    <div className='DashBoard'>
      <div className='container'>
        <EnterTaskBar />
        <ToDoList todoList={props.tasks} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    //tasks: state.task.tasks
    tasks: state.firestore.ordered.tasks
  };
};

//export default connect(mapStateToProps)(DashBoard);
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    // when this component is active
    { collection: 'tasks' } // this will induce the firestoreReducer whenever the database changes
  ]) // and it will update the state whenever the database changes
)(DashBoard);
