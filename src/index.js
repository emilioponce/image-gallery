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

//@TODO logger and freeze middlewares only in DEV environment
const createStoreWithMiddleware = applyMiddleware(thunk, freeze, logger)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(RootReducer)}>
      <App />
  </Provider>,
  document.getElementById('root')
);
