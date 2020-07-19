const { gql } = require('apollo-server-express');

// Construct a schema using GraphQL schema language
const typeDefs = gql`
  type Post {
    _id: String,
    name: String,
    email: String,
    children: [Post]
  },
  type Query {
    posts(name:String): [Post]
  },
  input Org {
    name: String,
    email: String,
    children: [Org]
  },
  type Mutation {
    addPost(inputOrgs: Org): Post,
  }
`;

module.exports = typeDefs;
