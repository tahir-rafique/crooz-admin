"use client";
import { Icon } from "@iconify/react";
import { useState, useEffect, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import UsageCard from "./userCard";

const NAVIGATION_ITEMS = {
  general: [
    { label: "Dashboard", icon: "tabler:gauge", href: "/dashboard" },
    {
      label: "Analytics & Reporting",
      icon: "material-symbols-light:analytics-outline",
      href: "/dashboard/analytic-reporting",
    },

    {
      label: "User & License Management",
      icon: "tabler:users",
      href: "/dashboard/user-license-management",
    },

    {
      label: "Content Management",
      icon: "solar:file-broken",
      href: "/dashboard/content-management",
    },

    {
      label: "Support & Feedback",
      icon: "material-symbols-light:support-agent-outline-rounded",
      href: "/dashboard/support-feedback",
    },

    {
      label: "Billing  & Revenue",
      icon: "solar:dollar-broken",
      href: "/dashboard/billing-revenue",
    },
  ],

  bottom: [
    {
      label: "Support",
      icon: "mynaui:support",
      href: "/dashboard/support",
    },
    {
      label: "Settings",
      icon: "weui:setting-outlined",
      href: "/dashboard/settings",
    },
  ],
};

export default function DashboardSidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileOpen((prev) => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileOpen(false);
  }, []);

  const handleNavClick = useCallback(
    (href) => {
      closeMobileMenu();
      router.push(href);
    },
    [router, closeMobileMenu]
  );

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isMobileOpen) {
        setIsMobileOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMobileOpen]);

  return (
    <>
      {/* -----------------------Mobile Menu Button--------------------------- */}
      <button
        onClick={toggleMobileMenu}
        className={`lg:hidden fixed top-10 z-[999] transition-all duration-300  ${
          isMobileOpen
            ? " hidden "
            : " max-sm:top-[38px]! left-[30px]  sm:left-[42px]"
        }`}
        aria-label={isMobileOpen ? "Close sidebar" : "Open sidebar"}
        aria-expanded={isMobileOpen}
      >
        <Icon
          icon={isMobileOpen ? "mdi:close" : "mdi:menu"}
          className="w-6 h-6 text-gray-700"
        />
      </button>

      {/* ----------------------Mobile Overlay--------------------- */}
      {isMobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/20 z-40"
          onClick={closeMobileMenu}
          aria-label="Close sidebar"
        />
      )}

      {/*------------------------------------------ Sidebar ----------------------------------*/}
      <aside
        className={`fixed lg:relative h-full top-0 left-0  z-50  transform transition-transform duration-300 min-w-[320px] max-w-[320px] ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex flex-col h-full w-full border border-lightGray bg-white shadow-sm rounded-xl">
          {/* Logo */}
          <div className="p-6  flex  justify-between">
            <Image
              src="/assets/logo.svg"
              alt="Crooz Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />

            <Icon
              icon={isMobileOpen ? "mdi:close" : "mdi:menu"}
              className="w-6 h-6 text-gray-700 cursor-pointer lg:hidden"
              onClick={toggleMobileMenu}
            />
          </div>

          {/* Navigation */}
          <div className="p-4 overflow-y-auto hide-scroll w-full">
            <div className="mb-6">
              <h3 className=" mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                GENERAL
              </h3>
              <div className="space-y-1">
                {NAVIGATION_ITEMS.general.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <button
                      key={item.href}
                      onClick={() => handleNavClick(item.href)}
                      className={`w-full flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md transition-colors cursor-pointer ${
                        isActive
                          ? "  !text-[#622400] border border-yellow-100 bg-gradient-to-r from-[#FFE4A2] to-[#FFCCBC] "
                          : " text-[#414651]"
                      }`}
                    >
                      <Icon
                        icon={item.icon}
                        className={`w-5 h-5 ${
                          isActive ? "text-[#C9861E]" : " text-[#A4A7AE]"
                        }  `}
                      />
                      <span className=" text-base font-semibold leading-[150%] ">
                        {item.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
            <UsageCard />
          </div>

          <div className="p-4 space-y-1 ">
            {NAVIGATION_ITEMS.bottom.map((item) => {
              const isActive = pathname === item.href;
              return (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg transition-colors  cursor-pointer ${
                    isActive
                      ? "  !text-[#622400] border border-yellow-100 bg-gradient-to-r from-[#FFE4A2] to-[#FFCCBC] "
                      : "text-[#414651] "
                  }`}
                >
                  <Icon
                    icon={item.icon}
                    className={`w-5 h-5 ${
                      isActive ? "text-[#C9861E]" : " text-[#A4A7AE]"
                    }  `}
                  />
                  <span className="flex-1 text-left">{item.label}</span>
                  {item.badge && (
                    <span className="px-2 py-0.5 text-xs font-semibold text-gray-600 bg-gray-100 rounded">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </aside>
    </>
  );
}
