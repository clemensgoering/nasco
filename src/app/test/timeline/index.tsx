import Timeline from "@/components/Timeline/Timeline";
import React from "react";
import timelineData from "./timelineData";
import LTR from "@/components/Section/LTR";

export default function TimelinePage() {
  return (
    <section className="col-span-10 w-full items-center justify-between py-12 lg:col-span-8">
      <LTR title="List " subTitle="Details" content={<Timeline items={timelineData} />} />
    </section>
  );
}
