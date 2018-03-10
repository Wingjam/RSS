import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as firebase from 'firebase';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyApDGQ5w-QZr_D-8d2a1YYwKsFscaYhDXw",
  authDomain: "remote-sugar-shack.firebaseapp.com",
  databaseURL: "https://remote-sugar-shack.firebaseio.com",
  storageBucket: "remote-sugar-shack.appspot.com",
  messagingSenderId: "559865381241"
};
firebase.initializeApp(config);

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path='/' component={App} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
