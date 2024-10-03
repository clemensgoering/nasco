 
import { Testimonial } from "@/types/testimonial";
import TestimonialCard from "./TestimonialCard";

const TestimonialGrid = ({ data }: { data: Testimonial[] }) => {
  return (

    <section>

        {/* <!-- Slider main container --> */}
        {/* <!-- Additional required wrapper --> */}
        <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm grid-cols-1 dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
          {data.map((review, key) => (
            <TestimonialCard key={key} review={review} />
          ))}
        </div>
      </section>
  );
};

export default TestimonialGrid;
