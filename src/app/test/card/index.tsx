"use client";
import Image from "next/image";
import cardData from "./cardData";
import Card from "@/components/Card/Card";

const Cards = () => {
  return (
    <>
      <section className="overflow-hidden pb-20 pt-15 lg:pb-25 xl:pb-30">
          <div className="flex flex-wrap justify-center gap-7.5 lg:flex-nowrap">
            {cardData.map((card, key) => (
              <Card key={key} config={card}/>
            ))}
        </div>
      </section>
    </>
  );
};

export default Cards;
