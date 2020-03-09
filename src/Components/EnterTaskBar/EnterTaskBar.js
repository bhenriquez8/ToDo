import React from 'react';
import './EnterTaskBar.css';
import { connect } from 'react-redux';
import { createTask } from '../../store/actions/taskAction';

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
    // dispatches the action creator in order to update firebase
    this.props.createTask(this.state.inputField);
    this.setState({
      inputField: ''
    });
  }

  render() {
    return (
      <div className='EnterTaskBar'>
        <div className='container'>
          <input
            className='white'
            type='text'
            value={this.state.inputField}
            onChange={this.handleChange}
            placeholder='Enter a task'
          />
          <button className='btn-small' onClick={this.handleClick}>
            Add Task
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createTask: task => dispatch(createTask(task))
  };
};

export default connect(null, mapDispatchToProps)(EnterTaskBar);
