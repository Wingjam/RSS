import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyC9RLLQWoIKfvWXD51bwXfkkWOePSPkOOc",
  authDomain: "sugar-shack.firebaseapp.com",
  databaseURL: "https://sugar-shack.firebaseio.com",
  storageBucket: "sugar-shack.appspot.com",
  messagingSenderId: "1032303393149"
};
firebase.initializeApp(config);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
