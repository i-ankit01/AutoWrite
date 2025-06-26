"use client";

import { FileClock, Home, Menu, Settings, WalletCards } from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";

const SideBar = () => {
  const path = usePathname();

  const MenuList = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard",
    },
    {
      name: "History",
      icon: FileClock,
      path: "/dashboard/history",
    },
    {
      name: "Billing",
      icon: WalletCards,
      path: "/dashboard/billing",
    },
    {
      name: "Setting",
      icon: Settings,
      path: "/dashboard/setting",
    },
  ];

  return (
    <div className="h-screen p-5 border shadow-sm">
      <div className="text-lg font-bold mb-15 border-b-2">AutoWrite</div>
      <div>
        {MenuList.map((menu, index) => (
          <div
            key={index}
            className={`flex items-center justify-left gap-4 font-semibold mb-4 ${
              path == menu.path ? "hover:bg-primary" : "hover:bg-neutral-200"
            } cursor-pointer p-1 rounded-lg text-xl ${
              path == menu.path && "bg-primary text-white"
            }`}
          >
            <menu.icon />
            <h2>{menu.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
