import gql from 'graphql-tag';

// import {ISSUES_FRAGMENT} from './fragments';

export const GQL_GET_ISSUES = gql`
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
              number
              title
              bodyHTML
              bodyUrl
              publishedAt
              lastEditedAt
              closedAt
              author {
                login
              }
              state
              comments {
                totalCount
              }
            }
          }
        }
      }
    }
  }
`;

export const GQL_SEARCH_ISSUES_BY_TITLE_OR_BODY = gql`
  query SearchIssues($term: String!) {
    search(query: $term, type: ISSUE, last: 10) {
      nodes {
        ... on Issue {
          id
          number
          title
          bodyHTML
          bodyUrl
          publishedAt
          lastEditedAt
          closedAt
          author {
            login
          }
          comments {
            totalCount
          }
        }
      }
    }
  }
`;
