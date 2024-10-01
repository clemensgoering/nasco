import { GitHubLogoIcon, HomeIcon } from "@radix-ui/react-icons";
import menuData from "../menuData";
import Header from "@/components/Header/Header";
import Button from "@/components/Button/Button";
import React from "react";

const HeaderElement = () => {
  return (
    <>
      <Header config={{
        homeNode: <HomeIcon className="h-6 w-6 mt-1"></HomeIcon>,
        menu: menuData,
        themeToggler: true
      }}>
        <Button config={{ style: "link" }}><GitHubLogoIcon className="mr-2"/>Repo</Button>
      </Header>
    </>
  );
};

export default HeaderElement;
