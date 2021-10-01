const resolvers = {
  Mutation: {
    addBlog: (root, args) => {
      console.log("BLOG", args);
    },
  },
};

module.exports = resolvers;
