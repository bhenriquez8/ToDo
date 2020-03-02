const firebase = require('firebase/app');

export const createTask = (task) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    firestore.collection('tasks').add({
      task,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    }).then(() => {
      dispatch({ type: 'CREATE_TASK', task });
    }).catch((err) => {
      dispatch({ type: 'CREATE_TASK_ERROR', err });
    })
  }
};