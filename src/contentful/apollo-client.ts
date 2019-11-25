import ApolloClient from "apollo-client";
// import { ApolloProvider } from "react-apollo";
import {
  InMemoryCache,
  IntrospectionFragmentMatcher
} from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import { ApolloLink } from "apollo-link";
import { contentfulConfig } from "./settings";
import introspectionQueryResultData from "./fragmentTypes.json";

// const {
//   REACT_APP_SPACE_ID: SPACE_ID,
//   REACT_APP_ACCESS_TOKEN: ACCESS_TOKEN
// } = process.env;
const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData
} as any);

export const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }: any) => {
      if (graphQLErrors) {
        graphQLErrors.map(({ message, locations, path }: any) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          )
        );
      }
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    new HttpLink({
      uri: `https://graphql.contentful.com/content/v1/spaces/${contentfulConfig.space}`,
      credentials: "same-origin",
      headers: {
        Authorization: `Bearer ${contentfulConfig.accessToken}`
      }
    })
  ]),
  cache: new InMemoryCache({ fragmentMatcher })
});

// ReactDOM.render((
//   <ApolloProvider client={client}>
//     // ...
//   </ApolloProvider>
// ),
// document.getElementById('root')
// )
