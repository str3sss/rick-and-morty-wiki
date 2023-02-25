import { GraphQLClient } from "graphql-request";

export const gqlClient = new GraphQLClient(
  'https://rickandmortyapi.com/graphql',
  { fetch }
);