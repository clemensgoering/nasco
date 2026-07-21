import React from "react";
import Image from "next/image";
import ImagePlaceholder from "../Placeholder/Image";
import { cn } from "@/lib/utils";
import { Testimonial } from "@/types/testimonial";

export interface SingleTestimonialProps {
  testimonial: Testimonial;
  className?: string;
}

/** Card presenting one testimonial with author, role and avatar. */
const SingleTestimonial = ({ testimonial, className }: SingleTestimonialProps) => {
  const { name, designation, image, content } = testimonial;

  return (
    <div
      className={cn(
        "mb-12 rounded-lg p-9 pt-7.5 shadow-solid-9 dark:border dark:border-strokedark dark:bg-blacksection dark:shadow-none",
        className,
      )}
    >
      <div className="mb-7.5 flex justify-between border-b border-stroke pb-6 dark:border-strokedark">
        <div>
          <h3 className="mb-1.5 text-metatitle3 text-black dark:text-white">{name}</h3>
          <p>{designation}</p>
        </div>
        {image ? (
          <div className="relative h-12 w-12">
            <Image src={image} alt={name} fill className="rounded-full object-cover" />
          </div>
        ) : (
          <ImagePlaceholder className="h-10 w-10 rounded-full" />
        )}
      </div>

      <p>{content}</p>
    </div>
  );
};

export default SingleTestimonial;
