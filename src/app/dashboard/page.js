"use client";
import React from "react";
import YourAttention from "@/components/dashboard/yourAttention";
import UserSummary from "@/components/dashboard/userSummary";
import RevenueSnapshot from "@/components/dashboard/revenueSnapshot";
import LicenceSection from "@/components/dashboard/licenceSection";
import UserIntrection from "@/components/dashboard/userIntrection";
import BotConversation from "@/components/dashboard/botConversation";
import VerticalBarChart from "@/components/graphs/verticalBarChart";
import LineCharts from "@/components/graphs/lineCharts";
import HorizontalBarChart from "@/components/graphs/horizontalBarChart";

const userTrendChartData = {
  title: "User Trend",
  data: [
    { day: "Mon", value: 3400, bg1: 3000, bg2: 3500 },
    { day: "Tue", value: 2000, bg1: 2500, bg2: 3800 },
    { day: "Wed", value: 3200, bg1: 3600, bg2: 3400 },
    { day: "Thu", value: 5500, bg1: 5000, bg2: 5200 },
    { day: "Fri", value: 8500, bg1: 3500, bg2: 4800 },
    { day: "Sat", value: 4800, bg1: 5000, bg2: 4200 },
    { day: "Sun", value: 5000, bg1: 4000, bg2: 5500 },
  ],
};

const MMRTrendChartData = {
  title: "MRR/ARR Trend",
  data: [
    { month: "Jan", MRR: 55000, ARR: 95000 },
    { month: "Feb", MRR: 48000, ARR: 75000 },
    { month: "Mar", MRR: 45000, ARR: 60000 },
    { month: "Apr", MRR: 82000, ARR: 52000 },
    { month: "May", MRR: 65000, ARR: 88000 },
    { month: "Jun", MRR: 65000, ARR: 48000 },
    { month: "Jul", MRR: 72000, ARR: 85000 },
  ],
};

const dotDropOfChartData = {
  title: "Bot Drop-Off",
  data: [
    { name: "Started Chat", value: 344, color: "#FDB96A" },
    { name: "Selected Report Type", value: 112, color: "#B8D488" },
    { name: "Provided Input", value: 600, color: "#8FCA6E" },
    { name: "Report Generated", value: 156, color: "#7AC7C4" },
    { name: "Dropped Off (No report)", value: 148, color: "#F4A99E" },
  ],
};

export default function Page() {
  return (
    <div className="w-full overflow-y-auto  flex flex-col gap-10">
      <YourAttention />

      <div className=" flex gap-5 w-full">
        <UserSummary />
        <RevenueSnapshot />
      </div>
      <LicenceSection />

      <div className=" flex gap-5 w-full">
        <UserIntrection />
        <BotConversation />
      </div>

      <LineCharts chartData={userTrendChartData} />

      <div className=" flex gap-5 w-full">
        <VerticalBarChart chartData={MMRTrendChartData} />
        <HorizontalBarChart chartData={dotDropOfChartData} />
      </div>
    </div>
  );
}
