export type SectionConfig = {
    showBackgroundImage?: Boolean;
    topTitle?: string;
    title?: string;
    subTitle?: string;
    content?: string;
    buttonConfig?: SectionButton;
    Image?: any;
  };

  export type SectionButton = {
    link?: string;
    text?: string;
  };
  