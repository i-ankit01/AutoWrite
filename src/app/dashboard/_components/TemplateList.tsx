import TemplateArray from "@/app/(data)/Template";
import TemplateCard from "./TemplateCard";
import { FC } from "react";

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
export default function TemplateList() {
  return (
    <div className="flex flex-wrap gap-4 ">
      {TemplateArray.map((item, index) => (
        <TemplateCard key={index} item={item} />
      ))}
    </div>
  );
}
