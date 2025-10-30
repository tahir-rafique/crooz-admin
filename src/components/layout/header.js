import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <div className="py-5  flex justify-between items-center">
      <h3 className="text-xl lg:text-2xl font-bold leading-[125%] tracking-[-0.72px]">
        Welcome back, Olivia!{" "}
      </h3>

      <div className=" flex items-center gap-5">
        <Icon
          icon="mi:settings"
          width="30"
          height="30"
          className=" text-gray-400"
        />
        <Icon
          icon="ph:bell"
          width="30"
          height="30"
          className=" text-gray-400"
        />
        <Image
          src={"/assets/icons/person-avtar.svg"}
          height={40}
          width={40}
          alt="peron-avtar"
        />
      </div>
    </div>
  );
}
