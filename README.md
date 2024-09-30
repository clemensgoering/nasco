
## Nasco

(N)extJS B(as)ic (Co)mponent Library

## Description
Simplified and easy to use NextJS Components, that can be integrated into your projects.
Reduced functionality scope to support the most common user interactions. Following common UX pattern
to create a professional appearance without spending to much effort. Mockup as well as complex solutions
can be enriched by the provided elements.


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

### Header
Clean and simple header element. Supporting mobile device size adjustments as well as customizable link attributes.
Additional space for custom child-elements. For example, the internal **Button** component can be used with pre-configured styles and size
to personalize the overall UX.
![Example image](https://github.com/clemensgoering/nasco/raw/master/docs/header_20240930.png)

### Hero
The current package provides two different Hero versions.
**Simple (HeroSimple)** - minimalistic text/centered design with single button
**Image (HeroImage)** - Separated text and image areas
![Example image](https://github.com/clemensgoering/nasco/raw/master/docs/hero_20240930.png)
![Example image](https://github.com/clemensgoering/nasco/raw/master/docs/hero_2_20240930.png)

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

