
## Nasco

(N)extJS B(as)ic (Co)mponent Library

## Description
This npm package has been a result of working with vaious topics, tools and languages. While being in the need of reusing NextJS components
for various purposes, simplification and getting rid of redundant steps became more and more of interest. While using other packages all day long,
this has been the result of bundling the most common elements and state-handle functionalities.

Intention: Extend the list of components to reduce the time-to-success rate, even without using AI support (nowadays).


![NPM Downloads](https://img.shields.io/npm/dw/:nasco)

```bash
npm i nasco
```

> [!NOTE]
> This Library is still under construction and will be extended in the future.

## Supported Functionalities
- Merge and clsx integration for extended customizations of each main component
- Theming support with default "dark:css" and "light:css" preparations

## Components

### RTL (Right to left, Image and content)
![Example image](https://github.com/clemensgoering/nasco/raw/master/docs/rtl_20240929.png)

### LTR (Left to right, Content and Image)
![Example image](https://github.com/clemensgoering/nasco/raw/master/docs/ltr_20240929.png)

### Placeholder (Image Template)
As shown in the RTL or LTR section example, a simple image placeholder can be used as fallback component,
or in case you are still in development mode and need a temporary solution.

### Cards
![Example image](https://github.com/clemensgoering/nasco/raw/master/docs/cards_20240929.png)

### Price Elements
Two versions: 
Banner / extended version
![Example image](https://github.com/clemensgoering/nasco/raw/master/docs/price_1_20240929.png)

Simplified Card approach with fully customizable header and content section.
![Example image](https://github.com/clemensgoering/nasco/raw/master/docs/price_2_20240929.png)

### Rating
Simplified Rating Component with crucial properties, as well as a customizable footer section for more content, links ...
![Example image](https://github.com/clemensgoering/nasco/raw/master/docs/ratings_20240929.png)

### ShowCode
Component with two main sections.
![Example image](https://github.com/clemensgoering/nasco/raw/master/docs/showcode_20240929.png)
1. Customizable component placeholder, used to maintain description, images and other describing or visualizing elements.
2. Code example. Beautified via <a href="https://shiki.style/" target="_blank">Shiki</a> for an increased use for various languages

