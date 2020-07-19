const { Schema, model } = require('mongoose');

const postSchema = new Schema({
  name: String,
  email: String,
  children: ['Post']
});

const Post = model('post', postSchema);

module.exports = Post;
