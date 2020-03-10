import {
  CREATE_TASK,
  CREATE_TASK_ERROR,
  DELETE_TASK,
  DELETE_TASK_ERROR,
  UPDATE_TASK,
  UPDATE_TASK_ERROR
} from '../todoConstants';

const defaultState = {
  tasks: [
    { id: 1, task: 'first item' },
    { id: 2, task: 'do some laundry' },
    { id: 3, task: 'finish personal project' }
  ]
};

const taskReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CREATE_TASK:
      console.log('created task', action.task);
      return state;
    case CREATE_TASK_ERROR:
      console.log('created task error', action.err);
      return state;
    case DELETE_TASK:
      console.log('deleted task', action.taskID);
      return state;
    case DELETE_TASK_ERROR:
      console.log('deleted task error', action.err);
      return state;
    case UPDATE_TASK:
      console.log('updated task', action.task);
      return state;
    case UPDATE_TASK_ERROR:
      console.log('updated task error', action.err);
      return state;
    default:
      return state;
  }
};

export default taskReducer;
