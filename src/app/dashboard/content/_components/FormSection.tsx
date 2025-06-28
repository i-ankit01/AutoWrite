"use client";

import React, { JSX, useState } from "react";
import { TEMPLATE } from "../../_components/TemplateListSection";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  BlogIcon,
  LinkTreeLogo,
  LinkedInLogo,
  XLogo,
  YoutubeLogo,
  Help,
  Question,
  Code,
  IdeaLogo,
  FileText,
  NewspaperLogo,
  Email,
  GooglePlay,
} from "@/app/(data)/Icon";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

// Learn why we not simply accepted selectedTemplate : TEMPLATE as this
interface PROPS {
  selectedTemplate?: TEMPLATE;
  userFormInput ?:any
}

const FormSection = ({ selectedTemplate , userFormInput }: PROPS) => {
  // this is done because the icons was (FC) which is supported in server component and hence not getting passed from Template.ts (server) --> this FormSection (client)
  const ICONS: Record<
    string,
    (props: React.SVGProps<SVGSVGElement>) => JSX.Element
  > = {
    blog: BlogIcon,
    code: Code,
    youtube: YoutubeLogo,
    linktree: LinkTreeLogo,
    linkedin: LinkedInLogo,
    xlogo: XLogo,
    googleplay: GooglePlay,
    email: Email,
    newspaper: NewspaperLogo,
    idea: IdeaLogo,
    filetext: FileText,
    help: Help,
    question: Question,
  };

  const Icon = selectedTemplate?.icon ? ICONS[selectedTemplate.icon] : null;

  const [formData, setFormData] = useState<any>();
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    userFormInput(formData)
  };

  return (
    <div>
      <Link href={"/dashboard"}>
            <Button className="cursor-pointer" > <ArrowLeft/> Back</Button>
      </Link>
    <div className="p-5 shadow-md border rounded-lg flex flex-col bg-white md:mt-5 ">
      <div className="w-10 h-10 md:w-17 md:h-17 rounded-xl flex items-center justify-center bg-light-primary/20">
        {Icon && <Icon />}
      </div>
      <h1 className="font-bold text-2xl md:mt-3 md:mb-3 text-primary">
        {selectedTemplate?.name}
      </h1>
      <p className="text-gray-500 text-sm mb-3">
        {selectedTemplate?.description}
      </p>
      <form className="mt-3" onSubmit={handleSubmit}>
        {selectedTemplate?.form?.map((item, index) => (
          <div key={index} className="my-2 flex flex-col gap-2 mb-2">
            <label className="font-semibold">{item.label}</label>
            {item.field == "input" ? (
              <Input
                name={item.name}
                className="shadow-primary"
                onChange={handleInputChange}
                required={item.required}
              />
            ) : (
              <Textarea 
              name={item.name}
              className="shadow-primary min-h-[8rem]"
              onChange={handleInputChange}
              required={item.required}
               />
            )}
          </div>
        ))}
        <Button type="submit" className="w-full py-6 mt-5 cursor-pointer">
          Generate Content
        </Button>
      </form>
    </div>
    </div>
  );
};

export default FormSection;
