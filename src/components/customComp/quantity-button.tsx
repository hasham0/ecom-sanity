import { Product } from "@/sanity/sanity.types";
import React, { FC } from "react";
import { Button } from "../ui/button";
import { HiMinus, HiPlus } from "react-icons/hi2";
import toast from "react-hot-toast";

type Props = {
  product: Product;
  className?: string;
};

const QuantityButton: FC<Props> = ({ product, className }) => {
  const itmeCount = 5;

  const handleQuantity = (type: "DEC" | "INC") => {
    switch (type) {
      case "INC":
        toast.success("quantity inc");
        break;
      case "DEC":
        toast.success("quantity dec");
        break;
      default:
        break;
    }
  };
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
