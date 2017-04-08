import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase'
import SimpleLineChart from './Chart';

class App extends Component {

  constructor() {
    super();
    this.state = {
      refresh_interval: null,
      logged_in: null,
      last_update: null,
    };
  }

  componentDidMount() {
    const dbRef = firebase.database().ref();
    const intervalRef = dbRef.child('refresh_interval');
    const timestampRef = dbRef.child('timestamp')

    // Get refresh interval
    intervalRef.on('value', snap => {
      this.setState({
        refresh_interval: snap.val()
      });
    });

    // Get last update
    timestampRef.limitToLast(1).on("child_added", snap => {
      this.setState({
        last_update: snap.key
      });
    });

    //Checking if signed in
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in
        this.setState({ 
          logged_in: true 
        });
      }
      else {
        // User is signed out
        this.setState({ 
          logged_in: false 
        });
      }
    }.bind(this));
  }

  login() {
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
      .then(result => {
        console.log(result);
    })
  }

  logout() {
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    });
  }

  render() {
    if (this.state.logged_in) {
      return (
        <div className="App">
          <h1>Refresh Interval : {this.state.refresh_interval} minutes</h1>
          <h3>Last Update : {this.state.last_update}</h3>
          <button onClick={this.logout.bind(this)}>
            Logout with Google
          </button>
          <SimpleLineChart />
        </div>
      );
    }
    else {
      return (
        <div className="App">
          <p>You need to log in</p>
          <button onClick={this.login.bind(this)}>
            Login with Google
          </button>
        </div>
      );
    }
  }
}

export default App;
