import Image from "next/image";
import React, { FC } from "react";
import { Copyright } from "lucide-react";
import Container from "@/components/customComp/container";

type Props = {};

const Footer: FC<Props> = ({}) => {
  return (
    <div className="flex items-center p-2">
      <Container className="flex justify-between gap-1 py-5">
        <p className="flex gap-3 capitalize text-gray-500">
          Copyright <Copyright /> 2024{" "}
          <span className="font-semibold text-darkBlue">reactBD</span> all right
          reserved
        </p>
        <Image
          src={"/assets/payment.png"}
          alt="payment"
          className="object-cover"
          width={400}
          height={400}
          priority
        />
      </Container>
    </div>
  );
};

export default Footer;
