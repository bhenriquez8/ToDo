const defaultState = {
  tasks: [
    {id: 1, task: 'first item'},
    {id: 2, task: 'do some laundry'},
    {id: 3, task: 'finish personal project'}
  ]
};

const taskReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'CREATE_TASK':
      console.log('created task', action.task);
      return state;
    case 'CREATE_TASK_ERROR':
      console.log('created task error', action.err);
      return state;
    default:
      return state;
  }
}

export default taskReducer;