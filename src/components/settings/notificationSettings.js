"use client";
import React, { useState } from "react";
import { Checkbox } from "antd";

const NotificationSettings = () => {
  const [checked, setChecked] = useState({});

  const notificationData = {
    email: {
      title: "Email Notifications",
      items: [
        "Weekly Activity Summary",
        "Monthly Revenue Reports",
        "New Support Tickets",
      ],
    },
    push: {
      title: "Push Notifications",
      items: [
        "Payment Failures",
        "Chatbot Drop-Off Warnings",
        "New User Registrations",
      ],
    },
  };

  const handleChange = (category, item) => {
    setChecked((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [item]: !prev[category]?.[item],
      },
    }));
  };

  return (
    <div className="w-full  max-w-[1000px] ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full ">
        {Object.entries(notificationData).map(([categoryKey, category]) => (
          <div key={categoryKey}>
            <h2 className="text-base font-medium mb-3 px-4">
              {category.title}
            </h2>
            <div className="bg-white rounded-secondary border border-lightGray p-4">
              <div className="flex flex-col gap-3">
                {category.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center  border border-lightGray  rounded-lg px-4 py-3 hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition"
                  >
                    <span className="text-darkGray text-sm font-medium leading-normal">
                      {item}
                    </span>
                    <Checkbox
                      className=" "
                      checked={checked[categoryKey]?.[item] || false}
                      onChange={() => handleChange(categoryKey, item)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationSettings;
