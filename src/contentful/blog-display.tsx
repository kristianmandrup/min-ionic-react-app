import React from "react";
import { ApolloProvider, useQuery } from "@apollo/react-hooks";
import { apolloClient, blogCollection } from "./graphql-api";

export const BlogList = ({ blogs }: any = {}) =>
  blogs.map((blog: any) => <h2>{blog.title}</h2>);

export const Blogs = () => {
  const { loading, data } = useQuery(blogCollection, {});
  return (
    <ApolloProvider client={apolloClient}>
      <div>
        <h1>Last Launch</h1>
        {loading ? <p>Loading</p> : <BlogList blogs={data.items} />}
      </div>
    </ApolloProvider>
  );
};
