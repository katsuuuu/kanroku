import { gql } from "graphql-request";

import { client } from "../index";

export const properties = {
  getProperties: (locale) => {
    const query = gql`
      query Properties($locale: I18NLocaleCode) {
        properties(locale: $locale) {
          data {
            id
            attributes {
              Image
              Title
              Slug
              ButtonText
              publishedAt
              Author {
                Name
                Avatar
              }
              Body
              Link
              PropertyId
              categories {
                data {
                  attributes {
                    Title
                    Slug
                  }
                }
              }
            }
          }
        }
      }
    `;

    return client.request(query, { locale });
  },

  getProperty: (slug, locale) => {
    const query = gql`
      query Property($slug: String, $locale: I18NLocaleCode) {
        properties(filters: { Slug: { eq: $slug } }, locale: $locale) {
          data {
            id
            attributes {
              locale
              Image
              Title
              Slug
              ButtonText
              publishedAt
              Author {
                Name
                Avatar
              }
              Body
              categories {
                data {
                  attributes {
                    Title
                    Slug
                  }
                }
              }
            }
          }
        }
      }
    `;

    return client.request(query, { slug, locale });
  },
};
