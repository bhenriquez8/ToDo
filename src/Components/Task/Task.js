import React from 'react';
import './Task.css';

const Task = props => {
  return (
    <li className='Task collection-item'>
      <label htmlFor={props.task.task}>
        <input
          type='checkbox'
          className='filled-in'
          id={props.task.task}
          name={props.task.task}
        />
        <span>{props.task.task}</span>
      </label>
      <i className='material-icons'>delete</i>
      <i className='material-icons'>create</i>
    </li>
  );
};

export default Task;
