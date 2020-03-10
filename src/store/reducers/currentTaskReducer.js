import { CURRENT_TASK } from '../todoConstants';

const defaultState = {
  id: 0,
  task: ''
};

const currentTaskReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CURRENT_TASK:
      return {
        id: action.payload.id,
        task: action.payload.task
      };
    default:
      return state;
  }
};

export default currentTaskReducer;
