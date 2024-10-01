"use client";

import { HeroImage, HeroSimple } from "@/components/Hero/Hero";
import ImagePlaceholder from "@/components/Placeholder/Image";

const HeroSection = () => {
  return (
    <>
      <HeroSimple config={{
        jumbotron: { link: "#", text: "New Features" },
        title: "Lorem Ipsum at once ad minim veniam null ad minim veniam",
        subTitle: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. "
      }} />
      <HeroImage config={{
        jumbotron: { link: "#", text: "New Features" },
        title: "Lorem Ipsum at once ad minim veniam null ad minim veniam",
        subTitle: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. "
      }}><ImagePlaceholder className="h-96" /></HeroImage>
    </>
  );
};

export default HeroSection;
