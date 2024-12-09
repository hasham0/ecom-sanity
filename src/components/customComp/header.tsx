import Form from "next/form";
import Link from "next/link";
import Image from "next/image";
import React, { FC } from "react";
import { User } from "lucide-react";
import OrdersIcon from "./orders-icon";
import { currentUser } from "@clerk/nextjs/server";
import Container from "@/components/customComp/container";
import CartIcon from "@/components/customComp/cart-icon";
import { ClerkLoaded, SignedIn, SignInButton, UserButton } from "@clerk/nextjs";

type Props = {};

const Header: FC<Props> = async ({}) => {
  const user = await currentUser();
  return (
    <header className="w-full border-b border-b-gray-400 bg-white py-4">
      <Container className="flex items-center justify-between gap-5">
        {/* <!-- logo --> */}
        <Link href={"/"}>
          <Image
            src={"/assets/logo.png"}
            alt="logo"
            width={150}
            height={100}
            className="w-24"
            priority
          />
        </Link>
        {/* <!-- search bar --> */}
        <Form action={"/search"} className="flex-1">
          <input
            type="text"
            name="query"
            placeholder="Search for products..."
            className="w-full rounded-md border border-gray-200 px-4 py-2.5 outline-none focus-visible:border-darkBlue"
          />
        </Form>
        {/* <!-- tabs --> */}
        <div className="flex items-center gap-5">
          <CartIcon />
          <ClerkLoaded>
            <SignedIn>
              <OrdersIcon />
            </SignedIn>
            {user ? (
              <div className="flex w-full gap-2 rounded-md border border-gray-200 px-2 py-2.5 outline-none">
                <UserButton />
                <div className="flex flex-col">
                  <p className="text-xs">Welcome Back</p>
                  <p className="font-semibold">{user?.fullName}</p>
                </div>
              </div>
            ) : (
              <SignInButton mode="modal">
                <div className="hoverEffect flex items-center gap-2 rounded-md border border-gray-200 px-2 py-1 text-sm shadow-md hover:shadow-none">
                  <User className="size-6 text-darkBlue" />
                  <div className="flex flex-col">
                    <p className="text-xs">Account</p>
                    <p className="font-semibold">Login</p>
                  </div>
                </div>
              </SignInButton>
            )}
          </ClerkLoaded>
        </div>
      </Container>
    </header>
  );
};

export default Header;
