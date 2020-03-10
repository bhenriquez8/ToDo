import { SHOW_EDIT } from '../todoConstants';

export const showForm = () => {
  return (dispatch, getState) => {
    dispatch({
      type: SHOW_EDIT
    });
  };
};
