import ImagePlaceholder from "../../Placeholder/Image";
import { ReactNode } from "react";


const PriceCardHeader = ({ children }: { children?: ReactNode }) => {
  return (

        <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
          { children === undefined ? <ImagePlaceholder className="h-52 w-full mx-auto"/> : children }
        </h3>
  );
};

export default PriceCardHeader;
