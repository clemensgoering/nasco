import { PriceStatus } from "@/types/pricing";
import { ReactNode } from "react";

const PriceCard = ({ status, children }: { status?: PriceStatus, children?: ReactNode }) => {
  return (
    <>
      {/* <!-- ===== Pricing Card Start ===== --> */}
      <div className="animate_top group relative rounded-lg border border-stroke bg-white mt-10 p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none w-full">
        <div className={`absolute px-4.5 py-1.5 right-0 shadow-md
          ${status === "new" ? "top-4" : ""} ${status === "popular" ? "top-7.5" : ""} ${status === "sale" ? "top-4" : ""}
          -rotate-90 rounded-bl-full rounded-tl-full ${status === "new" ? "bg-lime-500" : ""} ${status === "popular" ? "bg-primary" : ""} ${status === "sale" ? "bg-red-500" : ""}  text-metatitle font-medium uppercase text-white`}>
          {status === "new" ? "New" : ""}
          {status === "popular" ? "Popular" : ""}
          {status === "sale" ? "Sale" : ""}
        </div>
        {/* <!-- ===== Content could be:
          - PriceCardHeader
          - PriceCardContent
          or personal nodes
        ===== --> */}
        {children}
      </div>
      {/* <!-- ===== Pricing Card End ===== --> */}
    </>
  );
};

export default PriceCard;
