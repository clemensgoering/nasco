// src/components/Button/Button.tsx
import React2 from "react";

// src/lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/components/Button/Button.tsx
var Button = ({ className, config, children }) => {
  const btnCSS = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-neutral-300";
  const style = {
    default: "bg-slate-500 text-neutral-50 shadow hover:bg-slate-500/90 dark:bg-slate-600 dark:text-neutral-100 dark:hover:bg-black dark:hover:text-neutral-500",
    outlined: "border border-neutral-200 bg-white shadow-sm hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-blacksection dark:hover:bg-blackho dark:hover:text-neutral-50",
    link: "text-neutral-900 underline-offset-4 hover:bg-blue-200 dark:hover:bg-blue-400 dark:text-neutral-50"
  };
  const size = {
    default: "h-9 px-4 py-2",
    sm: "h-8 rounded-md px-3 text-xs",
    lg: "h-10 rounded-md px-8"
  };
  function getStyle(s) {
    switch (s) {
      case "default":
        return style.default;
        break;
      case "outlined":
        return style.outlined;
        break;
      case "link":
        return style.link;
        break;
      default:
        return style.default;
    }
  }
  function getSize(s) {
    switch (s) {
      case "default":
        return size.default;
        break;
      case "sm":
        return size.sm;
        break;
      case "lg":
        return size.lg;
        break;
      default:
        return size.default;
    }
  }
  return /* @__PURE__ */ React2.createElement(React2.Fragment, null, /* @__PURE__ */ React2.createElement("button", { className: cn(btnCSS, getStyle(config == null ? void 0 : config.style), getSize(config == null ? void 0 : config.size), className) }, children));
};
var Button_default = Button;

// src/components/Header/Header.tsx
import React4 from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// src/components/Header/ThemeToggler.tsx
import React3 from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { clsx as clsx2 } from "clsx";
var ThemeToggler = ({ className }) => {
  const { theme, setTheme } = useTheme();
  return /* @__PURE__ */ React3.createElement(
    "button",
    {
      "aria-label": "theme toggler",
      onClick: () => setTheme(theme === "dark" ? "light" : "dark"),
      className: clsx2("bg-gray-2 dark:bg-dark-bg absolute right-17 mr-1.5 flex cursor-pointer items-center justify-center rounded-full text-black dark:text-white lg:static", className)
    },
    /* @__PURE__ */ React3.createElement(
      Image,
      {
        src: "/images/icon/icon-moon.svg",
        alt: "logo",
        width: 21,
        height: 21,
        className: "dark:hidden"
      }
    ),
    /* @__PURE__ */ React3.createElement(
      Image,
      {
        src: "/images/icon/icon-sun.svg",
        alt: "logo",
        width: 22,
        height: 22,
        className: "hidden dark:block"
      }
    )
  );
};
var ThemeToggler_default = ThemeToggler;

