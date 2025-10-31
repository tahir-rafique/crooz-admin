import React from "react";
import LineCharts from "@/components/graphs/lineCharts";
import { Icon } from "@iconify/react";
import CommonTable from "@/components/shared/commonTable";

//  ------------------------- Revenue Cards ----------------------------
const revenueCard = () => {
  const revenueCardData = [
    {
      id: 1,
      label: "Current MRR: ",
      value: "$18,450",
    },

    {
      id: 2,
      label: "Current ARR:   ",
      value: "$142,000  ",
    },

    {
      id: 3,
      label: "Gross ARR (GARR): ",
      value: "$160,450",
    },
  ];

  return (
    <div className=" grid sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
      {revenueCardData.map((item) => (
        <div
          key={item.id}
          className=" rounded-secondary bg-[#89F33633] p-5 space-y-6"
        >
          <div className=" flex items-center gap-2.5">
            <Icon
              icon="majesticons:users-line"
              height={40}
              width={40}
              className=" rounded-full p-1.5 bg-[#0096881A] text-[#009688]"
            />
            <p className=" font-medium text-sm leading-normal">{item.label}</p>
          </div>

          <p className=" font-semibold text-2xl leading-normal">{item.value}</p>
        </div>
      ))}
    </div>
  );
};

//  ------------------------- MRR / ARR Growth Chart ----------------------------

const MRRARRChartData = {
  // title: "User Trend",
  headerClass: " flex !justify-end",
  data: [
    { day: "Jan", value: 3400, bg1: 3000, bg2: 3500 },
    { day: "Feb", value: 4900, bg1: 200, bg2: 3800 },
    { day: "Mar", value: 300, bg1: 3600, bg2: 300 },
    { day: "Apr", value: 5500, bg1: 5000, bg2: 5200 },
    { day: "May", value: 850, bg1: 3500, bg2: 9900 },
    { day: "Jun", value: 9800, bg1: 5000, bg2: 4200 },
    { day: "Jul", value: 5000, bg1: 4000, bg2: 5500 },
  ],
};

const MMRChartTop = () => {
  return (
    <div className=" flex items-center gap-5">
      <p className=" text-base font-medium leading-normal">MRR / ARR Growth</p>
      <div className=" flex items-center gap-2.5">
        <p className=" flex items-center gap-1 text-xs font-normal leading-normal">
          <span className=" block h-3 w-3 rounded-full bg-[#B899E B] bg-[#B899EB]"></span>
          MRR
        </p>
        <p className=" flex items-center gap-1 text-xs font-normal leading-normal">
          <span className=" block h-3 w-3 rounded-full bg-[#B899E B] bg-[#45A99D]"></span>
          ARR
        </p>
      </div>
    </div>
  );
};

//  ------------------------- Revenue Breakdown Table ----------------------------
const columns = [
  {
    title: (
      <div className="flex items-center gap-1">
        <p className=" text-xs text-[#A4A7AE] font-semibold leading-[150%]">
          Type
        </p>
        <Icon icon="uil:sort" className="text-[#A4A7AE] cursor-pointer" />
      </div>
    ),
    dataIndex: "opportunityName",
    key: "opportunityName",
    render: (text) => {
      return <p className="font-normal text-[#232323] text-sm">{text}</p>;
    },
  },
  {
    title: (
      <div className="flex items-center gap-2 ">
        <p className=" text-xs text-[#A4A7AE] font-semibold leading-[150%]">
          Monthly
        </p>
        <Icon icon="uil:sort" className="text-[#A4A7AE] cursor-pointer" />
      </div>
    ),
    dataIndex: "relatedOpportunity",
    key: "relatedOpportunity",
    render: (text) => {
      return <p className="font-normal text-[#232323] text-sm">{text}</p>;
    },
  },

  {
    title: (
      <div className="flex items-center gap-2 ">
        <p className=" text-xs text-[#A4A7AE] font-semibold leading-[150%]">
          Annual
        </p>
        <Icon icon="uil:sort" className="text-[#A4A7AE] cursor-pointer" />
      </div>
    ),
    dataIndex: "annual",
    key: "annual",
    render: (text) => (
      <p className="font-normal text-[#232323] text-sm">{text}</p>
    ),
  },

  {
    title: (
      <div className="flex items-center gap-2 ">
        <p className=" text-xs text-[#A4A7AE] font-semibold leading-[150%]">
          Total Revenue
        </p>
        <Icon icon="uil:sort" className="text-[#A4A7AE] cursor-pointer" />
      </div>
    ),
    dataIndex: "totalRevenue",
    key: "totalRevenue",
    render: (text) => (
      <p className="font-normal text-[#232323] text-sm">{text}</p>
    ),
  },
];

const dataSource = [
  {
    key: 1,
    opportunityName: "May Individual",
    relatedOpportunity: "8,$3,200",
    annual: "$28,000",
    totalRevenue: "$31,200",
  },
  {
    key: 2,
    opportunityName: "Team",
    relatedOpportunity: "$6,750",
    annual: "$44,000",
    totalRevenue: "$50,750",
  },
  {
    key: 3,
    opportunityName: "Enterprise",
    relatedOpportunity: "$8,500",
    annual: "$70,000",
    totalRevenue: "$78,500",
  },
];

//  ------------------------- Main Comp ----------------------------
export default function RevenueOverview() {
  return (
    <div className=" flex flex-col gap-7 lg:gap-10">
      {revenueCard()}
      <div className=" flex flex-col gap-3">
        {MMRChartTop()}
        <LineCharts chartData={MRRARRChartData} />
      </div>

      <div className=" flex flex-col gap-5">
        <p className=" text-base font-medium leading-normal">
          Revenue Breakdown
        </p>
        <CommonTable
          columns={columns}
          dataSource={dataSource}
          pagination={false}
        />
      </div>
    </div>
  );
}
