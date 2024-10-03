import ImagePlaceholder from "@/components/Placeholder/Image";
import { Testimonial } from "@/types/testimonial";
import Image from "next/image";

const TestimonialCard = ({ review }: { review: Testimonial }) => {
    return (
        <div className="flex flex-col p-8 bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
            {review.image ? (
                <div className="justify-center">
                    <Image
                        className="opacity-65 transition-all duration-300 hover:opacity-100 dark:hidden"
                        src={review.image}
                        alt={review.name}
                    />
                </div>
            ) : <ImagePlaceholder className="h-12 w-12 rounded-full"/>}
            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{review.title}</h3>
                <p className="my-4">{review.content}</p>
            </blockquote>
            <div className="grid grid-cols-2">
                <div className="group">
                    <figcaption className="flex items-start justify-start ">
                        <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                            <div>{review.name}</div>
                        </div>
                    </figcaption>
                </div>

                <div className="group">
                    <figcaption className="flex items-end justify-end ">
                        <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                            <div className="text-sm text-gray-500 dark:text-gray-400 ">{review.designation}</div>
                        </div>
                    </figcaption>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
