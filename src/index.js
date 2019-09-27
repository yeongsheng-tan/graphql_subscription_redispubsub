const { ApolloServer } = require('apollo-server');
const { RedisCache } = require('apollo-server-cache-redis');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

let numWSConnections = 0;
const server = new ApolloServer({
  typeDefs,
  resolvers,
  subscriptions: {
    onConnect: (connectionParams, webSocket) => {
      numWSConnections += 1;
      console.table(numWSConnections);
    },
  },
  cache: new RedisCache({
    host: 'localhost',
  }),
});

server.listen().then(({ url }) => {
  console.table(`🚀 Server ready at ${url}`);
})
