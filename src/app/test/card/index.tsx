import cardData from "./cardData";
import Card from "@/components/Card/Card";
import React from "react";

const Cards = () => {
  return (
    <>
      <section className="overflow-hidden pb-20 pt-15 lg:pb-25 xl:pb-30">
          <div className="flex flex-wrap justify-center gap-7.5 lg:flex-nowrap">
            {cardData.map((card, key) => (
              <Card key={key} config={card}/>
            ))}
                    <Card config={{ title: "Maintenance & Performance", menuItems: []}}>
                        <ul>
                            <li>Our component library provides modular, reusable components that allow teams to easily scale large applications</li>,
                            <li>Simplified and reduced set of dependencies to keep the costs of needed assets low</li>,
                            <li>With TypeScript support and structured documentation, understanding and using the components becomes easier</li>
                        </ul>
                    </Card>
        </div>
      </section>
    </>
  );
};

export default Cards;
