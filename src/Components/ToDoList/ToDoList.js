import React from 'react';
import './ToDoList.css';
import Task from '../Task/Task';

const ToDoList = props => {
  return (
    <div className='ToDoList'>
      <h2>Things To Do:</h2>
      <ul className='collection'>
        {props.todoList
          ? props.todoList.map(task => {
              return <Task key={task.id} task={task} />;
            })
          : null}
      </ul>
    </div>
  );
};

export default ToDoList;
