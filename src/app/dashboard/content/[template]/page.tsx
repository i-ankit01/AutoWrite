"use client";
import TemplateArray from "@/app/(data)/Template";
import { TEMPLATE } from "../../_components/TemplateListSection";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import axios from "axios";
import { useState } from "react";

// this is the way to get the dynamic url in a server component (if you are in /app dir) if you want to make it client then you can use useRouter() from next/navigation
interface PAGEPROPS {
  params: { template: string };
}

export default function GenerateContent({ params }: PAGEPROPS) {
  const selectedTemplate: TEMPLATE | undefined = TemplateArray.find(
    (item) => item.slug == params.template
  );
  // console.log(selectedTemplate);

  const [isLoading, setLoading] = useState(false);
  const [aiOutput , setAIOutput] = useState<string>("")

  const generateAIContent = async (data: any) => {
    setLoading(true);
    const selectedPromt = selectedTemplate?.aiPrompt;
    // console.log(JSON.stringify(data),selectedPromt)
    const finalPromt = JSON.stringify(data) + "," + selectedPromt;

    try {
      const response = await axios.post("/api/gemini", { prompt: finalPromt });
      // console.log(response.data)
      setAIOutput(response?.data?.text)
    } catch (error: any) {
      console.log("some error occurred ", error);
    }
    setLoading(false);
  };

  return (
    <div className=" bg-slate-100 h-screen">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 p-7">
        {/* Form Section  */}
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={(data: any) => generateAIContent(data)}
          loading={isLoading}
        />

        {/* Output Section  */}
        <div className="cols-span-2">
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  );
}
