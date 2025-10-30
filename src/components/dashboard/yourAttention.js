import React from "react";
import { attenstionData } from "@/constant/data";
import { Icon } from "@iconify/react";
import Button from "@/components/shared/button";

export default function YourAttention() {
  return (
    <div className=" space-y-[15px]">
      <p className=" px-3 text-base font-semibold leading-[125%] ">
        Needs Your Attention ⚡
      </p>
      <div className=" border border-lightGray rounded-primary bg-white">
        {attenstionData.map((item) => (
          <div
            key={item.id}
            className="py-4 flex justify-between items-center px-6 border-b last:border-b-0 border-lightGray"
          >
            <div className=" flex items-center gap-5">
              <Icon
                icon={item.icon}
                height={30}
                width={30}
                className=" p-[6px] rounded-full bg-purple/20 text-purple"
              />
              <p className=" text-sm font-normal leading-[142%]">
                {item.label}
              </p>
            </div>

            <Button text={item.btnText} className={" btn-secondary !h-10"} />
          </div>
        ))}
      </div>
    </div>
  );
}
