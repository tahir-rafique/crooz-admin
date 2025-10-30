import { Icon } from "@iconify/react";
import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { month: "Jan", reports: 950, chatbot: 800 },
  { month: "Feb", reports: 850, chatbot: 600 },
  { month: "Mar", reports: 1050, chatbot: 850 },
  { month: "Apr", reports: 800, chatbot: 1100 },
  { month: "May", reports: 1000, chatbot: 750 },
  { month: "Jun", reports: 1150, chatbot: 950 },
  { month: "Jul", reports: 1100, chatbot: 850 },
  { month: "Aug", reports: 1300, chatbot: 850 },
  { month: "Sep", reports: 950, chatbot: 1200 },
  { month: "Oct", reports: 800, chatbot: 800 },
  { month: "Nov", reports: 1100, chatbot: 850 },
  { month: "Dec", reports: 1000, chatbot: 1100 },
];

export default function PlatformActivityTrend() {
  return (
    <div className=" flex flex-col gap-4">
      <p className=" font-semibold text-base leading-[175%] tracking-[0.08px]">
        Platform Activity Trend
      </p>
      <div className="bg-white rounded-2xl  p-8 h-[350px] border border-lightGray">
        {/* Header */}

        <div className="flex justify-between items-center mb-5">
          <div className="flex items-center justify-center gap-8 w-full">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#5C59E8]"></div>
              <span className=" text-xs  text-darkGray font-medium leading-[150%] tracking-[0.06px]">
                Reports Generated
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#E46A11]"></div>
              <span className=" text-xs  text-darkGray font-medium leading-[150%] tracking-[0.06px]">
                Chatbot Conversations
              </span>
            </div>
          </div>
          <div className="relative w-full sm:w-auto">
            <select className="w-full sm:w-auto appearance-none bg-[#9CE7DC] text-black px-4 sm:px-6 py-2 !pr-10 rounded-full  cursor-pointer outline-none text-sm sm:text-base font-normal  ">
              <option>Daily</option>
              <option>Weekly</option>
              <option>Monthly</option>
            </select>
            <Icon
              icon="solar:alt-arrow-down-outline"
              width="20"
              height="20"
              className=" absolute right-3 top-2.5 text-black/40 ointer-events-none"
            />
          </div>
        </div>

        {/* Chart */}
        <div className="w-full" style={{ height: "calc(100% - 80px)" }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorReports" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorChatbot" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f97316" stopOpacity={0.1} />
                  <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#f0f0f0"
                vertical={false}
              />
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#667085", fontSize: 12 }}
                dy={10}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#667085", fontSize: 12 }}
                ticks={[0, 200, 400, 600, 800, 1000, 1200, 1400]}
                domain={[0, 1400]}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                  padding: "8px 12px",
                }}
              />
              <Area
                type="monotone"
                dataKey="reports"
                stroke="#6366f1"
                strokeWidth={2.5}
                fillOpacity={1}
                fill="url(#colorReports)"
              />
              <Area
                type="monotone"
                dataKey="chatbot"
                stroke="#f97316"
                strokeWidth={2.5}
                fillOpacity={1}
                fill="url(#colorChatbot)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
