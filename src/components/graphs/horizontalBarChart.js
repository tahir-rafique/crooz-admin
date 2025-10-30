import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Cell,
  ResponsiveContainer,
} from "recharts";

export default function HorizontalBarChart({ chartData }) {
  // const data = [
  //   { name: "Started Chat", value: 344, color: "#FDB96A" },
  //   { name: "Selected Report Type", value: 112, color: "#B8D488" },
  //   { name: "Provided Input", value: 600, color: "#8FCA6E" },
  //   { name: "Report Generated", value: 156, color: "#7AC7C4" },
  //   { name: "Dropped Off (No report)", value: 148, color: "#F4A99E" },
  // ];

  return (
    <div className="w-full   bg-white border border-lightGray rounded-[20px] p-4 flex flex-col justify-between">
      <h2 className="p-3 text-sm sm:text-base font-semibold leading-[125%]">
        {chartData.title}
      </h2>

      <div className="flex w-full justify-between   items-center gap-4 xl:gap-12">
        {/* Chart */}
        <div className="w-full flex justify-center items-center lg:w-1/2">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={chartData.data}
              layout="vertical"
              margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
            >
              <XAxis type="number" hide />
              <YAxis type="category" dataKey="name" hide />
              <Bar dataKey="value" radius={[20, 20, 20, 20]} barSize={40}>
                {chartData.data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="w-full lg:w-1/2 space-y-3">
          {chartData.data?.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-3 flex-1">
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm font-normal">{item.name}</span>
                <span className="text-sm font-normal leading-[145%] text-darkGray tracking-[0.14px]">
                  {item.value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
