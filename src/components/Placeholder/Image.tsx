import React from 'react';
import { ImageIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

const ImagePlaceholder = ({ className, gradient }: { className?: String, gradient?: "top" | "right" }) => {

  return (
    <>
      {/* <!-- ===== Image Start ===== --> */}

      <div className={cn(`inline-flex items-center justify-center shadow-sm ${gradient === "top" || gradient === undefined ? "bg-gradient-to-t" : "bg-gradient-to-r"} from-[#dadae0] to-[#ebecf13d] dark:bg-slate-500 rounded-md  h-full w-full px-4 py-2 mx-auto`, className)}>
          <ImageIcon className="h-10 w-10 text-slate-300 rounded-md object-cover"></ImageIcon>
      </div>
      {/* <!-- ===== Image End ===== --> */}
    </>
  );
};

export default ImagePlaceholder;
