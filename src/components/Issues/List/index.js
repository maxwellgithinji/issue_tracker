import {connect} from 'react-redux';
import {graphql} from 'react-apollo';
import IssueLIstComponent from './component';
import {GQL_GET_ISSUES_BY_TAG_NAME} from '../../../graphql/queries';
import {getIssuesParams} from '../../../actions';

function mapStateToProps(state) {
  return {
    states: state.issuesParams.issuesParams.states,
    name: state.issuesParams.issuesParams.name,
    login: state.issuesParams.issuesParams.login,
  };
}

const connectRedux = connect(mapStateToProps, {getIssuesParams});
// Apollo
const query = GQL_GET_ISSUES_BY_TAG_NAME;

function mapOwnPropsToOptions(ownProps) {
  return {
    variables: {
      states: ownProps.states,
      name: ownProps.name,
      login: ownProps.login,
    },
  };
}
function mapQueryResultToContainedProps(opts) {
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
const connectApollo = graphql(query, {
  options: mapOwnPropsToOptions,
  props: mapQueryResultToContainedProps,
});
export default connectRedux(connectApollo(IssueLIstComponent));
