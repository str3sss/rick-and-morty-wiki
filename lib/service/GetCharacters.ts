import { graphql } from "../gql";

export const GET_CHARACTERS = graphql(`
  characters(page: $Int) {
    info {
      count
      pages
      next
    }
    results {
      id
      name
      status
      species
      type
      origin {
        name
      }
      gender
      image
      created
      __typename
    }
  }
`)