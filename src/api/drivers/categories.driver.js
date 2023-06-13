import { gql } from "graphql-request";

import { client } from "../index";

export const categories = {
  getCategories: () => {
    const query = gql`
      query categoryQuery {
        categories {
          data {
            attributes {
              Title
              Slug
            }
          }
        }
      }
    `;

    return client.request(query);
  },
};
