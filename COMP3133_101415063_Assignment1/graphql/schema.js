const { GraphQLSchema } = require("graphql");
const RootQuery = require("./queries");
const Mutation = require("./mutations");

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
