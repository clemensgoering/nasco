import { Metadata } from "next";
import Pricing from "./test/pricing";
import Sections from "./test/section";
import Rating from "./test/rating";

export const metadata: Metadata = {
    title: "Home - Nasco",
    description: "Testing Components",
    // other metadata
};

export default function Home() {
    return (
        <main>
            <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
                <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
                    <Sections/>
                    <Pricing/>
                    <Rating/>
                </div>
            </section>
        </main>
    );
}


