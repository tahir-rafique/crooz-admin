"use client";
import React, { useState } from "react";
import Button from "@/components/shared/button";
import Input from "@/components/shared/input";
import Image from "next/image";
import { useRouter } from "next/navigation";
import OtpInput from "react-otp-input";

const Page = () => {
  const router = useRouter();
  const [otp, setOtp] = useState("");
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
          Verify Code
        </h3>
        <p className=" text-lg font-medium leading-normal opacity-[0.7] text-center  ">
          Please enter the code sended to your email.
        </p>
      </div>

      <div className=" flex justify-center w-full ">
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          // renderSeparator={<span>-</span>}
          renderInput={(props) => (
            <input
              {...props}
              className=" !h-10 !w-10 bg-white rounded-lg! mx-3 shadow-md"
            />
          )}
        />
      </div>

      <Button
        text={"Submit"}
        className={
          " btn-primary font-semibold text-sm leading-[142%] border border-teal w-full"
        }
        onClick={() => router.push("/new-password")}
      />
    </div>
  );
};

export default Page;
