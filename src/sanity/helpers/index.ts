import { sanityFetch } from "../lib/live";
import { CategoryTS, ProductTS, SaleTS, SingleProductTS } from "@/types";
import {
  SALE_QUERY,
  PRODUCT_QUERY,
  CATEGORIES_QUERY,
  SINGLE_PRODUCT_QUERY_BY_SLUG,
  PRODUCT_SEARCH_QUERY,
  CATEGORY_QUERY_BY_SLUG,
} from "./query";

const getSanitySales = async (): Promise<SaleTS> => {
  try {
    const { data }: { data: SaleTS } = await sanityFetch({
      query: SALE_QUERY,
    });
    return data;
  } catch (error) {
    console.error("🚀 ~ getSale ~ error:", error);
    return null;
  }
};

const getSanityProducts = async (): Promise<ProductTS> => {
  try {
    const { data }: { data: ProductTS } = await sanityFetch({
      query: PRODUCT_QUERY,
    });
    return data;
  } catch (error) {
    console.error("🚀 ~ getProduct ~ error:", error);
    return null;
  }
};

const getSanityCategories = async (): Promise<CategoryTS> => {
  try {
    const { data }: { data: CategoryTS } = await sanityFetch({
      query: CATEGORIES_QUERY,
    });
    return data;
  } catch (error) {
    console.error(
      "🚀 ~ getCategory ~ error:",
      error instanceof Error ? error.message : error,
    );

    return null;
  }
};

const getSanitySingleProductBySlug = async (
  slug: string,
): Promise<SingleProductTS> => {
  try {
    const { data }: { data: SingleProductTS } = await sanityFetch({
      query: SINGLE_PRODUCT_QUERY_BY_SLUG,
      params: {
        slug,
      },
    });
    return data;
  } catch (error) {
    console.error("🚀 ~ error:", error);
    return null;
  }
};
const getSanityProductBySearch = async (
  searchParams: string,
): Promise<ProductTS> => {
  try {
    const { data }: { data: ProductTS } = await sanityFetch({
      query: PRODUCT_SEARCH_QUERY,
      params: {
        searchParams: searchParams,
      },
    });
    return data;
  } catch (error) {
    console.error("🚀 ~ error:", error);
    return null;
  }
};

const getSanityProductsByCateory = async (slug: string): Promise<ProductTS> => {
  try {
    const { data }: { data: ProductTS } = await sanityFetch({
      query: CATEGORY_QUERY_BY_SLUG,
      params: {
        slug,
      },
    });
    return data;
  } catch (error) {
    console.error("🚀 ~ error:", error);
    return null;
  }
};

export {
  getSanitySales,
  getSanityProducts,
  getSanityCategories,
  getSanitySingleProductBySlug,
  getSanityProductBySearch,
  getSanityProductsByCateory,
};
