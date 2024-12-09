import { defineQuery } from "next-sanity";

const sanityQueries = {
  SALE_QUERY: defineQuery(`*[_type == "sale"] | order(name asc)`),
  PRODUCT_QUERY: defineQuery(`*[_type == "product"] | order(name asc)`),
  CATEGORIES_QUERY: defineQuery(`*[_type == "category"] | order(name asc)`),
};

export const { SALE_QUERY, PRODUCT_QUERY, CATEGORIES_QUERY } = sanityQueries;
