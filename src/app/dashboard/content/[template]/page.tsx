'use client'
import TemplateArray from "@/app/(data)/Template";
import { TEMPLATE } from "../../_components/TemplateListSection";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";

// this is the way to get the dynamic url in a server component (if you are in /app dir) if you want to make it client then you can use useRouter() from next/navigation
interface PAGEPROPS {
  params: { template: string };
}

export default async function GenerateContent({ params }: PAGEPROPS) {

  const selectedTemplate: TEMPLATE | undefined = TemplateArray.find(
    (item) => item.slug == params.template
  );

  const generateAIContent = (data : any) => {

  }

  return (
    <div className=" bg-slate-100 h-screen">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 p-7">
        {/* Form Section  */}
        <FormSection selectedTemplate={selectedTemplate} userFormInput={(data : any)=>generateAIContent(data)} />

        {/* Output Section  */}
        <div className="cols-span-2">
          <OutputSection />
        </div>
      </div>
    </div>
  );
}
