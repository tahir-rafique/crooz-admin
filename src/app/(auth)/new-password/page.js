"use client";
import Button from "@/components/shared/button";
import Input from "@/components/shared/input";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const router = useRouter();
  return (
    <div className="h-full flex flex-col items-center  justify-center gap-[50px]">
      <Image
        src={"/assets/logo.svg"}
        height={70}
        width={200}
        className=" "
        alt="logo"
      />

      <div className=" flex flex-col gap-3 ">
        <h3 className="font-bold text-2xl leading-normal text-center">
          Create new password
        </h3>
        <p className=" text-lg font-medium leading-normal opacity-70 text-center ">
          please enter your new password.
        </p>
      </div>

      <form className=" flex flex-col gap-3 w-full">
        <Input
          className={"bg-white"}
          placeholder="New Password"
          type="password"
          icon
          wrapperClass={"h-[52px] !px-[14px] !pr-[30px]"}
        />

        <Input
          className={"bg-white"}
          placeholder="Confirm New Password"
          type="password"
          icon
          wrapperClass={"h-[52px] !px-[14px] !pr-[30px]"}
        />
      </form>

      <Button
        text={"Log In"}
        className={
          " btn-primary font-semibold text-sm leading-[142%] border border-teal w-full"
        }
        onClick={() => router.push("/")}
      />
    </div>
  );
};

export default Page;
