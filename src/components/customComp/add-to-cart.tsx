"use client";

import { Product } from "@/sanity/sanity.types";
import React, { FC, useEffect, useState } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import toast, { Toaster } from "react-hot-toast";
import QuantityButton from "./quantity-button";
import PriceFormatter from "./price-formatter";

type Props = {
  product: Product;
  className?: string;
};

const AddToCartButton: FC<Props> = ({ product, className }) => {
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => setIsClient(true), []);

  if (!isClient) return null;

  const handleAddToCart = () => {
    toast.success("product added");
  };

  const itemCount = 0;

  return (
    <div className="">
      {itemCount ? (
        <div className="flex flex-col gap-2 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Quantity</span>
            <QuantityButton product={product} />
          </div>
          <div className="flex items-center justify-between">
            <span>Subtotal</span>
            <PriceFormatter
              amount={product.price ? product.price * itemCount : 0}
            />
          </div>
        </div>
      ) : (
        <Button
          disabled={product.stock === 0}
          onClick={handleAddToCart}
          className={cn(
            "hoverEffect mt-2 w-full rounded-md border border-darkBlue bg-darkBlue/10 py-2 font-medium text-black hover:bg-darkBlue hover:text-white disabled:cursor-not-allowed disabled:border-darkBlue/10 disabled:bg-darkBlue/10 disabled:text-gray-400",
            className,
          )}
        >
          Add To Cart
        </Button>
      )}
    </div>
  );
};

export default AddToCartButton;
