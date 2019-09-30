import React from 'react';
import './ToDoList.css';

import TaskList from '../TaskList/TaskList';

class ToDoList extends React.Component {
  render() {
    return(
      <div className="ToDoList">
        <h2>Things To Do:</h2>
        <TaskList todoList={this.props.todoList}/>
      </div>
    );
  }
}

export default ToDoList;