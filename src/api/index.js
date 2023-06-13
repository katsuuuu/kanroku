import { GraphQLClient } from "graphql-request";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

export const client = new GraphQLClient(API_URL, {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

import { properties } from "./drivers/properties.driver";
import { categories } from "./drivers/categories.driver";

export const Api = {
  properties,
  categories,
};
