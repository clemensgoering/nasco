import { GitHubLogoIcon, HomeIcon } from "@radix-ui/react-icons";
import menuData from "../menuData";
import Header from "@/components/Header/Header";
import Button from "@/components/Button/Button";
import React from "react";

const HeaderElement = () => {
  return (
    <Header logo={<HomeIcon className="mt-1 h-6 w-6" />} menu={menuData} themeToggler>
      <Button variant="link" href="https://github.com/clemensgoering/nasco">
        <GitHubLogoIcon className="mr-2" />
        Repo
      </Button>
    </Header>
  );
};

export default HeaderElement;
