import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import RootReducer from './reducers/root-reducer'
import ReduxPromise from 'redux-promise';

import ImageDetail from './containers/image-detail';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

class App extends Component {

  render() {
    return (
      <Provider store={createStoreWithMiddleware(RootReducer)}>
        <div className='app'>
          <ImageDetail/>
        </div>
      </Provider>
    );
  }
}

export default App;
