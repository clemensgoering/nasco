import pricingData from "./pricingData";
import PriceBanner from "@/components/Price/PriceBanner";
import { PriceCard, PriceCardContent, PriceCardHeader } from "@/components/Price/PriceCard/PriceCard";
import ImagePlaceholder from "@/components/Placeholder/Image";
import React from "react";


const Pricing = () => {
  return (
    <>
      {/* <!-- ===== Pricing Table Start ===== --> */}
      <section className="overflow-hidden pb-20 pt-15 lg:pb-25 xl:pb-30">
        <div className="relative mx-auto mt-15 max-w-[1207px] px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="flex flex-wrap justify-center gap-7.5 lg:flex-nowrap">
            {pricingData.map((conf, key) => (
              <PriceBanner key={key} conf={conf}>Testbanner</PriceBanner>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-7.5 lg:flex-nowrap ">
            {pricingData.map((conf, key) => (
              <PriceCard key={key} status={conf?.status}>
                <PriceCardHeader><ImagePlaceholder className="h-60"/></PriceCardHeader>
                <PriceCardContent conf={conf}>asdasdasd</PriceCardContent>
              </PriceCard>
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Pricing Table End ===== --> */}
    </>
  );
};

export default Pricing;
