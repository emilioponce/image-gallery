import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware } from 'redux';
import ReactDOM from 'react-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import Paginator from '../paginator';

//@TODO configure mockStore
const logger = createLogger();
const mockStore = configureMockStore(applyMiddleware(thunk, logger));

describe('Paginator container', () => {

  it.skip('Paginator Renders OK', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={mockStore}><Paginator /></Provider>, div);
  });

})
