import {connect} from 'react-redux';
import {graphql, withApollo} from 'react-apollo';
import {compose} from 'redux';
import IssueLIstComponent from './component';
import {
  GQL_GET_ISSUES,
  GQL_SEARCH_ISSUES_BY_TITLE_OR_BODY,
} from '../../../graphql/queries';
import {getIssuesParams, searchIssues} from '../../../actions';

function mapStateToProps(state) {
  return {
    searchParams: state.searchParams,
    issuesParams: state.issuesParams,
  };
}

const connectRedux = connect(mapStateToProps, {getIssuesParams, searchIssues});
// Graph queries
const getIssuesQuery = GQL_GET_ISSUES;
const searchIssuesQuery = GQL_SEARCH_ISSUES_BY_TITLE_OR_BODY;

// Get Issues
function mapOwnIssuePropsToOptions(ownProps) {
  const {states, name, login} = ownProps.issuesParams.issuesParams;
  return {
    variables: {
      states,
      name,
      login,
    },
  };
}
function mapQueryIssuesResultToContainedProps(opts) {
  if (
    !opts.data ||
    opts.data.loading ||
    !opts.data.repositoryOwner.repository.issues.edges
  ) {
    return {
      issues: [],
    };
  }
  return {
    issues: opts.data.repositoryOwner.repository.issues.edges,
  };
}

// Search Issues
function mapOwnSearchIssuePropsToOptions(ownProps) {
  const {term} = ownProps.searchParams.searchParams;
  return {
    variables: {
      term,
    },
  };
}
function mapQuerySearchIssuesResultToContainedProps(opts) {
  if (!opts.data || opts.data.loading || !opts.data) {
    return {
      searchResults: [],
    };
  }
  return {
    searchResults: opts.data,
  };
}

const connectGetIssues = graphql(getIssuesQuery, {
  options: mapOwnIssuePropsToOptions,
  props: mapQueryIssuesResultToContainedProps,
});

const connectSearchIssues = graphql(searchIssuesQuery, {
  options: mapOwnSearchIssuePropsToOptions,
  props: mapQuerySearchIssuesResultToContainedProps,
  fetchPolicy: 'no-cache',
});
console.log(connectSearchIssues);

export default connectRedux(
  compose(
    withApollo,
    connectGetIssues,
    // connectSearchIssues,
  )(IssueLIstComponent),
);
