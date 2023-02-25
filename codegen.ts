import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://rickandmortyapi.com/graphql',
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
