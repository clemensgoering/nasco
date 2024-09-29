// src/components/Card/Card.tsx
import { useState } from "react";
import { DotsVerticalIcon } from "@radix-ui/react-icons";

// src/lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/components/Placeholder/Image.tsx
import { ImageIcon } from "@radix-ui/react-icons";
var ImagePlaceholder = ({ className, gradient }) => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: cn(`inline-flex items-center justify-center shadow-sm ${gradient === "top" || gradient === void 0 ? "bg-gradient-to-t" : "bg-gradient-to-r"} from-[#dadae0] to-[#ebecf13d] dark:bg-slate-500 rounded-md  h-full w-full px-4 py-2 mx-auto`, className) }, /* @__PURE__ */ React.createElement(ImageIcon, { className: "h-10 w-10 text-slate-300 rounded-md object-cover" })));
};
var Image_default = ImagePlaceholder;

// src/components/Price/PriceCard/PriceCard.tsx
var PriceCard = ({ className, status, children }) => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: cn("animate_top group relative rounded-lg border border-stroke bg-white mt-10 p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none w-full", className) }, /* @__PURE__ */ React.createElement("div", { className: `absolute px-4.5 py-1.5 right-0 shadow-md
          ${status === "new" ? "top-4" : ""} ${status === "popular" ? "top-7.5" : ""} ${status === "sale" ? "top-4" : ""}
          -rotate-90 rounded-bl-full rounded-tl-full ${status === "new" ? "bg-lime-500" : ""} ${status === "popular" ? "bg-primary" : ""} ${status === "sale" ? "bg-red-500" : ""}  text-metatitle font-medium uppercase text-white` }, status === "new" ? "New" : "", status === "popular" ? "Popular" : "", status === "sale" ? "Sale" : ""), children));
};
var PriceCardContent = ({ className, conf, children }) => {
  var _a, _b;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h4", { className: cn("mb-2.5 text-para2 font-medium text-black dark:text-white", className) }, conf.title), /* @__PURE__ */ React.createElement("p", null, conf.description), children, (conf == null ? void 0 : conf.priceButton) !== void 0 ? /* @__PURE__ */ React.createElement(
    "a",
    {
      href: (_a = conf == null ? void 0 : conf.priceButton) == null ? void 0 : _a.link,
      "aria-label": "Get the Plan button",
      className: "group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary pt-10"
    },
    /* @__PURE__ */ React.createElement("span", { className: "duration-300 group-hover/btn:pr-2" }, (_b = conf == null ? void 0 : conf.priceButton) == null ? void 0 : _b.text),
    /* @__PURE__ */ React.createElement(
      "svg",
      {
        width: "14",
        height: "14",
        viewBox: "0 0 14 14",
        xmlns: "http://www.w3.org/2000/svg"
      },
      /* @__PURE__ */ React.createElement(
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
  return /* @__PURE__ */ React.createElement("h3", { className: cn("mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3", className) }, children === void 0 ? /* @__PURE__ */ React.createElement(Image_default, { className: "h-52 w-full mx-auto" }) : children);
};

// src/components/Rating/Rating.tsx
import React4 from "react";

// src/components/Rating/WhiteStar.tsx
import React2 from "react";

// src/components/Rating/YellowStar.tsx
import React3 from "react";

// src/components/Section/RTL.tsx
import Image from "next/image";

// src/components/Section/LTR.tsx
import Image2 from "next/image";

// src/components/ShowCode/ShowCode.tsx
import { CodeIcon, DownloadIcon, InfoCircledIcon } from "@radix-ui/react-icons";
import { useEffect, useState as useState2 } from "react";
import { codeToHtml } from "shiki";
export {
  PriceCard,
  PriceCardContent,
  PriceCardHeader
};
