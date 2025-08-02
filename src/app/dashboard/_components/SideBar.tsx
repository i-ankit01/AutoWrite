"use client";

import { FileClock, Home, Menu, Settings, WalletCards } from "lucide-react";
import Link from "next/link";
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
    <div className="h-screen p-2 border shadow-sm">
      <div className="text-lg font-bold p-3 mb-15 border-b-2">AutoWrite</div>
      <div>
        {MenuList.map((menu, index) => (
          <Link href={menu.path}
            key={index}
            className={`flex items-center justify-left gap-4 font-semibold mb-2 pl-3 pt-1 pb-1 ${
              path == menu.path ? "hover:bg-gradient-to-b from-primary/70 to-primary text-white" : "hover:bg-neutral-200"
            } cursor-pointer p-1 rounded-lg text-lg ${
              path == menu.path && "bg-gradient-to-b from-primary/70 to-primary text-white"
            }`}
          >
            <menu.icon />
            <h2>{menu.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
