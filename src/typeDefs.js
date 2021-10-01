const { gql } = require("apollo-server");

const typeDefs = gql`
  type Blog {
    id: ID
    title: String
    short_desc: String
    full_blog: String
    author: Author
    cover_image: String
    tags: [String]
    view_count: Int
    likes_count: Int
    comment_count: Int
    comments: [Comment]
    slug: String
    reading_time: Int
  }

  type Comment {
    id: ID
    text: String
  }

  type Author {
    name: String
    username: String
    profile_image: String
    total_followers: Int
    total_blog_count: Int
  }

  type Query {
    blogs: [Blog]
  }

  type Mutation {
    addBlog(
      title: String
      short_desc: String
      full_blog: String
      author: String
      cover_image: String
      tags: [String]
    ): Blog
  }
`;

module.exports = typeDefs;
