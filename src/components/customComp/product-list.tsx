import React, { FC } from "react";
import { CategoryTS, ProductTS } from "@/types";
import Categories from "./categories";
import ProductCard from "./product-card";

type Props = { products: ProductTS; title?: boolean; categories: CategoryTS };

const ProductList: FC<Props> = ({ products, title = false, categories }) => {
  return (
    <div>
      {/* <!-- categories --> */}
      <Categories categories={categories} />
      {/* <!-- products --> */}
      <div className="pb-5">
        <h2 className="text-2xl font-semibold text-gray-600">
          Day of the <span className="text-lightBlue">Deal</span>{" "}
        </h2>
        <p className="text-sm font-thin text-gray-500">
          {"Don't"} wait. The time will never be just right.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products?.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
