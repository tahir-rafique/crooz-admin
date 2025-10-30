"use client";
import { useState } from "react";
import Tabs from "@/components/shared/tabs";
import GeneralSettings from "@/components/settings/generalSettings";

const page = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: "General",
      content: <GeneralSettings />,
      disabled: false,
    },

    {
      label: "Notification",
      content: <div> m,sassdfsd content</div>,

      disabled: false,
    },

    {
      label: "Security",
      content: <div> lead content</div>,
      disabled: false,
    },
  ];

  return (
    <Tabs
      tabs={tabs}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      contentLocation="below"
      classValue="custom-class "
    />
  );
};

export default page;
