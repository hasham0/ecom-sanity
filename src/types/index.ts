import { Sale, Product, Category } from "@/sanity/sanity.types";

type SaleTS = Sale[] | null;
type ProductTS = Product[] | null;
type CategoryTS = Category[] | null;

export type { SaleTS, ProductTS, CategoryTS };
