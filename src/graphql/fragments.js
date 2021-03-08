import {gql} from '@apollo/client';

/* replace query spread with below in graph explorer

... on Issue {}

*/
export const ISSUES_FRAGMENT = gql`
  fragment Issue on nodes {
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
`;
