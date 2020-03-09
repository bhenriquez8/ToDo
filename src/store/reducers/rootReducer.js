import showEditReducer from './showEditReducer';
import taskReducer from './taskReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore'; // syncs our data from firestore to state

const rootReducer = combineReducers({
  showEdit: showEditReducer,
  task: taskReducer,
  firestore: firestoreReducer // will contain our firestore data
});

export default rootReducer;
