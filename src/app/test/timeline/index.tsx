
import Timeline from "@/components/Timeline/Timeline";
import React from "react";
import timelineData from "./timelineData";
import LTR from "@/components/Section/LTR";
export default function TimelinePage() {

    return (

        <section className=" w-full items-center justify-between col-span-10 lg:col-span-8  py-12">
            <LTR config={{
                title: "List ",
                subTitle: "Details",
                content: <Timeline items={timelineData} />
            }}/>
            
        </section>
    );
}


