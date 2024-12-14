import { Product } from "@/sanity/sanity.types";
import React, { FC } from "react";
import { Button } from "../ui/button";
import { HiMinus, HiPlus } from "react-icons/hi2";
import toast from "react-hot-toast";
import { useCartStore } from "@/zustand/hook/useCartStore";

type Props = {
  product: Product;
  className?: string;
};

const QuantityButton: FC<Props> = ({ product, className }) => {
  const { getItemCount, removeItem, addItem } = useCartStore((state) => state);
  const itmeCount = getItemCount(product._id);
  const isOutOfStock = product.stock === 0;

  const handleQuantity = (type: "DEC" | "INC") => {
    switch (type) {
      case "INC":
        addItem(product);
        toast.success("quantity increase successfully");
        break;
      case "DEC":
        removeItem(product._id);
        toast.success("quantity dec");
        break;
      default:
        break;
    }
  };

  // console.log("🚀 ~ itmeCount:", itmeCount);
  return (
    <div className="flex items-center justify-between gap-x-2 pb-1 text-base">
      <Button
        onClick={() => handleQuantity("DEC")}
        variant={"outline"}
        size={"icon"}
        className="size-6"
        disabled={product.stock === 0}
      >
        <HiMinus />
      </Button>
      <span className="w- text-center font-semibold text-darkBlue">
        {itmeCount}
      </span>
      <Button
        onClick={() => handleQuantity("INC")}
        variant={"outline"}
        size={"icon"}
        className="size-6"
      >
        <HiPlus />
      </Button>
    </div>
  );
};

export default QuantityButton;
