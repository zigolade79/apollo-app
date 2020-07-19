const Post = require('./models/post');

// Provide resolver functions for the GraphQL schema
const resolvers = {
  /**
   * A GraphQL Query for posts that uses a Post model to query MongoDB
   * and get all Post documents.
   */
  Query: {
    posts: (parent, args) => {
      console.log(`name is ${args.name}`);
      return Post.find({ name: args.name })
    }
  },
  /**
   * A GraphQL Mutation that provides functionality for adding post to
   * the posts list and return post after successfully adding to list
   */
  Mutation: {
    addPost: (parent, post) => {
      console.log(post);
      const newPost = new Post({ name: post.inputOrgs.name, email: post.inputOrgs.email, children: post.inputOrgs.children });
      console.log(newPost);
      return newPost.save();
    }
  }
};

module.exports = resolvers;