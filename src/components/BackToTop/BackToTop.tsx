"use client"
import { cn } from "@/lib/utils";
import { ArrowUpIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";

interface BacktoTopProps {
    className?: string
}

export default function BackToTop({ className } : BacktoTopProps) {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (<>
    {isVisible && (
      <div className="fixed bottom-18 right-8 z-[99]">
        <div
          onClick={scrollToTop}
          aria-label="scroll to top"
          className={cn("rounded-lg hover:shadow-signUp flex h-10 w-10 cursor-pointer items-center justify-center bg-blacksection dark:bg-blackho text-white shadow-md transition duration-300 ease-in-out hover:bg-opacity-80",className)}
        >
         <ArrowUpIcon className="w-4 h-4"/>
          <div className="sr-only">scroll to top</div>
        </div>
      </div>
    )}
  </>
  );
}