// src/components/Header/Header.tsx
var Header = ({ config, children }) => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [dropdownToggler, setDropdownToggler] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
  const pathUrl = usePathname();
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
  });
  return /* @__PURE__ */ React4.createElement(
    "header",
    {
      className: `fixed left-0 top-0 z-99999 w-full py-4 ${stickyMenu ? "bg-white !py-4 shadow transition duration-100 dark:bg-black" : ""}`
    },
    /* @__PURE__ */ React4.createElement("div", { className: "relative mx-auto max-w-c-1390 items-center justify-between px-4 md:px-8 xl:flex 2xl:px-0" }, /* @__PURE__ */ React4.createElement("div", { className: "flex w-full items-center justify-between xl:w-1/4" }, /* @__PURE__ */ React4.createElement("a", { href: config == null ? void 0 : config.menu[0].path, className: "flex my-auto" }, config == null ? void 0 : config.homeNode), /* @__PURE__ */ React4.createElement(
      "button",
      {
        "aria-label": "hamburger Toggler",
        className: "block xl:hidden",
        onClick: () => setNavigationOpen(!navigationOpen)
      },
      /* @__PURE__ */ React4.createElement("span", { className: "relative block h-5.5 w-5.5 cursor-pointer" }, /* @__PURE__ */ React4.createElement("span", { className: "absolute right-0 block h-full w-full" }, /* @__PURE__ */ React4.createElement(
        "span",
        {
          className: `relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${!navigationOpen ? "!w-full delay-300" : "w-0"}`
        }
      ), /* @__PURE__ */ React4.createElement(
        "span",
        {
          className: `relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${!navigationOpen ? "delay-400 !w-full" : "w-0"}`
        }
      ), /* @__PURE__ */ React4.createElement(
        "span",
        {
          className: `relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${!navigationOpen ? "!w-full delay-500" : "w-0"}`
        }
      )), /* @__PURE__ */ React4.createElement("span", { className: "du-block absolute right-0 h-full w-full rotate-45" }, /* @__PURE__ */ React4.createElement(
        "span",
        {
          className: `absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${!navigationOpen ? "!h-0 delay-[0]" : "h-full"}`
        }
      ), /* @__PURE__ */ React4.createElement(
        "span",
        {
          className: `delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${!navigationOpen ? "!h-0 delay-200" : "h-0.5"}`
        }
      )))
    )), /* @__PURE__ */ React4.createElement(
      "div",
      {
        className: `invisible h-0 w-full items-center justify-between xl:visible xl:flex xl:h-auto xl:w-full ${navigationOpen && "navbar !visible mt-4 h-auto max-h-[400px] rounded-md  p-7.5 shadow-solid-5 dark:bg-blacksection xl:h-auto xl:p-0 xl:shadow-none xl:dark:bg-transparent"}`
      },
      /* @__PURE__ */ React4.createElement("nav", null, (config == null ? void 0 : config.menu) !== void 0 ? /* @__PURE__ */ React4.createElement("ul", { className: "flex flex-col gap-5 xl:flex-row xl:items-center xl:gap-10" }, config == null ? void 0 : config.menu.map((menuItem, key) => /* @__PURE__ */ React4.createElement("li", { key, className: menuItem.submenu && "group relative" }, menuItem.submenu ? /* @__PURE__ */ React4.createElement(React4.Fragment, null, /* @__PURE__ */ React4.createElement(
        "button",
        {
          onClick: () => setDropdownToggler(!dropdownToggler),
          className: "flex cursor-pointer items-center justify-between gap-3 hover:text-primary"
        },
        menuItem.title,
        /* @__PURE__ */ React4.createElement("span", null, /* @__PURE__ */ React4.createElement(
          "svg",
          {
            className: "h-3 w-3 cursor-pointer fill-waterloo group-hover:fill-primary",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512"
          },
          /* @__PURE__ */ React4.createElement("path", { d: "M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" })
        ))
      ), /* @__PURE__ */ React4.createElement(
        "ul",
        {
          className: `dropdown ${dropdownToggler ? "flex" : ""}`
        },
        menuItem.submenu.map((item, key2) => /* @__PURE__ */ React4.createElement("li", { key: key2 }, /* @__PURE__ */ React4.createElement(Link, { href: item.path || "#" }, item.title)))
      )) : /* @__PURE__ */ React4.createElement(
        Link,
        {
          href: `${menuItem.path}`,
          className: pathUrl === menuItem.path ? "text-blacksection dark:text-white" : "hover:text-blacksection hover:font-medium dark:hover:text-white"
        },
        menuItem.title
      )))) : ""),
      /* @__PURE__ */ React4.createElement("div", { className: "mt-7 flex items-center gap-6 xl:mt-0" }, children, (config == null ? void 0 : config.themeToggler) !== void 0 && (config == null ? void 0 : config.themeToggler) === true ? /* @__PURE__ */ React4.createElement(ThemeToggler_default, null) : "")
    ))
  );
};
var Header_default = Header;

