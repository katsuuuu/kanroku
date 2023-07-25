import { gql } from "graphql-request";

import { client } from "../index";

export const properties = {
  getProperties: () => {
    const query = gql`
      query Properties {
        properties {
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

    return client.request(query);
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

    return client.request(query, { slug, locale });
  },

  getPropertyId: (slug, locale) => {
    const query = gql`
      query Property($slug: String, $locale: I18NLocaleCode) {
        properties(filters: { Slug: { eq: $slug } }, locale: $locale) {
          data {
            attributes {
              PropertyId
            }
          }
        }
      }
    `;

    return client.request(query, { slug, locale });
  },

  getPropertiesById: (id, locale) => {
    const query = gql`
      query Property($id: String, $locale: I18NLocaleCode) {
        properties(filters: { PropertyId: { eq: $id } }, locale: $locale) {
          data {
            attributes {
              locale
              Slug
              PropertyId
            }
          }
        }
      }
    `;

    return client.request(query, { id, locale });
  },
};
