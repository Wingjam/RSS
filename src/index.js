import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'
import { Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers, compose } from 'redux'
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase'
import firebase from 'firebase'
import * as serviceWorker from 'serviceWorker'

// Translation
import './i18n';

import 'assets/css/material-dashboard-react.css?v=1.5.0'

import indexRoutes from 'routes/index.jsx'


// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyApDGQ5w-QZr_D-8d2a1YYwKsFscaYhDXw",
    authDomain: "remote-sugar-shack.firebaseapp.com",
    databaseURL: "https://remote-sugar-shack.firebaseio.com",
    storageBucket: "remote-sugar-shack.appspot.com",
    messagingSenderId: "559865381241"
};
firebase.initializeApp(firebaseConfig);

// react-redux-firebase config
const rrfConfig = {
    userProfile: 'users',
}

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig),
)(createStore)

// Add firebase to reducers
const rootReducer = combineReducers({
    firebase: firebaseReducer,
})

// Create store with reducers and initial state
const initialState = {}
const store = createStoreWithFirebase(rootReducer, initialState)

const hist = createBrowserHistory()

ReactDOM.render(
    <Provider store={store}>
        <Router history={hist}>
            <Switch>
                {indexRoutes.map((prop, key) => {
                    return (
                        <Route
                            path={prop.path}
                            component={prop.component}
                            key={key}
                        />
                    )
                })}
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
