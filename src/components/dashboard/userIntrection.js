import React from "react";
import { Progress } from "antd";
import { Icon } from "@iconify/react";
import Image from "next/image";

const userIntrectionData = [
  {
    id: 1,
    icon: "streamline-plump:file-report-solid",
    iconClass: "text-[#562CBC]",
    label: "Generate Opportunity Navigation Report",
    totalUser: "8,235 uses",
    value: "+6",
    // arrowImg: "/assets/icons/updown-arrow.svg",
    progress: 60,
  },

  {
    id: 2,
    icon: "mdi:chat",
    label: "Updated Conversation",
    totalUser: "9,235 uses",
    value: "+2",
    progress: 80,
  },

  {
    id: 3,
    icon: "mingcute:map-pin-fill",
    label: "Generate Map",
    totalUser: "5,235 uses",
    value: "+7",
    progress: 40,
  },
];

export default function UserIntrection() {
  return (
    <div className=" space-y-[15px] w-full max-w-[55%]">
      <p className="text-base leading-[150%] font-semibold">
        Top 3 User Interaction
      </p>
      <div className=" border border-lightGray rounded-primary bg-background px-5 py-8 flex flex-col gap-5">
        {userIntrectionData.map((data) => (
          <div className=" flex flex-col gap-2" key={data.id}>
            <div className=" flex justify-between items-center">
              <div className=" flex items-center gap-1">
                <Icon
                  icon={data.icon}
                  height={24}
                  width={24}
                  className={`${data.iconClass}`}
                />

                <div className=" flex flex-col">
                  <span className=" text-sm font-medium leading-normal">
                    {data.label}
                  </span>

                  <span className=" text-xs font-medium leading-normal text-darkGray">
                    {data.totalUser}
                  </span>
                </div>
              </div>

              <div className=" flex items-center gap-1">
                <Image
                  src={"/assets/icons/updown-arrow.svg"}
                  height={14}
                  width={14}
                  alt="arrow-comprasion"
                />
                <span className=" text-xs font-medium leading-normal text-[#13B549]">
                  {data.value}
                </span>
              </div>
            </div>

            <Progress
              percent={data.progress}
              showInfo={false}
              className={"progress-teal-grad"}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
