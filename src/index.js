const { ApolloServer } = require('apollo-server');
const { RedisCache } = require('apollo-server-cache-redis');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

let numSubscription = 0;
const server = new ApolloServer({
  typeDefs,
  resolvers,
  subscriptions: {
    onConnect: (connectionParams, webSocket) => {
      numSubscription += 1;
      console.log(`Number of active WebSocket connections: ${numSubscription}`);
      //console.table(JSON.stringify(connectionParams));
      //console.table(JSON.stringify(webSocket));
      console.log("+++++==================================+++++");
    },
  },
  cache: new RedisCache({
    host: 'localhost',
  }),
});

server.listen().then(({ url }) => {
  console.table(`🚀 Server ready at ${url}`);
})
