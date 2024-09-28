import { cn } from "@/lib/utils";
import { Rating } from "@/types/rating";
import React, { ReactNode } from "react";
import WhiteStars from "./WhiteStar";
import YellowStars from "./YellowStar";

const UserRating = ({ rating, children }: { rating: Rating, children?: ReactNode }) => {

    const getYellowStars = (stars: number) => {
        let count = 0;
        let yStars = [];
        while (count < stars) {
            yStars.push(<YellowStars/>);
            count++;
        }
        return yStars;
    }

    const getWhiteStars = (stars: number) => {
        let count = 5 - stars;
        let wStars = [];
        for (let i = 0; i < count; i++) {
            wStars.push(<WhiteStars/>);
        }
        return wStars;
    }

    return (
        <>
            <div className="animate_top group relative rounded-lg border border-stroke bg-white mt-10 p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none w-full">
                <article>
                    <div className="flex items-center mb-4">
                        <div className="font-medium dark:text-white">
                            <p>{rating.user}<time className="block text-sm text-gray-500 dark:text-gray-400">{rating.date}</time></p>
                        </div>
                    </div>
                    <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
                        {getYellowStars(rating.stars)}
                        {getWhiteStars(rating.stars)}
                    </div>
                        <h3 className="py-4 text-sm font-semibold text-gray-900 dark:text-white">{rating.title}</h3>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">{rating.comment}</p>
                    <aside>
                        <div className="flex items-center mt-3">
                            {children}
                        </div>
                    </aside>
                </article>

            </div>
        </>
    );
};

export default UserRating;
