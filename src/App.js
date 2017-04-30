import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase'

// My components
import SimpleLineChart from './Chart';
// import SideBar from './SideBar';
import AppBarCustom from './AppBarCustom';

// Fixed menu click event
import injectTapEventPlugin from 'react-tap-event-plugin';

// Material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {

  constructor() {
    injectTapEventPlugin();
    super();
    this.state = {
      refresh_interval: null,
      logged: null,
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

    // Checking if signed in
    firebase.auth().onAuthStateChanged(function(user) {
      console.log("User : ")
      console.log(user)
      this.setState({ 
        logged: user != null 
      });
    }.bind(this));
  }

  login() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
  }

  logout() {
    firebase.auth().signOut();
  }

  render() {
  return (
    <MuiThemeProvider>
      <div className="App">
        <AppBarCustom logged={this.state.logged} logout={this.logout} login={this.login} />
        {/*<SideBar />*/}
        {this.state.logged &&
          <div>
            <h1>Refresh Interval : {this.state.refresh_interval} minutes</h1>
            <h3>Last Update : {this.state.last_update}</h3>
            <SimpleLineChart />
          </div>
        }
      </div>
    </MuiThemeProvider>
    );
  }
}

export default App;
