import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Input from "../shared/input";
import Button from "../shared/button";

export default function GeneralSettings() {
  return (
    <div className=" border border-lightGray rounded-secondary h-full py-8 px-6 bg-white flex gap-10 max-w-[1000px]">
      <div className="w-fit h-fit relative">
        <Image
          src={"/assets/icons/person-avtar.svg"}
          width={120}
          height={120}
          alt={"user-profile-image"}
        />
        <Icon
          icon="ri:pencil-line"
          width="40"
          height="40"
          className=" bg-[#C240CC] text-white rounded-full p-2 border border-white absolute right-1 -bottom-2 cursor-pointer"
        />
      </div>

      <div className=" grid grid-cols-2 gap-10 w-full">
        <Input
          label="Full Name"
          labelClass=" !font-normal"
          className={"w-full"}
          wrapperClass={"!rounded-primary "}
          placeholder="Charlene Reed "
        />

        <Input
          label="Email"
          labelClass=" !font-normal"
          className={"w-full"}
          wrapperClass={"!rounded-primary "}
          placeholder="charlenereed@gmail.com "
        />

        {/* -----------     date    ------------ */}
        <Input
          label="Date of Birth"
          labelClass=" !font-normal"
          className={"w-full"}
          wrapperClass={"!rounded-primary "}
          inputClass={" !border !border-lightGray !rounded-primary !bg-white"}
          placeholder="25 January 1990 "
          type="date"
          disabled
        />

        <Input
          label="Permanent Address"
          labelClass=" !font-normal"
          className={"w-full"}
          wrapperClass={"!rounded-primary  "}
          placeholder="San Jose, California, USA "
        />

        <Input
          label="Postal Code"
          labelClass=" !font-normal"
          className={"w-full"}
          wrapperClass={"!rounded-primary "}
          placeholder="45962 "
        />

        <Input
          label="Country"
          labelClass=" !font-normal"
          className={"w-full"}
          wrapperClass={"!rounded-primary "}
          placeholder="USA"
        />
        <div className=" col-span-2 flex justify-end items-end ">
          <Button
            className="btn-secondary w-full max-w-[150px]"
            text="Save Profile"
          />
        </div>
      </div>
    </div>
  );
}
