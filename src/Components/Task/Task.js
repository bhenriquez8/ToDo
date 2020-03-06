import React from 'react';
import './Task.css';

const Task = props => {
  return (
    <li className='Task collection-item'>
      <input type='checkbox' id={props.task.id} name={props.task.task} />
      <label htmlFor={props.task.task}>{props.task.task}</label>
      <i className='material-icons'>delete</i>
      <i className='material-icons'>create</i>
    </li>
  );
};

export default Task;
