const resolvers = {
  Mutation: {
    addBlog: (root, args) => {
      console.log("BLOG", args);
    },
  },
  Query: {
    blogs: () => {
      return [];
    },
  },
};

module.exports = resolvers;
