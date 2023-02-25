import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      [process.env.NEXT_PUBLIC_GRAPHQL_URL!]: {
        headers: {
          // If you have an admin secret set
        },
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
