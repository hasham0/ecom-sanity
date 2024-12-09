import { CategoryTS } from "@/types";
import React, { FC } from "react";

type Props = { categories: CategoryTS };

const Categories: FC<Props> = ({ categories }) => {
  return <div>Categories</div>;
};

export default Categories;
