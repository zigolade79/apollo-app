import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

export const GET_POSTS = gql`
  query Post($name:String){
    posts(name:$name) {
      _id
      name
      email
      children{
        name
      }
    }
  }
`;

const withPosts = Component => props => {
  return (
    <Query query={GET_POSTS} variables={{ name: "root" }} >
      {({ loading, data }) => {
        return (
          <Component postsLoading={loading} posts={data && data.posts} {...props} />
        );
      }}
    </Query >
  );
};

export default withPosts;