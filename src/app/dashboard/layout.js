import React from "react";
import Header from "@/components/layout/header";
import DashboardSidebar from "@/components/layout/dashboardSidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="h-dvh w-dvw flex p-2  bg-background">
      <DashboardSidebar />
      <main className="h-full w-full lg:w-[calc(100%_-_320px)] px-5">
        <Header />
        <div className="w-full h-[calc(100%_-_80px)] overflow-y-auto hide-scroll">{children}</div>
      </main>
    </div>
  );
}
