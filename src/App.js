import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase'

class App extends Component {

  constructor() {
    super();
    this.state = {
      interval: 0
    };
  }

  componentDidMount() {
    const dbRef = firebase.database().ref();
    const intervalRef = dbRef.child('interval');

    intervalRef.on('value', snap => {
      this.setState({
        interval: snap.val()
      });
    });
  }

  authenticate() {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');

    firebase.auth().signInWithPopup(provider)
      .then(result => {
        console.log(result);
      })
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.interval}</h1>
        <button onClick={this.authenticate.bind(this)}>
          Login with Google
        </button>
      </div>
    );
  }
}

export default App;
