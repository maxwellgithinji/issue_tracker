import React, {Fragment} from 'react';

import IssuesList from '../Issues/List';
import {Header} from 'react-native-elements';

class Home extends React.Component {
  render() {
    return (
      <Fragment>
        <Header
          // leftComponent={{icon: 'menu', color: '#fff'}}
          centerComponent={{text: 'Issue Tracker', style: {color: '#fff'}}}
          // rightComponent={{icon: 'home', color: '#fff'}}
        />
        <IssuesList />
      </Fragment>
    );
  }
}

export default Home;
