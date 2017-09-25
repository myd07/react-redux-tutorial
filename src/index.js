// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import App from './components/App.js';
// import ReactDOM from 'react-dom';
// import './index.css';

// ReactDOM.render(<App />, document.getElementById('root'));

import {createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux'
import rootReducer from './reducers/main';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './App.css';
import ReduxPromise from 'redux-promise'

var store = createStore(rootReducer, applyMiddleware(ReduxPromise));

// var store = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
   <Provider store={store}>
       <App />
   </Provider>,
  document.getElementById('root')
);