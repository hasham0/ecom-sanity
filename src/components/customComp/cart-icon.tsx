"use client";

import Link from "next/link";
import { ShoppingBagIcon } from "lucide-react";
import React, { FC, useEffect, useState } from "react";

type Props = {};

const CartIcon: FC<Props> = ({}) => {
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <Link
      href={"/cart"}
      className="hoverEffect flex items-center gap-2 rounded-md border border-gray-200 px-2 py-1 text-sm shadow-md hover:shadow-none"
    >
      <ShoppingBagIcon className="size-6 text-darkBlue" />
      <div className="flex flex-col">
        <p className="text-xs">
          <span className="font-semibold">0</span> items
        </p>
        <p className="font-semibold">Cart</p>
      </div>
    </Link>
  );
};

export default CartIcon;
