import firebase from 'firebase/app';
import 'firebase/firestore';

// Initializing Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDNeke793yGTKXxL3fkcQ8x28WQ8GOB-eI",
  authDomain: "to-do-list-687f7.firebaseapp.com",
  databaseURL: "https://to-do-list-687f7.firebaseio.com",
  projectId: "to-do-list-687f7",
  storageBucket: "to-do-list-687f7.appspot.com",
  messagingSenderId: "234835258276",
  appId: "1:234835258276:web:9d36a80c511e44a9e46f31"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.firestore().settings({ timestampsInSnapshots: true});

export default firebase;