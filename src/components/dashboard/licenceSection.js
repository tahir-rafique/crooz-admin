import { Icon } from "@iconify/react";
import React from "react";

const LicenseOverview = () => {
  return (
    <div className=" space-y-[15px] w-full max-w-[350px]">
      <p className=" text-base leading-[150%] font-semibold">
        License Overview
      </p>
      <div className=" border border-lightGray rounded-primary bg-background px-5 py-6 flex flex-col gap-5">
        <div className=" flex justify-between items-center">
          <span className=" text-sm font-medium leading-normal">
            Total Active Licenses
          </span>
          <h1 className=" text-2xl lg:text-[32px] font-semibold leading-[137%] tracking-[-0.64px]">
            2,420
          </h1>
        </div>

        <div className=" flex justify-between items-center">
          <span className=" text-sm font-medium leading-normal">
            Licenses Expiring Soon
          </span>
          <h1 className=" text-2xl lg:text-[32px] font-semibold leading-[137%] tracking-[-0.64px]">
            1,210
          </h1>
        </div>
      </div>
    </div>
  );
};

const PlatformActivity = () => {
  const users = [
    {
      id: 1,
      label: "Active Users",
    },

    {
      id: 2,
      label: "New Users",
    },

    {
      id: 3,
      label: "User Churn",
    },
  ];

  const userData = [
    {
      id: 1,
      iconClass: " text-[#018E81] bg-[#B9FFF4] ",
      label: "Today",
      value: "1300",
    },

    {
      id: 2,
      iconClass: " text-[#018E81] bg-[#C8F8A2] ",
      label: "This Week",
      value: "1300",
    },

    {
      id: 3,
      iconClass: " text-[#DB5E10] bg-[#FEB98F] ",
      label: "This Month",
      value: "1300",
    },
  ];

  return (
    <div className=" space-y-[15px] w-full ">
      <div className=" flex justify-between items-center">
        <p className=" text-base leading-[150%] font-semibold">
          Platform Activity
        </p>

        <div className=" flex gap-2 items-center">
          {users.map((user) => (
            <span
              key={user.id}
              className={` bg-white rounded-full px-3 py-[3px] text-sm font-medium  ${
                user.id == 1 ? " border" : ""
              } `}
            >
              {user.label}
            </span>
          ))}
        </div>
      </div>
      <div className=" border border-lightGray rounded-primary bg-background px-5 py-8 flex flex-col gap-4">
        <p className=" text-sm font-medium leading-normal"> Active Users</p>
        <div className=" grid grid-cols-3 gap-10">
          {userData.map((item) => (
            <div key={item.id} className=" flex items-center gap-4.5">
              <Icon
                icon="majesticons:users-line"
                width="40"
                height="40"
                className={` h-12 w-12 rounded-full p-1.5 ${item.iconClass}`}
              />

              <div className=" flex flex-col ">
                <span className="text-lg lg:text-2xl font-medium leading-[100%]">
                  {item.label}
                </span>
                <span className="text-xl lg:text-[26px] font-semibold leading-[100%] text-darkGray">
                  {item.value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function LicenceSection() {
  return (
    <div className=" flex gap-6">
      <LicenseOverview />
      <PlatformActivity />
    </div>
  );
}
