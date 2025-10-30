import { Icon } from "@iconify/react";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// const data = [
//   { month: "Jan", MRR: 55000, ARR: 95000 },
//   { month: "Feb", MRR: 48000, ARR: 75000 },
//   { month: "Mar", MRR: 45000, ARR: 60000 },
//   { month: "Apr", MRR: 82000, ARR: 52000 },
//   { month: "May", MRR: 65000, ARR: 88000 },
//   { month: "Jun", MRR: 65000, ARR: 48000 },
//   { month: "Jul", MRR: 72000, ARR: 85000 },
// ];

const VerticalBarChart = ({ chartData }) => {
  const formatYAxis = (value) => {
    return `$${value / 1000}k`;
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-6 bg-white border border-lightGray rounded-secondary">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-end gap-4 mb-6">
        {/* <h2 className="p-3 text-sm sm:text-base font-semibold leading-[125%]">
          {chartData.title}
        </h2> */}

        <div className="flex items-center justify-center sm:justify-end gap-4 sm:gap-6 ">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-teal-400"></div>
            <span className="text-xs sm:text-sm text-gray-600">MRR</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-orange-400"></div>
            <span className="text-xs sm:text-sm text-gray-600">ARR</span>
          </div>
        </div>

        <div className="relative w-full sm:w-auto">
          <select className="w-full sm:w-auto appearance-none bg-[#9CE7DC] text-black px-4 sm:px-6 py-2 !pr-10 rounded-full font-normal cursor-pointer outline-none text-sm sm:text-base  ">
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

      <ResponsiveContainer width="100%" height={250} className="sm:h-[300px]">
        <BarChart
          data={chartData.data}
          margin={{ top: 20, right: 10, left: 0, bottom: 5 }}
        >
          <defs>
            <linearGradient id="orangeGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FEBFAC" />
              <stop offset="100%" stopColor="#FF762C" /> {/* teal → blue */}
            </linearGradient>
          </defs>

          <defs>
            <linearGradient id="tealGradient" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="#018E81" />
              <stop offset="100%" stopColor="#9CE7DC" /> {/* teal → blue */}
            </linearGradient>
          </defs>

          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#f0f0f0"
          />
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#9ca3af", fontSize: 10 }}
            className="sm:text-xs"
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#9ca3af", fontSize: 10 }}
            className="sm:text-xs"
            tickFormatter={formatYAxis}
            domain={[0, 100000]}
            ticks={[0, 20000, 40000, 60000, 80000, 100000]}
            width={40}
          />
          <Tooltip
            formatter={(value) => `$${value.toLocaleString()}`}
            contentStyle={{
              backgroundColor: "#fff",
              border: "1px solid #e5e7eb",
              borderRadius: "6px",
              fontSize: "12px",
            }}
          />
          <Bar
            dataKey="ARR"
            fill="url(#orangeGradient)"
            radius={[8, 8, 8, 8]}
            barSize={26}
            className="sm:barSize-20"
          />
          <Bar
            dataKey="MRR"
            fill="url(#tealGradient)"
            radius={[8, 8, 8, 8]}
            barSize={26}
            className="sm:barSize-20"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default VerticalBarChart;
