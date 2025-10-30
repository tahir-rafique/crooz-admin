import React from "react";

export default function BotConversation() {
  return (
    <div className=" space-y-[15px] w-full max-w-[45%]">
      <p className="text-base leading-[150%] font-semibold">
        Top 3 User Interaction
      </p>
      <div className=" border border-lightGray rounded-primary bg-background px-9 py-5 flex flex-col gap-8">
        <p className=" text-[#CF1742] text-base font-semibold leading-normal">
          Trend
        </p>

        <div className="w-full bg-[#FFD7E0] grid grid-cols-2 justify-items-center items-center h-[80px] rounded-primary px-2 py-5 ">
          <span className=" mx-auto text-base font-semibold leading-normal">
            This Week
          </span>
          <p className="pl-5 border-[#C6D3FE] border-l h-full flex justify-center items-center text-center text-sm font-normal leading-normal">
            <span className="text-[#CF1742]">18%</span> compared to last week
          </p>
        </div>

        <div className=" w-full bg-[#FFD7E0] grid grid-cols-2 justify-items-center items-center h-[80px] rounded-primary px-2 py-5">
          <span className=" text-center text-base font-semibold leading-normal">
            Top Drop-off Step
          </span>
          <p className="pl-10 border-[#C6D3FE] border-l h-full flex justify-center items-center text-center text-sm font-normal leading-normal">
            After “Initial Prompt”
          </p>
        </div>
      </div>
    </div>
  );
}
