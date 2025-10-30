import React from "react";
import Input from "../shared/input";
import Button from "../shared/button";

export default function SecuritySettings() {
  return (
    <div className=" max-w-[1000px]">
      <h2 className="text-base font-medium mb-3 px-4">Change Admin Password</h2>

      <div className=" border border-lightGray rounded-secondary h-full p-8 bg-white  flex flex-col gap-[35px]">
        <div className=" flex flex-col gap-5">
          <Input
            label="Current Password"
            labelClass=" !font-normal"
            className={"w-full max-w-[400px] "}
            wrapperClass={"!rounded-primary px-3"}
            placeholder="**************"
            type="password"
          />
          <div className=" flex flex-col md:flex-row gap-5">
            <Input
              label="New Password"
              labelClass=" !font-normal"
              className={"w-full max-w-[400px] "}
              wrapperClass={"!rounded-primary  px-3"}
              inputClass={"placeholder:!text-black "}
              placeholder="**************"
              type="password"
            />

            <Input
              label="Confirm New Password"
              labelClass=" !font-normal"
              className={"w-full max-w-[400px] "}
              wrapperClass={"!rounded-primary px-3"}
              inputClass={"placeholder:!text-black "}
              placeholder="**************"
              type="password"
            />
          </div>
        </div>

        <Button
          className="btn-secondary w-full max-w-[190px]  shadow-[0_4px_16px_0_rgba(66,21,133,0.15)]"
          text="Update Password"
        />
      </div>
    </div>
  );
}
