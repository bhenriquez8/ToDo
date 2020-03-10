import { CURRENT_TASK } from '../todoConstants';

export const assignCurrentTask = taskObj => {
  return (dispatch, getState) => {
    dispatch({
      type: CURRENT_TASK,
      payload: {
        id: taskObj.id,
        task: taskObj.task
      }
    });
  };
};
