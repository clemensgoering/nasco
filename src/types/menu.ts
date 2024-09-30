import { ReactNode } from "react";

export type MenuConfig = {
  homeNode?: ReactNode;
  menu: Menu[];
  themeToggler?: Boolean;
};


export type Menu = {
  id: number;
  title: string;
  path?: string;
  newTab: boolean;
  submenu?: Menu[];
};
