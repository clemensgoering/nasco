import { ReactNode } from "react";

export type SectionConfig = {
    showBackgroundImage?: Boolean;
    topTitle?: string;
    title?: string;
    subTitle?: string;
    content?: ReactNode;
    buttonConfig?: SectionButton;
    Image?: ReactNode;
  };

  export type SectionButton = {
    link?: string;
    text?: string;
  };
  