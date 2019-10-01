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
      <div className="Task">
        <input type="checkbox" id={this.props.task} name={this.props.task} />
        <label htmlFor={this.props.task}>{this.props.task}</label>
        <button onClick={this.handleRemove}>x</button>
      </div>
    );
  }
}

export default Task;