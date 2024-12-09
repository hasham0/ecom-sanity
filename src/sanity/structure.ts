import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Ecommerce Application")
    .items([
      S.documentTypeListItem("product").title("Product"),
      S.documentTypeListItem("category").title("Categories"),
      S.documentTypeListItem("sale").title("Sale"),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          !["category", "product", "sale"].includes(item.getId()!),
      ),
    ]);
