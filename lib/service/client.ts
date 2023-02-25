import { GraphQLClient } from "graphql-request";

export const gqlClient = new GraphQLClient(
  process.env.GRAPHQL_URL!,
  { fetch }
);