'use client'
import { useState } from "react";
import Header from "./_components/Header";
import TemplateListSection from "./_components/TemplateListSection";

export default function Dashboard() {
  const [userSearchInput , setUserSearchInput] = useState<string>()
  return (
    <div className="">
      {/* Header  */}
      <Header setSearchValue={(value:string)=>(setUserSearchInput(value))} />
      <div className="p-8">
        {/* Template List Secction */}
        <TemplateListSection userSearchInput={userSearchInput} />
      </div>
    </div> 
  );
}
