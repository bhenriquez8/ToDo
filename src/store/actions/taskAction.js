import {
  CREATE_TASK,
  CREATE_TASK_ERROR,
  DELETE_TASK,
  DELETE_TASK_ERROR,
  UPDATE_TASK,
  UPDATE_TASK_ERROR
} from '../todoConstants';

const firebase = require('firebase/app');

export const createTask = task => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    firestore
      .collection('tasks')
      .add({
        task,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
      .then(() => {
        dispatch({ type: CREATE_TASK, task });
      })
      .catch(err => {
        dispatch({ type: CREATE_TASK_ERROR, err });
      });
  };
};

export const deleteTask = taskID => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection('tasks')
      .doc(taskID)
      .delete()
      .then(() => {
        dispatch({ type: DELETE_TASK, taskID });
      })
      .catch(err => {
        dispatch({ type: DELETE_TASK_ERROR, err });
      });
  };
};

export const updateTask = taskObj => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection('tasks')
      .doc(taskObj.id)
      .update({
        task: taskObj.task,
        due_date: taskObj.due_date,
        isImportant: taskObj.isImportant
      })
      .then(() => {
        dispatch({ type: UPDATE_TASK });
      })
      .catch(err => {
        dispatch({ type: UPDATE_TASK_ERROR }, err);
      });
  };
};
