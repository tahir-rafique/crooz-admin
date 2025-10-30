"use client";
import { useState } from "react";
import Tabs from "@/components/shared/tabs";
import GeneralSettings from "@/components/settings/generalSettings";
import NotificationSettings from "@/components/settings/notificationSettings";
import SecuritySettings from "@/components/settings/securitySettings";

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
      content: <NotificationSettings />,
      disabled: false,
    },

    {
      label: "Security",
      content: <SecuritySettings />,
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
