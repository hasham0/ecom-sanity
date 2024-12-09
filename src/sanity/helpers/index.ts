import { sanityFetch } from "../lib/live";
import { CategoryTS, ProductTS, SaleTS } from "@/types";
import { SALE_QUERY, PRODUCT_QUERY, CATEGORIES_QUERY } from "./query";

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
    console.log("🚀 ~ getCateory ~ error:", error);
    return null;
  }
};

export { getSanitySales, getSanityProducts, getSanityCategories };
