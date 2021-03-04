import React, {Fragment} from 'react';
import {connect} from 'react-redux';

import {getIssues} from '../../../actions';
import {View, Text} from 'react-native';

class IssuesList extends React.Component {
  componentDidMount() {
    this.props.getIssues();
  }

  issuesList = () => {
    const {issues} = this.props;
    return issues.map((issue) => {
      return (
        <Fragment key={issue.id}>
          <Text>{issue.name}</Text>
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

const mapStateToProps = (state) => {
  return {
    issues: state.issues.issues,
    loading: state.issues.loading,
  };
};

export default connect(mapStateToProps, {getIssues})(IssuesList);
