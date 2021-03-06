import React, {Fragment} from 'react';
import {View, Text} from 'react-native';

class IssuesList extends React.Component {
  componentDidMount() {
    this.props.getIssuesParams({
      name: 'react',
      login: 'facebook',
      states: ['OPEN', 'CLOSED'],
    });
  }
  issuesList = () => {
    const {issues} = this.props;
    return issues.map((issue) => {
      const {node} = issue;
      return (
        <Fragment key={node.id}>
          <Text>{node.title}</Text>
        </Fragment>
      );
    });
  };

  issueLoader = () => {
    return (
      <View>
        <Text>Loading...........</Text>
      </View>
    );
  };

  render() {
    const {loading} = this.props;
    return (
      <Fragment>{loading ? this.issueLoader() : this.issuesList()}</Fragment>
    );
  }
}

export default IssuesList;
