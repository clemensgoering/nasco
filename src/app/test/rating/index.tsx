"use client";
import UserRating from "@/components/Rating/Rating";
import Image from "next/image";
import ratingData from "./ratingData";

const Rating = () => {
    return (
        <>
            {/* <!-- ===== Pricing Table Start ===== --> */}
            <section id="features" className="pb-20 lg:pb-25 xl:pb-30">
                <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
                    <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-1 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
                        {ratingData.map((rating, key) => (
                            <UserRating rating={rating} key={key}>Test</UserRating>
                        ))}
                    </div>
                </div>
            </section>
            {/* <!-- ===== Pricing Table End ===== --> */}
        </>
    );
};

export default Rating;