// src/components/Hero/Hero.tsx
import React5 from "react";
var HeroSimple = ({ className, config, children }) => {
  return /* @__PURE__ */ React5.createElement(React5.Fragment, null, /* @__PURE__ */ React5.createElement("section", { className: cn("bg-white h-screen dark:bg-gray-900 bg-[url('/images/shape/shape-dotted-light.svg')] dark:bg-[url('/images/shape/shape-dotted-dark.svg')]", className) }, /* @__PURE__ */ React5.createElement("div", { className: "py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative" }, (config == null ? void 0 : config.jumbotron) !== void 0 ? /* @__PURE__ */ React5.createElement("a", { href: config.jumbotron.link, className: "mt-[15%] p-2 px-6 inline-flex justify-between items-center mb-7 text-sm text-blue-700 bg-slate-100 rounded-full dark:bg-blacksection dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800" }, /* @__PURE__ */ React5.createElement("span", { className: "text-sm font-medium" }, config.jumbotron.text), /* @__PURE__ */ React5.createElement("svg", { className: "w-2.5 h-2.5 ms-2 rtl:rotate-180", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 6 10" }, /* @__PURE__ */ React5.createElement("path", { stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "m1 9 4-4-4-4" }))) : "", /* @__PURE__ */ React5.createElement("h1", { className: "pt-15 mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white" }, config == null ? void 0 : config.title), /* @__PURE__ */ React5.createElement("div", { className: "pt-10 mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200" }, config == null ? void 0 : config.subTitle), /* @__PURE__ */ React5.createElement("div", { className: "pt-10 w-full max-w-md mx-auto" }, children))));
};
var HeroImage = ({ className, config, children }) => {
  return /* @__PURE__ */ React5.createElement(React5.Fragment, null, /* @__PURE__ */ React5.createElement("section", { className: cn("overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46", className) }, /* @__PURE__ */ React5.createElement("div", { className: "mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0" }, /* @__PURE__ */ React5.createElement("div", { className: "flex lg:items-center lg:gap-8 xl:gap-32.5" }, /* @__PURE__ */ React5.createElement("div", { className: " md:w-1/2" }, /* @__PURE__ */ React5.createElement("h1", { className: "mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero " }, /* @__PURE__ */ React5.createElement("span", { className: "relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark " }, config.title)), /* @__PURE__ */ React5.createElement("p", null, config == null ? void 0 : config.subTitle), (config == null ? void 0 : config.jumbotron) !== void 0 ? /* @__PURE__ */ React5.createElement("a", { href: config.jumbotron.link, className: "mt-[15%] p-2 px-6 inline-flex justify-between items-center mb-7 text-sm text-blue-700 bg-slate-100 rounded-full dark:bg-blacksection dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800" }, /* @__PURE__ */ React5.createElement("span", { className: "text-sm font-medium" }, config.jumbotron.text), /* @__PURE__ */ React5.createElement("svg", { className: "w-2.5 h-2.5 ms-2 rtl:rotate-180", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 6 10" }, /* @__PURE__ */ React5.createElement("path", { stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "m1 9 4-4-4-4" }))) : ""), /* @__PURE__ */ React5.createElement("div", { className: "animate_right hidden md:w-1/2 lg:block" }, /* @__PURE__ */ React5.createElement("div", { className: "relative 2xl:-mr-7.5" }, children))))));
};

// src/components/Card/Card.tsx
import React6 from "react";
import { useState as useState2 } from "react";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
var Card = ({ className, config, children }) => {
  var _a, _b, _c;
  const [menustatus, setMenu] = useState2("hidden");
  const variants = {
    default: "flex relative rounded-lg border border-stroke bg-white mt-10 p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none w-full",
    minimal: "flex relative rounded-xl border border-neutral-200 mt-10 p-7.5 bg-white text-neutral-950 shadow dark:border-neutral-800 dark:bg-blacksection dark:text-gray-200 w-full"
  };
  function getVariant(variant) {
    switch (variant) {
      case "default":
        return variants.default;
        break;
      case "minimal":
        return variants.minimal;
        break;
      default:
        return variants.default;
    }
  }
  function toggleMenu() {
    menustatus === "hidden" ? setMenu("block") : setMenu("hidden");
  }
  return /* @__PURE__ */ React6.createElement(React6.Fragment, null, /* @__PURE__ */ React6.createElement("div", { className: cn(getVariant(config == null ? void 0 : config.variant), className) }, /* @__PURE__ */ React6.createElement("div", { className: "flex-1 w-full" }, (config == null ? void 0 : config.title) !== void 0 ? /* @__PURE__ */ React6.createElement("h3", { className: "relative mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3" }, config == null ? void 0 : config.title) : ""), ((_a = config == null ? void 0 : config.menuItems) == null ? void 0 : _a.length) !== void 0 && ((_b = config == null ? void 0 : config.menuItems) == null ? void 0 : _b.length) > 0 ? /* @__PURE__ */ React6.createElement("div", { className: "flex-none justify-end " }, /* @__PURE__ */ React6.createElement("button", { id: "dropdownButton", onClick: () => toggleMenu(), "data-dropdown-toggle": "dropdown", className: "inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm p-1.5", type: "button" }, /* @__PURE__ */ React6.createElement("span", { className: "sr-only" }, "Open dropdown"), /* @__PURE__ */ React6.createElement(DotsVerticalIcon, null)), /* @__PURE__ */ React6.createElement("div", { id: "dropdown", className: `absolute right-2 top-15 shadow-md border z-10 text-base list-none ${menustatus} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700` }, /* @__PURE__ */ React6.createElement("ul", { className: "py-2", "aria-labelledby": "dropdownButton" }, /* @__PURE__ */ React6.createElement("li", null, (_c = config == null ? void 0 : config.menuItems) == null ? void 0 : _c.map((node, key) => node))))) : "", children));
};
var Card_default = Card;

// src/components/Placeholder/Image.tsx
import React7 from "react";
import { ImageIcon } from "@radix-ui/react-icons";
var ImagePlaceholder = ({ className, gradient }) => {
  return /* @__PURE__ */ React7.createElement(React7.Fragment, null, /* @__PURE__ */ React7.createElement("div", { className: cn(`inline-flex items-center justify-center shadow-sm ${gradient === "top" || gradient === void 0 ? "bg-gradient-to-t" : "bg-gradient-to-r"} from-[#dadae0] to-[#ebecf13d] dark:bg-slate-500 rounded-md  h-full w-full px-4 py-2 mx-auto`, className) }, /* @__PURE__ */ React7.createElement(ImageIcon, { className: "h-10 w-10 text-slate-300 rounded-md object-cover" })));
};
var Image_default = ImagePlaceholder;

// src/components/Price/PriceCard/PriceCard.tsx
import React8 from "react";
var PriceCard = ({ className, status, children }) => {
  return /* @__PURE__ */ React8.createElement(React8.Fragment, null, /* @__PURE__ */ React8.createElement("div", { className: cn("animate_top group relative rounded-lg border border-stroke bg-white mt-10 p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none w-full", className) }, /* @__PURE__ */ React8.createElement("div", { className: `absolute px-4.5 py-1.5 right-0 shadow-md
          ${status === "new" ? "top-4" : ""} ${status === "popular" ? "top-7.5" : ""} ${status === "sale" ? "top-4" : ""}
          -rotate-90 rounded-bl-full rounded-tl-full ${status === "new" ? "bg-lime-500" : ""} ${status === "popular" ? "bg-primary" : ""} ${status === "sale" ? "bg-red-500" : ""}  text-metatitle font-medium uppercase text-white` }, status === "new" ? "New" : "", status === "popular" ? "Popular" : "", status === "sale" ? "Sale" : ""), children));
};
var PriceCardContent = ({ className, conf, children }) => {
  var _a, _b;
  return /* @__PURE__ */ React8.createElement(React8.Fragment, null, /* @__PURE__ */ React8.createElement("h4", { className: cn("mb-2.5 text-para2 font-medium text-black dark:text-white", className) }, conf.title), /* @__PURE__ */ React8.createElement("p", null, conf.description), children, (conf == null ? void 0 : conf.priceButton) !== void 0 ? /* @__PURE__ */ React8.createElement(
    "a",
    {
      href: (_a = conf == null ? void 0 : conf.priceButton) == null ? void 0 : _a.link,
      "aria-label": "Get the Plan button",
      className: "group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary pt-10"
    },
    /* @__PURE__ */ React8.createElement("span", { className: "duration-300 group-hover/btn:pr-2" }, (_b = conf == null ? void 0 : conf.priceButton) == null ? void 0 : _b.text),
    /* @__PURE__ */ React8.createElement(
      "svg",
      {
        width: "14",
        height: "14",
        viewBox: "0 0 14 14",
        xmlns: "http://www.w3.org/2000/svg"
      },
      /* @__PURE__ */ React8.createElement(
        "path",
        {
          d: "M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z",
          fill: "currentColor"
        }
      )
    )
  ) : "");
};
var PriceCardHeader = ({ className, children }) => {
  return /* @__PURE__ */ React8.createElement("h3", { className: cn("mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3", className) }, children === void 0 ? /* @__PURE__ */ React8.createElement(Image_default, { className: "h-52 w-full mx-auto" }) : children);
};

// src/components/Price/PriceBanner.tsx
import React9 from "react";
var PriceBanner = ({ className, conf, children }) => {
  var _a, _b;
  return /* @__PURE__ */ React9.createElement(React9.Fragment, null, /* @__PURE__ */ React9.createElement("div", { className: cn("animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none w-full", className) }, /* @__PURE__ */ React9.createElement("div", { className: `absolute px-4.5 py-1.5 right-0 shadow-md
          ${conf.status === "new" ? "top-4" : ""} ${conf.status === "popular" ? "top-7.5" : ""} ${conf.status === "sale" ? "top-4" : ""}
          -rotate-90 rounded-bl-full rounded-tl-full ${conf.status === "new" ? "bg-lime-500" : ""} ${conf.status === "popular" ? "bg-primary" : ""} ${conf.status === "sale" ? "bg-red-500" : ""}  text-metatitle font-medium uppercase text-white` }, conf.status === "new" ? "New" : "", conf.status === "popular" ? "Popular" : "", conf.status === "sale" ? "Sale" : ""), /* @__PURE__ */ React9.createElement("h3", { className: "mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3" }, conf.price, /* @__PURE__ */ React9.createElement("span", { className: "text-regular text-waterloo dark:text-manatee" }, conf.period)), /* @__PURE__ */ React9.createElement("h4", { className: "mb-2.5 text-para2 font-medium text-black dark:text-white" }, conf.title), /* @__PURE__ */ React9.createElement("p", null, conf.description), /* @__PURE__ */ React9.createElement("div", { className: "mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark" }, /* @__PURE__ */ React9.createElement("ul", null, conf.items.map((item, key) => /* @__PURE__ */ React9.createElement("li", { className: "mb-4 text-black last:mb-0 dark:text-manatee" }, item)))), (conf == null ? void 0 : conf.priceButton) !== void 0 ? /* @__PURE__ */ React9.createElement(
    "a",
    {
      href: (_a = conf == null ? void 0 : conf.priceButton) == null ? void 0 : _a.link,
      "aria-label": "Get the Plan button",
      className: "group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"
    },
    /* @__PURE__ */ React9.createElement("span", { className: "duration-300 group-hover/btn:pr-2" }, (_b = conf == null ? void 0 : conf.priceButton) == null ? void 0 : _b.text),
    /* @__PURE__ */ React9.createElement(
      "svg",
      {
        width: "14",
        height: "14",
        viewBox: "0 0 14 14",
        xmlns: "http://www.w3.org/2000/svg"
      },
      /* @__PURE__ */ React9.createElement(
        "path",
        {
          d: "M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z",
          fill: "currentColor"
        }
      )
    )
  ) : "", /* @__PURE__ */ React9.createElement("div", { className: "w-full" }, children)));
};
var PriceBanner_default = PriceBanner;

// src/components/Rating/Rating.tsx
import React12 from "react";

// src/components/Rating/WhiteStar.tsx
import React10 from "react";
var WhiteStars = () => {
  return /* @__PURE__ */ React10.createElement("svg", { className: "w-4 h-4 text-gray-300 dark:text-gray-500", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", viewBox: "0 0 22 20" }, /* @__PURE__ */ React10.createElement("path", { d: "M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" }));
};
var WhiteStar_default = WhiteStars;

// src/components/Rating/YellowStar.tsx
import React11 from "react";
var YellowStars = () => {
  return /* @__PURE__ */ React11.createElement("svg", { className: "w-4 h-4 text-yellow-300", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", viewBox: "0 0 22 20" }, /* @__PURE__ */ React11.createElement("path", { d: "M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" }));
};
var YellowStar_default = YellowStars;

// src/components/Rating/Rating.tsx
var UserRating = ({ className, rating, children }) => {
  const getYellowStars = (stars) => {
    let count = 0;
    let yStars = [];
    while (count < stars) {
      yStars.push(/* @__PURE__ */ React12.createElement(YellowStar_default, { key: count }));
      count++;
    }
    return yStars;
  };
  const getWhiteStars = (stars) => {
    let count = 5 - stars;
    let wStars = [];
    for (let i = 0; i < count; i++) {
      wStars.push(/* @__PURE__ */ React12.createElement(WhiteStar_default, { key: count }));
    }
    return wStars;
  };
  return /* @__PURE__ */ React12.createElement(React12.Fragment, null, /* @__PURE__ */ React12.createElement("div", { className: cn("animate_top group relative rounded-lg border border-stroke bg-white mt-10 p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none w-full", className) }, /* @__PURE__ */ React12.createElement("article", null, /* @__PURE__ */ React12.createElement("div", { className: "flex items-center mb-4" }, /* @__PURE__ */ React12.createElement("div", { className: "font-medium dark:text-white" }, /* @__PURE__ */ React12.createElement("p", null, rating.user, /* @__PURE__ */ React12.createElement("time", { className: "block text-sm text-gray-500 dark:text-gray-400" }, rating.date)))), /* @__PURE__ */ React12.createElement("div", { className: "flex items-center mb-1 space-x-1 rtl:space-x-reverse" }, getYellowStars(rating.stars), getWhiteStars(rating.stars)), /* @__PURE__ */ React12.createElement("h3", { className: "py-4 text-sm font-semibold text-gray-900 dark:text-white" }, rating.title), /* @__PURE__ */ React12.createElement("p", { className: "mb-2 text-gray-500 dark:text-gray-400" }, rating.comment), /* @__PURE__ */ React12.createElement("aside", null, /* @__PURE__ */ React12.createElement("div", { className: "flex items-center mt-3" }, children)))));
};
var Rating_default = UserRating;

// src/components/Section/RTL.tsx
import React13 from "react";
import Image2 from "next/image";
var RTL = ({ className, config, children }) => {
  var _a, _b;
  return /* @__PURE__ */ React13.createElement(React13.Fragment, null, /* @__PURE__ */ React13.createElement("section", { className: cn("overflow-hidden pb-20 lg:pb-25 xl:pb-30", className) }, /* @__PURE__ */ React13.createElement("div", { className: "relative mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0" }, /* @__PURE__ */ React13.createElement("div", { className: "absolute -top-16 -z-1 mx-auto h-[350px] w-[90%]" }, config.showBackgroundImage ? /* @__PURE__ */ React13.createElement(React13.Fragment, null, /* @__PURE__ */ React13.createElement(
    Image2,
    {
      fill: true,
      className: "dark:hidden",
      src: "/images/shape/shape-dotted-light.svg",
      alt: "Dotted Shape"
    }
  ), /* @__PURE__ */ React13.createElement(
    Image2,
    {
      fill: true,
      className: "hidden dark:block",
      src: "/images/shape/shape-dotted-dark.svg",
      alt: "Dotted Shape"
    }
  )) : ""), /* @__PURE__ */ React13.createElement("div", { className: "mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0" }, /* @__PURE__ */ React13.createElement("div", { className: "flex items-center gap-8 lg:gap-32.5" }, /* @__PURE__ */ React13.createElement("div", { className: "animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2" }, (config == null ? void 0 : config.Image) === void 0 ? /* @__PURE__ */ React13.createElement(Image_default, null) : config == null ? void 0 : config.Image), /* @__PURE__ */ React13.createElement("div", { className: "animate_right md:w-1/2" }, /* @__PURE__ */ React13.createElement("h4", { className: "font-medium uppercase text-black dark:text-white" }, config == null ? void 0 : config.topTitle), /* @__PURE__ */ React13.createElement("h2", { className: "relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero" }, config == null ? void 0 : config.title, /* @__PURE__ */ React13.createElement("span", { className: "relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg2 dark:before:bg-titlebgdark" }, config == null ? void 0 : config.subTitle)), /* @__PURE__ */ React13.createElement("p", null, config == null ? void 0 : config.content), /* @__PURE__ */ React13.createElement("div", null, (config == null ? void 0 : config.buttonConfig) !== void 0 ? /* @__PURE__ */ React13.createElement("a", { href: (_a = config == null ? void 0 : config.buttonConfig) == null ? void 0 : _a.link, className: "group mt-7.5 inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary" }, /* @__PURE__ */ React13.createElement("span", { className: "duration-300 group-hover:pr-2" }, (_b = config == null ? void 0 : config.buttonConfig) == null ? void 0 : _b.text), /* @__PURE__ */ React13.createElement(
    "svg",
    {
      width: "14",
      height: "14",
      viewBox: "0 0 14 14",
      fill: "currentColor"
    },
    /* @__PURE__ */ React13.createElement("path", { d: "M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" })
  )) : "", /* @__PURE__ */ React13.createElement("div", { className: "w-full" }, children))))))));
};
var RTL_default = RTL;

// src/components/Section/LTR.tsx
import React14 from "react";
import Image3 from "next/image";
var LTR = ({ className, config, children }) => {
  var _a, _b;
  return /* @__PURE__ */ React14.createElement(React14.Fragment, null, /* @__PURE__ */ React14.createElement("div", { className: cn("relative mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0", className) }, /* @__PURE__ */ React14.createElement("div", { className: "absolute bottom-10 -z-1 mx-auto h-[80%] w-[70%]" }, config.showBackgroundImage ? /* @__PURE__ */ React14.createElement(React14.Fragment, null, /* @__PURE__ */ React14.createElement(
    Image3,
    {
      fill: true,
      className: "dark:hidden",
      src: "/images/shape/shape-dotted-light.svg",
      alt: "Dotted Shape"
    }
  ), /* @__PURE__ */ React14.createElement(
    Image3,
    {
      fill: true,
      className: "hidden dark:block",
      src: "/images/shape/shape-dotted-dark.svg",
      alt: "Dotted Shape"
    }
  )) : ""), /* @__PURE__ */ React14.createElement("div", { className: "mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0" }, /* @__PURE__ */ React14.createElement("div", { className: "flex items-center gap-8 lg:gap-32.5" }, /* @__PURE__ */ React14.createElement("div", { className: "md:w-1/2" }, /* @__PURE__ */ React14.createElement("h4", { className: "font-medium uppercase text-black dark:text-white" }, config == null ? void 0 : config.topTitle), /* @__PURE__ */ React14.createElement("h2", { className: "relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero" }, config == null ? void 0 : config.title, /* @__PURE__ */ React14.createElement("span", { className: "relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg2 dark:before:bg-titlebgdark" }, config == null ? void 0 : config.subTitle)), /* @__PURE__ */ React14.createElement("p", null, config == null ? void 0 : config.content), /* @__PURE__ */ React14.createElement("div", null, (config == null ? void 0 : config.buttonConfig) !== void 0 ? /* @__PURE__ */ React14.createElement("a", { href: (_a = config == null ? void 0 : config.buttonConfig) == null ? void 0 : _a.link, className: "group mt-7.5 inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary" }, /* @__PURE__ */ React14.createElement("span", { className: "duration-300 group-hover:pr-2" }, (_b = config == null ? void 0 : config.buttonConfig) == null ? void 0 : _b.text), /* @__PURE__ */ React14.createElement(
    "svg",
    {
      width: "14",
      height: "14",
      viewBox: "0 0 14 14",
      fill: "currentColor"
    },
    /* @__PURE__ */ React14.createElement("path", { d: "M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" })
  )) : "", /* @__PURE__ */ React14.createElement("div", { className: "w-full" }, children))), /* @__PURE__ */ React14.createElement("div", { className: "animate_right relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2" }, (config == null ? void 0 : config.Image) === void 0 ? /* @__PURE__ */ React14.createElement(Image_default, null) : config == null ? void 0 : config.Image)))));
};
var LTR_default = LTR;

// src/components/ShowCode/ShowCode.tsx
import { CodeIcon, DownloadIcon, InfoCircledIcon } from "@radix-ui/react-icons";
import { useEffect as useEffect2, useState as useState3 } from "react";
import { codeToHtml } from "shiki";
var ShowCode = ({ className, descriptionNode, code, language }) => {
  const cssActive = "font-bold text-blacksection dark:text-white";
  const cssInactive = "dark:hover:text-gray-300";
  const [descConf, setDescription] = useState3({ visibility: "block", selected: true, style: cssActive });
  const [codeConf, setCode] = useState3({ visibility: "hidden", selected: false, style: cssInactive });
  const [copy, setCopyCommand] = useState3("");
  const [transformedCode, setTransformedCode] = useState3("");
  useEffect2(() => {
    const fetchData = async () => {
      const html = await codeToHtml(code, {
        lang: language,
        themes: {
          light: "min-light",
          dark: "min-dark"
        },
        colorReplacements: {
          "#ffffff": "#f1f5f9",
          "#000000": "#262626"
        }
      });
      setTransformedCode(html);
    };
    fetchData();
  }, [code]);
  const toggleBlock = (block) => {
    switch (block) {
      case "default":
        setDescription({ visibility: "block", selected: true, style: cssActive });
        setCode({ visibility: "hidden", selected: false, style: cssInactive });
        break;
      case "code":
        setDescription({ visibility: "hidden", selected: false, style: cssInactive });
        setCode({ visibility: "block", selected: true, style: cssActive });
        break;
    }
  };
  const copyCode = () => {
    navigator.clipboard.writeText(code).then(
      () => {
        setCopyCommand("Copied to Clipboard");
        setTimeout(() => {
          setCopyCommand("");
        }, 2e3);
      },
      () => {
        setCopyCommand("Copied to Clipboard failed");
        setTimeout(() => {
          setCopyCommand("");
        }, 2e3);
      }
    );
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: cn("w-full bg-white border rounded-lg border-gray-200 shadow dark:bg-blacksection dark:border-gray-600", className) }, /* @__PURE__ */ React.createElement("ul", { className: "flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-tr-lg rounded-tl-lg dark:bg-blacksection dark:border-gray-700 dark:text-gray-400 bg-gray-50", id: "defaultTab", "data-tabs-toggle": "#defaultTabContent", role: "tablist" }, /* @__PURE__ */ React.createElement("li", { className: "flex-1" }), /* @__PURE__ */ React.createElement("li", { className: "flex-none" }, /* @__PURE__ */ React.createElement("button", { onClick: () => toggleBlock("default"), id: "defaultBtn", "data-tabs-target": "#about", type: "button", role: "tab", "aria-controls": "about", "aria-selected": descConf.selected, className: cn("flex  p-4 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700", descConf.style) }, /* @__PURE__ */ React.createElement(InfoCircledIcon, { className: "flex w-4.5 h-4.5 mr-2" }), "Description")), /* @__PURE__ */ React.createElement("li", { className: "flex-none" }, /* @__PURE__ */ React.createElement("button", { onClick: () => toggleBlock("code"), id: "codeBtn", "data-tabs-target": "#services", type: "button", role: "tab", "aria-controls": "services", "aria-selected": codeConf.selected, className: cn("flex  p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700", codeConf.style) }, "Show Code ", /* @__PURE__ */ React.createElement(CodeIcon, { className: "flex w-4.5 h-4.5 ml-2" }))), /* @__PURE__ */ React.createElement("li", { className: "flex-1" }), /* @__PURE__ */ React.createElement("li", { className: "flex-none" }, /* @__PURE__ */ React.createElement("div", { className: "inline-block p-4" }, copy)), /* @__PURE__ */ React.createElement("li", { className: "flex-none" }, /* @__PURE__ */ React.createElement("button", { onClick: () => copyCode(), id: "copyCodeBtn", "data-tabs-target": "#services", type: "button", role: "tab", "aria-controls": "services", className: "flex p-4 hover:text-gray-600 hover:bg-gray-100 rounded-tr-md rounded-br-md dark:hover:bg-gray-700" }, /* @__PURE__ */ React.createElement(DownloadIcon, { className: "w-4.5 h-5 " })))), /* @__PURE__ */ React.createElement("div", { id: "defaultTabContent" }, /* @__PURE__ */ React.createElement("div", { className: `${descConf.visibility} p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800`, id: "about", role: "tabpanel", "aria-labelledby": "about-tab" }, descriptionNode), /* @__PURE__ */ React.createElement("div", { className: `${codeConf.visibility} p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800`, id: "services", role: "tabpanel", "aria-labelledby": "services-tab" }, /* @__PURE__ */ React.createElement("div", { className: "flex relative rounded-xl border border-neutral-200 p-7.5 bg-slate-100 text-neutral-950 shadow dark:border-neutral-800 dark:bg-blacksection dark:text-gray-200 w-full" }, /* @__PURE__ */ React.createElement("div", { dangerouslySetInnerHTML: { __html: transformedCode } }))))));
};
var ShowCode_default = ShowCode;
export {
  Button_default as Button,
  Card_default as Card,
  Header_default as Header,
  HeroImage,
  HeroSimple,
  Image_default as Image,
  LTR_default as LTR,
  PriceBanner_default as PriceBanner,
  PriceCard,
  PriceCardContent,
  PriceCardHeader,
  RTL_default as RTL,
  Rating_default as Rating,
  ShowCode_default as ShowCode
};
