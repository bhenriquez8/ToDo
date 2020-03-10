import React from 'react';
import './Task.css';

import { connect } from 'react-redux';
import { showForm } from '../../store/actions/showEditAction';
import { deleteTask } from '../../store/actions/taskAction';
import { assignCurrentTask } from '../../store/actions/currentTaskAction';

class Task extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.handleShowEdit = this.handleShowEdit.bind(this);
  }

  handleDelete(e) {
    this.props.deleteTask(this.props.task.id);
  }

  handleShowEdit(e) {
    this.props.showForm();
    this.props.assignCurrentTask(this.props.task);
  }

  render() {
    return (
      <li className='Task collection-item'>
        <label htmlFor={this.props.task.task}>
          <input
            type='checkbox'
            className='filled-in'
            id={this.props.task.id}
            name={this.props.task.task}
          />
          <span>{this.props.task.task}</span>
        </label>
        <i onClick={this.handleDelete} className='material-icons'>
          delete
        </i>
        <i onClick={this.handleShowEdit} className='material-icons'>
          create
        </i>
      </li>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    showForm: () => dispatch(showForm()),
    deleteTask: taskID => dispatch(deleteTask(taskID)),
    assignCurrentTask: taskObj => dispatch(assignCurrentTask(taskObj))
  };
};

export default connect(null, mapDispatchToProps)(Task);
