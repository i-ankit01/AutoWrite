import React, { useEffect, useRef, useState } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";

interface props {
  aiOutput : string;
}

const OutputSection = ({aiOutput} : props) => {
  const editorRef: any = useRef(null);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(()=>{
    const editorInstance = editorRef.current.getInstance()
    editorInstance.setMarkdown(aiOutput)
  },[aiOutput])

  return (
    <div className="bg-white shadow-md rounded-lg w-200 mt-7">
      <div className="flex justify-between items-center p-5">
        <h2 className="font-semibold text-primary text-lg">Output</h2>
        <Button className="cursor-pointer"
        onClick={()=>{navigator.clipboard.writeText(aiOutput)
          setIsCopied(true);

          setTimeout(()=>{
            setIsCopied(false)
          },1000)
        }}
        >
          {isCopied ? <Check /> : <Copy />} {isCopied ? "Copied" : "Copy"}
        </Button>
      </div>
      <Editor
        ref={editorRef}
        previewStyle="vertical"
        height="570px"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        onChange={() =>
          console.log(editorRef.current.getInstance().getMarkdown())
        }
      />
    </div>
  );
};

export default OutputSection;
