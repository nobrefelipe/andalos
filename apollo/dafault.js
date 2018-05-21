
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

// project's endpoint
const GRAPHCMS_API = 'https://api.graphcms.com/simple/v1/cjhab0h8680do0183kwbxt71r';

const httpLink = new HttpLink({

  // URL to graphql server
  uri: GRAPHCMS_API

});

// create and export the apollo client
export default () => ({

  link: httpLink,

  cache: new InMemoryCache(),
  ssrMode: true

});