import React from 'react';
import { connect } from 'react-redux';
import { updateTask } from '../../store/actions/taskAction';
import { showForm } from '../../store/actions/showEditAction';

class TaskForm extends React.Component {
  constructor(props) {
    super(props);

    this.closeForm = this.closeForm.bind(this);
  }

  closeForm(e) {
    this.props.showForm();
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
                placeholder='Due Date'
                className='validate'
              />
              {/*<label htmlFor='due_date'>Due Date</label>*/}
            </div>
          </div>
          <div className='row'>
            <div className='col s6 offset-s6'>
              <label htmlFor='important'>
                <input id='important' type='checkbox' class='filled-in' />
                <span>Important</span>
              </label>
            </div>
          </div>
          <div className='row'>
            <div className='col s3 offset-s1 btn-small'>
              <span>Update</span>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateTask: taskObj => dispatch(updateTask(taskObj)),
    showForm: () => dispatch(showForm())
  };
};

export default connect(null, mapDispatchToProps)(TaskForm);
