import { Icon } from "@iconify/react";
import { alignItemsValues } from "antd/es/flex/utils";
import React from "react";
import { Progress } from "antd";

const activeUser = [
  {
    id: 1,
    icon: "majesticons:users-line",
    iconClass: " text-[#018E81] bg-[#B9FFF4] ",
    title: "Active Users",
    data: [
      {
        id: 1,
        label: "Today",
        value: "284",
        progress: 50,
      },
      {
        id: 2,
        label: "This week",
        value: "1,950",
        progress: 60,
      },

      {
        id: 3,
        label: "This month",
        value: "6,412",
        progress: 70,
      },
    ],
  },
];

const newUser = [
  {
    id: 1,
    icon: "majesticons:users-line",
    iconClass: " text-[#223AB8] bg-[#B4C0FF] ",
    title: "New Users",
    data: [
      {
        id: 1,
        label: "Today",
        value: "284",
        progress: 50,
      },
      {
        id: 2,
        label: "This week",
        value: "1,950",
        progress: 60,
      },

      {
        id: 3,
        label: "This month",
        value: "6,412",
        progress: 70,
      },
    ],
  },
];

const churnUser = [
  {
    id: 1,
    icon: "majesticons:users-line",
    iconClass: " text-[#B82231] bg-[#FE8FA9] ",
    title: "User Churn",
    data: [
      {
        id: 1,
        label: "Inactive for 1 week",
        value: "284",
      },
      {
        id: 2,
        label: "Inactive for 3 weeks",
        value: "1,950",
      },

      {
        id: 3,
        label: "Inactive for 5 weeks",
        value: "6,412",
      },
    ],
  },
];

export default function UserSummary() {
  return (
    <div className=" space-y-[15px] w-full max-w-[60%] ">
      <p className="px-3 text-base leading-[150%] font-semibold">
        User Summary
      </p>
      <div className=" border border-lightGray rounded-primary bg-white px-5 py-2.5 grid lg:grid-cols-3 gap-10">
        {activeUser.map((item) => {
          return (
            <div className=" space-y-[16px]" key={item.id}>
              <div className=" flex items-center gap-2.5">
                <Icon
                  icon={alignItemsValues.icon || "majesticons:users-line"}
                  height={50}
                  width={50}
                  className={`p-2 rounded-full ${item.iconClass}`}
                />
                <p className=" text-sm  leading-[142%] font-semibold">
                  {item.title}
                </p>
              </div>

              <div>
                {item.data?.map((data) => (
                  <div className=" flex flex-col gap-2" key={data.id}>
                    <div className=" flex justify-between items-center">
                      <span className=" text-sm font-medium leading-normal">
                        {data.label}
                      </span>
                      <span className=" text-sm font-semibold leading-normal text-darkGray">
                        {data.value}
                      </span>
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
        })}

        {newUser.map((item) => {
          return (
            <div className=" space-y-[16px]" key={item.id}>
              <div className=" flex items-center gap-2.5">
                <Icon
                  icon={alignItemsValues.icon || "majesticons:users-line"}
                  height={50}
                  width={50}
                  className={`p-2 rounded-full ${item.iconClass}`}
                />
                <p className=" text-sm  leading-[142%] font-semibold">
                  {item.title}
                </p>
              </div>

              <div>
                {item.data?.map((data) => (
                  <div className=" flex flex-col gap-2" key={data.id}>
                    <div className=" flex justify-between items-center">
                      <span className=" text-sm font-medium leading-normal">
                        {data.label}
                      </span>
                      <span className=" text-sm font-semibold leading-normal text-darkGray">
                        {data.value}
                      </span>
                    </div>
                    <Progress
                      percent={data.progress}
                      showInfo={false}
                      className={"progress-green-grad"}
                    />
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        {churnUser.map((item) => {
          return (
            <div className=" space-y-[20px]" key={item.id}>
              <div className=" flex items-center gap-2.5">
                <Icon
                  icon={alignItemsValues.icon || "majesticons:users-line"}
                  height={50}
                  width={50}
                  className={`p-2 rounded-full ${item.iconClass}`}
                />
                <p className=" text-sm  leading-[142%] font-semibold">
                  {item.title}
                </p>
              </div>

              <div className=" flex flex-col gap-6">
                {item.data?.map((data) => (
                  <div
                    className=" flex justify-between items-center"
                    key={data.id}
                  >
                    <span className=" text-sm font-medium leading-[150%] text-[#B42318] bg-[#FEF3F2] border rounded-full px-3 py-1">
                      {data.label}
                    </span>
                    <span className=" text-sm font-semibold leading-normal text-darkGray">
                      {data.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
