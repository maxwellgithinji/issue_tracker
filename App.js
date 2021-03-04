import React, {PureComponent} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducers from './src/reducers';
import Home from './src/components/Home';

const store = createStore(reducers, applyMiddleware(thunk, logger));

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

export default App;
