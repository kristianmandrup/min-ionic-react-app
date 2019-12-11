import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import gql from "graphql-tag";
import { typeDefs, resolvers } from "./resolvers";

import { contentfulConfig } from "./settings";

const contentFulGraphQl = ({
  space,
  environment
}: {
  space?: string;
  environment?: string;
} = {}) => ({
  uri: `https://graphql.contentful.com/content/v1/spaces/${space ||
    contentfulConfig.space}/environments/${environment ||
    contentfulConfig.environment}`,
  headers: {
    authorization: contentfulConfig.accessToken,
    "client-name": "E-ON [web]",
    "client-version": "1.0.0"
  }
});

const cache = new InMemoryCache();
export const apolloClient = new ApolloClient({
  cache,
  link: new HttpLink({
    ...contentFulGraphQl
  }),
  resolvers,
  typeDefs
});

cache.writeData({
  data: {
    isLoggedIn: !!localStorage.getItem("token"),
    cartItems: []
  }
});

export const blogCollection = gql`
  query($preview: Boolean) {
    blogCollection(preview: $preview) {
      items {
        title
      }
    }
  }
`;
