export const showForm = () => {
  return (dispatch, getState) => {
    dispatch({
      type: 'SHOW_EDIT'
    });
  };
};
