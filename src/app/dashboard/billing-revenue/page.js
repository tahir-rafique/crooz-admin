"use client";
import { useState } from "react";
import Tabs from "@/components/shared/tabs";
import RevenueOverview from "@/components/billing-revenue/revenueOverview/page";
import SubscriptionAndInvoice from "@/components/billing-revenue/subscriptionAndInvoice/page";

const page = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: " Revenue Overview",
      content: <RevenueOverview />,
      disabled: false,
    },

    {
      label: " Subscription & Invoice",
      content: <SubscriptionAndInvoice />,
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
