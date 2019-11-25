import gql from "graphql-tag";

// TODO: reference type defs from graphql apollo
export const typeDefs = gql`
  type InfoMessage {
    id: ID!
    text: String!
    eventType: String!
    index: Int!
  }

  type ReadingMessage {
    id: ID!
    label: String!
    value: Float!
    unit: String!
    eventType: String!
    index: Int!
  }
`;

const getBlogCollection = gql`
  query($preview: Boolean) {
    blogCollection(preview: $preview) {
      items {
        title
      }
    }
  }
`;

export const resolvers = {
  Blogs: {
    martchesBlog: (blog: any, _: any, { cache }: any) => {
      const { items } = cache.readQuery({ query: getBlogCollection });
      return items.includes(blog.id);
    }
  }
  // Mutation: {
  //   addOrRemoveFromCart: (_, { id }, { cache }) => {
  //     const { cartItems } = cache.readQuery({ query: GET_CART_ITEMS });
  //     const data = {
  //       cartItems: cartItems.includes(id)
  //         ? cartItems.filter(i => i !== id)
  //         : [...cartItems, id]
  //     };
  //     cache.writeQuery({ query: GET_CART_ITEMS, data });
  //     return data.cartItems;
  //   }
  // }
};
