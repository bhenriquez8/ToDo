import React from 'react';
import './EnterTaskBar.css';

class EnterTaskBar extends React.Component {
  render() {
    return (
      <div className="EnterTaskBar">
        <input type='text' value='' placeholder='Enter a task'/>
        <button>Add Task</button>
      </div>
    );
  }
}

export default EnterTaskBar;