import React from "react";
import Image from "next/image";
import ImagePlaceholder from "@/components/Placeholder/Image";
import { Testimonial } from "@/types/testimonial";

/** Single cell of the testimonial grid. */
const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <figure className="flex flex-col rounded-t-lg border-b border-gray-200 bg-white p-8 dark:border-gray-700 dark:bg-gray-800 md:rounded-t-none md:rounded-ss-lg md:border-e">
    {testimonial.image ? (
      <div className="relative h-12 w-12">
        <Image
          className="rounded-full object-cover opacity-65 transition-all duration-300 hover:opacity-100"
          src={testimonial.image}
          alt={testimonial.name}
          fill
        />
      </div>
    ) : (
      <ImagePlaceholder className="h-12 w-12 rounded-full" />
    )}
    <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 dark:text-gray-400 lg:mb-8">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{testimonial.title}</h3>
      <p className="my-4">{testimonial.content}</p>
    </blockquote>
    <figcaption className="flex items-center justify-between font-medium dark:text-white">
      <div>{testimonial.name}</div>
      <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.designation}</div>
    </figcaption>
  </figure>
);

export default TestimonialCard;
