// components/Tabs.js

import Image from "next/image";
import React from "react";

const TabContent = React.memo(({ content }) => {
  return <div>{content}</div>;
});

const TabButton = React.memo(
  ({ index, label, activeTab, setActiveTab, disabled, icon }) => {
    return (
      <button
        key={index}
        onClick={() => !disabled && setActiveTab(index)}
        className={` cursor-pointer !text-sm font-semibold leading-[142%] shadow-[0_4px_16px_0_rgba(0,72,62,0.15)] ${
          activeTab === index
            ? "btn-primary h-[40px] w-fit px-3.5 !rounded-[8px]  "
            : disabled
            ? ""
            : " text-[var(--primary) hover:opacity-80 text-[var(--gray)] border  "
        } transition-all  border-[#45A99D] h-[40px] w-full max-w-[250px] rounded-[8px] duration-200 whitespace-nowrap px-3.5 ${
          icon ? "flex items-center justify-center gap-2 w-full" : ""
        }`}
        role="tab"
        aria-selected={activeTab === index ? "true" : "false"}
        aria-controls={`panel-${index}`}
        id={`tab-${index}`}
        tabIndex={disabled ? -1 : 0}
        disabled={disabled}
        type="button"
      >
        {icon && <Image src={icon} height={20} width={20} alt={label} />}
        {label}
      </button>
    );
  }
);

const Tabs = React.memo(
  ({
    tabs,
    contentLocation,
    activeTab,
    setActiveTab,
    classValue,
    tabsWraperClass,
  }) => {
    return (
      <div className={`tabs-container  ${classValue}  w-full `}>
        {/* Tab Buttons */}
        <div
          className={` w-full flex  flex-wrap tabs gap-3 !py-2 sm:!py-1  !rounded-[33px] ${tabsWraperClass} `}
        >
          {tabs.map((tab, index) => (
            <TabButton
              key={index}
              index={index}
              label={tab.label}
              icon={tab.icon}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              disabled={tab.disabled}
            />
          ))}
        </div>

        {/* Tab Content */}
        {contentLocation === "below" && (
          <div className="tab-content  mt-4">
            {tabs.map((tab, index) => (
              <div
                key={index}
                id={`panel-${index}`}
                role="tabpanel"
                aria-labelledby={`tab-${index}`}
                className={activeTab === index ? "block !mt-5" : "hidden !mt-5"}
              >
                <TabContent content={tab.content} />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
);

export default Tabs;
