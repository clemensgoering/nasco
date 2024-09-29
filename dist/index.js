"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  PriceCard: () => PriceCard,
  PriceCardContent: () => PriceCardContent,
  PriceCardHeader: () => PriceCardHeader
});
module.exports = __toCommonJS(src_exports);

// src/components/Card/Card.tsx
var import_react = require("react");
var import_react_icons = require("@radix-ui/react-icons");

// src/lib/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/components/Placeholder/Image.tsx
var import_react_icons2 = require("@radix-ui/react-icons");
var ImagePlaceholder = ({ className, gradient }) => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: cn(`inline-flex items-center justify-center shadow-sm ${gradient === "top" || gradient === void 0 ? "bg-gradient-to-t" : "bg-gradient-to-r"} from-[#dadae0] to-[#ebecf13d] dark:bg-slate-500 rounded-md  h-full w-full px-4 py-2 mx-auto`, className) }, /* @__PURE__ */ React.createElement(import_react_icons2.ImageIcon, { className: "h-10 w-10 text-slate-300 rounded-md object-cover" })));
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
var import_react4 = __toESM(require("react"));

// src/components/Rating/WhiteStar.tsx
var import_react2 = __toESM(require("react"));

// src/components/Rating/YellowStar.tsx
var import_react3 = __toESM(require("react"));

// src/components/Section/RTL.tsx
var import_image = __toESM(require("next/image"));

// src/components/Section/LTR.tsx
var import_image2 = __toESM(require("next/image"));

// src/components/ShowCode/ShowCode.tsx
var import_react_icons3 = require("@radix-ui/react-icons");
var import_react5 = require("react");
var import_shiki = require("shiki");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  PriceCard,
  PriceCardContent,
  PriceCardHeader
});
