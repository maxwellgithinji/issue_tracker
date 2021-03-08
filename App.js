import React, {PureComponent} from 'react';
import {Provider} from 'react-redux';
import {ApolloProvider} from 'react-apollo';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {MenuProvider} from 'react-native-popup-menu';

import client from './src/graphql/client';
import reducers from './src/reducers';
import Home from './src/components/Home';

const store = createStore(reducers, applyMiddleware(thunk, logger));

class App extends PureComponent {
  render() {
    return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <MenuProvider>
            <Home />
          </MenuProvider>
        </Provider>
      </ApolloProvider>
    );
  }
}

export default App;
