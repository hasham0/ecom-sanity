"use client";

import Link from "next/link";
import React, { FC } from "react";
import { ShoppingBasket } from "lucide-react";

type Props = {};

const OrdersIcon: FC<Props> = ({}) => {
  return (
    <Link
      href={"/orders"}
      className="hoverEffect flex items-center gap-2 rounded-md border border-gray-200 px-2 py-1 text-sm shadow-md hover:shadow-none"
    >
      <ShoppingBasket className="size-6 text-darkBlue" />
      <div className="flex flex-col">
        <p className="text-xs">
          <span className="font-semibold">0</span> items
        </p>
        <p className="font-semibold">Order</p>
      </div>
    </Link>
  );
};

export default OrdersIcon;