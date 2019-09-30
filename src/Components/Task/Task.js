import React from 'react';
import './Task.css';

class Task extends React.Component {
  render() {
    return(
      <li key={this.props.key}>{this.props.task}</li>
    );
  }
}

export default Task;