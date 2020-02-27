import React from 'react';
import './EnterTaskBar.css';

class EnterTaskBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      inputField: ''
    };
  }

  handleChange(event) {
    this.setState({
      inputField: event.target.value
    });
  }

  handleClick(event) {
    event.preventDefault();

    this.props.onClick(this.state.inputField);
    this.setState({
      inputField: ''
    });
  }

  render() {
    return (
      <div className="EnterTaskBar">
        <div className='container'>
          <input
          type='text'
          value={this.state.inputField}
          onChange={this.handleChange}
          placeholder='Enter a task'/>
          <button onClick={this.handleClick}>Add Task</button>
        </div>
      </div>
    );
  }
}

export default EnterTaskBar;