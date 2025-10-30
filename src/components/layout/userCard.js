"use client";
import { Icon } from "@iconify/react";
import React, { useState } from "react";

const UsageCard = () => {
  const [isVisible, setIsVisible] = useState(true);
  if (!isVisible) return null;
  return (
    <div className="bg-[#F9F0FF] p-2 rounded-xl max-w-[280px] ">
      <div className="flex justify-between items-start mb-4">
        {/* Progress circle container */}
        <div className="relative w-14.5 h-14.5">
          <svg
            className="w-full h-full transform -rotate-90"
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="#E9D5FF"
              strokeWidth="8"
              fill="transparent"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="#8B5CF6"
              strokeWidth="8"
              fill="transparent"
              strokeDasharray={2 * Math.PI * 40}
              strokeDashoffset={2 * Math.PI * 40 * (1 - 0.8)} // 80%
              strokeLinecap="round"
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-[#0C002C] font-semibold text-sm leading-5">
            80%
          </span>
        </div>

        {/* Close button */}
        <button
          className="text-purple-500 cursor-pointer "
          onClick={() => setIsVisible(false)}
        >
          <Icon
            icon="material-symbols-light:close-rounded"
            width="20"
            height="20"
          />
        </button>
      </div>

      {/* Text content */}
      <div className="mb-4">
        <p className="font-semibold text-[#0C002C] text-sm leading-5">
          Used space
        </p>
        <p className="text-sm text-[#421585] mt-1 leading-4">
          Your team has used 80% of your available space. Need more?
        </p>
      </div>

      {/* Footer buttons */}
      <div className="flex space-x-4">
        <button className="text-sm font-semibold leading-5 text-[#421585] hover:underline">
          Dismiss
        </button>
        <button className="text-sm leading-5 font-semibold text-[#825ED8] hover:underline">
          Upgrade plan
        </button>
      </div>
    </div>
  );
};

export default UsageCard;
