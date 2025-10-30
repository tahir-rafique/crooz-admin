import React from "react";
import { Progress } from "antd";

const revenueSnapshotData = [
  {
    id: 1,
    icon: "majesticons:users-line",
    iconClass: " text-[#018E81] bg-[#B9FFF4] ",
    title: "Active Users",
    data: [
      {
        id: 1,
        label: "Monthly Recurring Revenue (MRR)",
        value: "284",
        progress: 50,
      },
      {
        id: 2,
        label: "Annual Recurring Revenue (ARR)",
        value: "780",
        progress: 60,
      },

      {
        id: 3,
        label: "Gross ARR (MRR + ARR)",
        value: "780",
        progress: 70,
      },
    ],
  },
];

export default function RevenueSnapshot() {
  return (
    <div className=" space-y-[15px] w-full max-w-[40%]">
      <p className="px-3 text-base leading-[150%] font-semibold">
        Revenue Snapshot
      </p>
      <div className=" border border-lightGray rounded-primary bg-background px-5 py-4 ">
        {revenueSnapshotData.map((item) => {
          return (
            <div className=" space-y-[26px]" key={item.id}>
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
          );
        })}
      </div>
    </div>
  );
}
