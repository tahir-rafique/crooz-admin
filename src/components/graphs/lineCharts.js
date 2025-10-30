import { Icon } from "@iconify/react";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Dot,
} from "recharts";

const LineCharts = ({ chartData }) => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  //   const data = [
  //     { day: "Mon", value: 3400, bg1: 3000, bg2: 3500 },
  //     { day: "Tue", value: 2000, bg1: 2500, bg2: 3800 },
  //     { day: "Wed", value: 3200, bg1: 3600, bg2: 3400 },
  //     { day: "Thu", value: 5500, bg1: 5000, bg2: 5200 },
  //     { day: "Fri", value: 8500, bg1: 3500, bg2: 4800 },
  //     { day: "Sat", value: 4800, bg1: 5000, bg2: 4200 },
  //     { day: "Sun", value: 5000, bg1: 4000, bg2: 5500 },
  //   ];

  const CustomDot = (props) => {
    const { cx, cy } = props;
    const dotSize = isMobile ? 6 : 8;
    const strokeWidth = isMobile ? 2 : 3;
    return (
      <g>
        <circle
          cx={cx}
          cy={cy}
          r={dotSize}
          fill="white"
          stroke="#7C3AED"
          strokeWidth={strokeWidth}
        />
      </g>
    );
  };

  return (
    <div className="w-full bg-white p-4 sm:p-6 md:p-8 rounded-secondary border border-lightGray">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 md:mb-8">
        <h2 className="text-sm sm:text-base font-semibold leading-[125%]">
          {chartData.title}
        </h2>

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

      {/* Chart */}
      <ResponsiveContainer width="100%" height={isMobile ? 250 : 320}>
        <LineChart
          data={chartData.data}
          margin={{
            top: 5,
            right: isMobile ? 10 : 30,
            left: isMobile ? -20 : 0,
            bottom: 5,
          }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#E5E7EB"
            vertical={false}
          />
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#9CA3AF", fontSize: isMobile ? 11 : 14 }}
            dy={10}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#9CA3AF", fontSize: isMobile ? 11 : 14 }}
            domain={[0, 10000]}
            ticks={
              isMobile ? [0, 5000, 10000] : [0, 2000, 3000, 4000, 5000, 10000]
            }
            dx={-10}
          />

          {/* Background lines */}
          <Line
            type="monotone"
            dataKey="bg1"
            stroke="#E5E7EB"
            strokeWidth={isMobile ? 1.5 : 2}
            dot={false}
            strokeDasharray="5 5"
            activeDot={false}
          />
          <Line
            type="monotone"
            dataKey="bg2"
            stroke="#E5E7EB"
            strokeWidth={isMobile ? 1.5 : 2}
            dot={false}
            strokeDasharray="5 5"
            activeDot={false}
          />

          {/* Main line */}
          <Line
            type="monotone"
            dataKey="value"
            stroke="#7C3AED"
            strokeWidth={isMobile ? 2 : 3}
            dot={<CustomDot />}
            activeDot={{ r: isMobile ? 6 : 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineCharts;
