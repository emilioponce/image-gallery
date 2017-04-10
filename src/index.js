import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import RootReducer from './reducers/root-reducer';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import freeze from 'redux-freeze';

import App from './App';

const logger = createLogger();

function getMiddlewaresStore() {
  let environment = process.env.NODE_ENV ;
  const prodMiddlewaresStore = applyMiddleware(thunk)(createStore);;
  const devMiddlewaresStore = applyMiddleware(thunk, freeze, logger)(createStore);;
  return (environment === 'production') ? prodMiddlewaresStore : devMiddlewaresStore;
}

let createStoreWithMiddleware = getMiddlewaresStore();

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(RootReducer)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
