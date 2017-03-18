import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import RootReducer from './reducers/root-reducer'
import ReduxPromise from 'redux-promise';
import App from './App';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(RootReducer)}>
      <App />
  </Provider>,
  document.getElementById('root')
);
