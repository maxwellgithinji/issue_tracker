import {ApolloClient} from 'apollo-client';
import {HttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';

import {GITHUB_BASE_URL, GITHUB_PERSONAL_ACCESS_TOKEN} from '@env';

const cache = new InMemoryCache();

const httpLink = new HttpLink({
  uri: GITHUB_BASE_URL,
  headers: {
    authorization: `Bearer ${GITHUB_PERSONAL_ACCESS_TOKEN}`,
  },
});

const client = new ApolloClient({
  link: httpLink,
  cache,
});

export default client;
