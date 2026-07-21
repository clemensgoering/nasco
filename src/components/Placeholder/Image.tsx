import React from "react";
import { ImageIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

export interface ImagePlaceholderProps {
  className?: string;
  /** Direction of the background gradient. Defaults to "top". */
  gradient?: "top" | "right";
}

/** Grey gradient placeholder to reserve image space during development. */
const ImagePlaceholder = ({ className, gradient = "top" }: ImagePlaceholderProps) => (
  <div
    className={cn(
      "mx-auto inline-flex h-full w-full items-center justify-center rounded-md from-[#dadae0] to-[#ebecf13d] px-4 py-2 shadow-sm dark:bg-slate-500",
      gradient === "top" ? "bg-gradient-to-t" : "bg-gradient-to-r",
      className,
    )}
  >
    <ImageIcon className="h-10 w-10 rounded-md object-cover text-slate-300" />
  </div>
);

export default ImagePlaceholder;
