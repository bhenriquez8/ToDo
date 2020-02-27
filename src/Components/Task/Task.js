import React from 'react';
import './Task.css';

class Task extends React.Component {
  constructor(props) {
    super(props);

    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove(event) {
    event.preventDefault();

    this.props.removeTodo(this.props.task);
  }

  render() {
    return(
      <li className="Task collection-item">
        <input type="checkbox" id={this.props.task.id} name={this.props.task.task} />
        <label htmlFor={this.props.task.task}>{this.props.task.task}</label>
        <button onClick={this.handleRemove}>x</button>
      </li>
    );
  }
}

export default Task;