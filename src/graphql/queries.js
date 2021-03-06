import gql from 'graphql-tag';
import {Query, Mutation} from 'react-apollo';

export const GQL_GET_ISSUES_BY_TAG_NAME = gql`
  query GetRepositoryIssues(
    $states: [IssueState!]
    $name: String!
    $login: String!
  ) {
    repositoryOwner(login: $login) {
      repository(name: $name) {
        issues(last: 10, states: $states) {
          edges {
            node {
              id
              title
              bodyHTML
              bodyUrl
              publishedAt
              lastEditedAt
              closedAt
              author {
                login
              }
            }
          }
        }
      }
    }
  }
`;
