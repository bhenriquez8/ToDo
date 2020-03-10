import React from 'react';
import { connect } from 'react-redux';
import { updateTask } from '../../store/actions/taskAction';
import { showForm } from '../../store/actions/showEditAction';

class TaskForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      task: '',
      due_date: '',
      isImportant: false
    };

    this.closeForm = this.closeForm.bind(this);
    this.submitEditedTask = this.submitEditedTask.bind(this);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      id: this.props.currentTask.id,
      task: this.props.currentTask.task
    });
  }

  closeForm(e) {
    this.props.showForm();
  }

  submitEditedTask(e) {
    e.preventDefault();

    const taskObj = {
      id: this.props.currentTask.id,
      task: this.state.task,
      due_date: this.state.due_date,
      isImportant: this.state.isImportant
    };

    this.props.updateTask(taskObj);
    this.props.showForm();
  }

  handleInputChange(e) {
    this.setState({
      task: e.target.value
    });
  }

  handleDateChange(e) {
    this.setState({
      due_date: e.target.value
    });
  }

  handleCheckboxChange(e) {
    this.setState({ isImportant: e.target.checked });
  }

  render() {
    return (
      <div className='row white'>
        <form className='col s12'>
          <div className='row'>
            <div className='col s1 offset-s10'>
              <i
                style={{ cursor: 'pointer' }}
                className='material-icons'
                onClick={this.closeForm}
              >
                close
              </i>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s12'>
              <i className='material-icons prefix'>mode_edit</i>
              <input
                type='text'
                id='task_name'
                value={this.state.task}
                onChange={this.handleInputChange}
                placeholder='Task'
                className='validate'
              />
              {/*<label htmlFor='task_name'>Task Name</label>*/}
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s12'>
              <i className='material-icons prefix'>date_range</i>
              <input
                type='text'
                id='due_date'
                value={this.state.due_date}
                onChange={this.handleDateChange}
                placeholder='Due Date'
                className='validate'
              />
              {/*<label htmlFor='due_date'>Due Date</label>*/}
            </div>
          </div>
          <div className='row'>
            <div className='col s6 offset-s6'>
              <label htmlFor='important'>
                <input
                  id='important'
                  type='checkbox'
                  checked={this.state.isImportant}
                  onChange={this.handleCheckboxChange}
                  className='filled-in'
                />
                <span>Important</span>
              </label>
            </div>
          </div>
          <div className='row'>
            <div
              className='col s3 offset-s1 btn-small'
              onClick={this.submitEditedTask}
            >
              <span>Update</span>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentTask: state.currentTask
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateTask: taskObj => dispatch(updateTask(taskObj)),
    showForm: () => dispatch(showForm())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
