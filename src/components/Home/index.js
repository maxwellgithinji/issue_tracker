import React, {Fragment} from 'react';
import {Text} from 'react-native';

import IssuesList from '../Issues/List';

class Home extends React.Component {
  render() {
    return (
      <Fragment>
        <IssuesList />
      </Fragment>
    );
  }
}

export default Home;
