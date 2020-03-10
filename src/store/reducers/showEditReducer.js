import { SHOW_EDIT } from '../todoConstants';

const defaultState = false;

const showEditReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SHOW_EDIT:
      return (state = !state);
    default:
      return state;
  }
};

export default showEditReducer;
