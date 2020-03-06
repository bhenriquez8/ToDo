import React from 'react';
import './ToDoList.css';
import Task from '../Task/Task';

class ToDoList extends React.Component {
  render() {
    return (
      <div className='ToDoList'>
        <h2>Things To Do:</h2>
        <ul className='collection'>
          {this.props.todoList
            ? this.props.todoList.map(task => {
                return <Task key={task.id} task={task} />;
              })
            : null}
        </ul>
      </div>
    );
  }
}

export default ToDoList;
