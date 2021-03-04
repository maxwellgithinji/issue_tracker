import React, {Fragment} from 'react';

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
