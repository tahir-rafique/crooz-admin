"use client";
import Button from "@/components/shared/button";
import Input from "@/components/shared/input";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
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
          Welcome Back
        </h3>
        <p className=" text-lg font-medium leading-normal opacity-70 text-center ">
          Login to your federal sales assistant dashboard.
        </p>
      </div>

      <form className=" flex flex-col gap-[25px] sm:gap-[40px] lg:gap-[70px] w-full">
        <div className=" flex flex-col gap-3">
          <Input
            className={"bg-white"}
            placeholder="Email"
            wrapperClass={"h-[52px] !px-[14px] "}
          />

          <div>
            <Input
              className={"bg-white"}
              placeholder="Password"
              type="password"
              icon
              wrapperClass={"h-[52px] !px-[14px] !pr-[30px]"}
            />

            <div className=" mt-2  flex justify-between items-center ">
              <label className="relative flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="peer appearance-none w-4 h-4 border border-purple rounded-sm checked:bg-white"
                />
                <span className="ml-2 text-purple text-xs font-medium leading-normal select-none">
                  Remember me
                </span>

                <Icon
                  icon="hugeicons:tick-01"
                  width="24"
                  height="24"
                  className="absolute left-0 top-[-2px] w-5 h-5 text-black opacity-0 peer-checked:opacity-100 transition-opacity duration-200"
                />
              </label>
              <Link
                href={"/forget-password"}
                className="text-xs font-medium leading-normal  opacity-[0.7] underline"
              >
                Forget Password{" "}
              </Link>
            </div>
          </div>
        </div>

        <Button
          text={"Sign In"}
          className={
            " btn-primary font-semibold text-sm leading-[142%] border border-teal "
          }
        />
      </form>
    </div>
  );
};

export default Page;
