import LTR from "@/components/Section/LTR";
import RTL from "@/components/Section/RTL";
import React from "react";

export default function Sections() {
  return (
    <>
      <RTL
        topTitle="Right-to-Left"
        title="Lorem ipsum dolor sit "
        subTitle="Week"
        content="Lorem ipsum dolor sit amet, consectetur adipiscingLorem ipsum dolor sit amet, consectetur adipiscing"
        button={{ link: "#", text: "Learn More" }}
      />
      <LTR
        topTitle="Left-To-Right"
        title="Lorem ipsum dolor sit amet "
        subTitle="Week"
        content="Lorem ipsum dolor sit amet, consectetur adipiscingLorem ipsum dolor sit amet, consectetur adipiscing"
        button={{ link: "#", text: "Learn More" }}
      />
    </>
  );
}
