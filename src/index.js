import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from '../src/Components/App/App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require('firebase/firestore');

// Your web app's Firebase configuration
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

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
