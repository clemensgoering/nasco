"use client";

import Header from "@/components/Header";
import { GitHubLogoIcon, HomeIcon } from "@radix-ui/react-icons";
import menuData from "../menuData";
import Button from "@/components/Button";

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