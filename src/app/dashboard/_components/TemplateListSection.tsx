import TemplateArray from "@/app/(data)/Template";
import TemplateCard from "./TemplateCard";
import { FC, useEffect, useState } from "react";

export interface TEMPLATE {
  name: string;
  description: string;
  category: string;
  icon: FC;
  aiPrompt: string;
  slug: string;
  form?: FORM[];
}

export interface FORM {
  label: string;
  field: string;
  name: string;
  required: boolean;
}
export default function TemplateListSection({userSearchInput} : {userSearchInput : string | undefined}) {

  const [templateList , setTemplateList] = useState(TemplateArray)

  useEffect(()=>{
    if(userSearchInput){
      const filterData = TemplateArray.filter((item)=>(item.name.toLowerCase().includes(userSearchInput.toLowerCase())))
      setTemplateList(filterData)
    }
    else{
      setTemplateList(TemplateArray)
    }
  },[userSearchInput])
  return (
    <div className="flex flex-wrap gap-4 ">
      {templateList.map((item, index) => (
        <TemplateCard key={index} item={item} />
      ))}
    </div>
  );
}
