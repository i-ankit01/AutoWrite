import React, { useRef } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

const OutputSection = () => {
  const editorRef: any = useRef(null);
  return (
    <div className="bg-white shadow-md rounded-lg w-200 mt-7">
      <div className="flex justify-between items-center p-5">
        <h2 className="font-semibold text-primary text-lg">Output</h2>
        <Button className="cursor-pointer">
          {" "}
          <Copy /> Copy{" "}
        </Button>
      </div>
      <Editor
        ref={editorRef}
        previewStyle="vertical"
        height="600px"
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
