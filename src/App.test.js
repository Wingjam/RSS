import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as firebase from 'firebase'

beforeEach(function() {
  var config = {
    apiKey: "AIzaSyApDGQ5w-QZr_D-8d2a1YYwKsFscaYhDXw",
    authDomain: "remote-sugar-shack.firebaseapp.com",
    databaseURL: "https://remote-sugar-shack.firebaseio.com",
    storageBucket: "remote-sugar-shack.appspot.com",
    messagingSenderId: "559865381241"
  };

  firebase.initializeApp(config);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
