const { ApolloServer } = require("apollo-server");
const resolvers = require("./src/resolvers");
const typeDefs = require("./src/typeDefs");

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

server.listen().then(({ url, subscriptionsUrl }) => {
  console.log(`⚡ Server ready at ${url}`);
  console.log(`⚡ Subscriptions ready at ${subscriptionsUrl}`);
});
