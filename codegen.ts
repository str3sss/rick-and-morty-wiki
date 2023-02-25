import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      [process.env.GRAPHQL_URL!]: {
      },
    },
  ],
  config: {
    skipTypename: true,
    enumsAsTypes: true,
    scalars: {
      numeric: "number",
    },
  },
  documents: "lib/service/queries.graphql",
  generates: {
    "lib/gql/": {
      preset: "client",
      config: {},
      plugins: [],
    },
  },
};

export default config;
