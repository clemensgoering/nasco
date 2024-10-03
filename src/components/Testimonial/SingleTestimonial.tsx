import { Testimonial } from "@/types/testimonial";
import ImagePlaceholder from "../Placeholder/Image";
import { cn } from "@/lib/utils";

const SingleTestimonial = ({ review, className }: { review: Testimonial, className?:string }) => {
  const { name, designation, image, content } = review;
  return (
    <div className={cn("rounded-lg mb-12 p-9 pt-7.5 shadow-solid-9 dark:border dark:border-strokedark dark:bg-blacksection dark:shadow-none", className)}>
      <div className="mb-7.5 flex justify-between border-b border-stroke pb-6 dark:border-strokedark">
        <div>
          <h3 className="mb-1.5 text-metatitle3 text-black dark:text-white">
            {name}
          </h3>
          <p>{designation}</p>
        </div>
        { review?.image ? image : <ImagePlaceholder className="w-10 h-10 rounded-full right-10 absolute"/>}
      </div>

      <p>{content}</p>
    </div>
  );
};

export default SingleTestimonial;
