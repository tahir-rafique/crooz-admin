"use client";
import Button from "@/components/shared/button";
import Input from "@/components/shared/input";
import Image from "next/image";
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
          Forget Your Password
        </h3>
        <p className=" text-lg font-medium leading-normal opacity-[0.7] text-center  ">
          Please enter your email to get new password.
        </p>
      </div>

      <Input
        className={"bg-white w-full"}
        placeholder="Email"
        wrapperClass={"h-[52px] !px-[14px] w-full "}
      />

      <Button
        type="button"
        text={"Submit"}
        className={
          " btn-primary font-semibold text-sm leading-[142%] border border-teal w-full "
        }
        onClick={() => {
          router.push("/verify-code");
        }}
      />
    </div>
  );
};

export default Page;
