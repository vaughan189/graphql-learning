const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const resolvers = require("./graphql");
const typeDefs = require("./graphql/schema/schema");
const ErgastAPI = require('./graphql/datasources/datasources');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({ ergastAPI: new ErgastAPI()})
});

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 8000 }, () =>
  console.log(`🚀 Server ready at http://localhost:8000${server.graphqlPath}`)
);