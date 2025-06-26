import React from "react";
import SideBar from "./_components/SideBar";
import Header from "./_components/Header";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="md:block md:w-64 fixed hidden">
        <SideBar />
      </div>
      <div className="md:ml-64">
        <Header />
        {children}
      </div>
    </div>
  );
}
