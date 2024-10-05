
## Nasco

(N)extJS B(as)ic (Co)mponent Library

## Description
Simplified and easy to use NextJS Components, that can be integrated into your projects.
Reduced functionality scope to support the most common user interactions. Following common UX pattern
to create a professional appearance without spending to much effort. Mockup as well as complex solutions
can be enriched by the provided elements.

Further insight and documentation can be found <a href="https://nasco-docu.vercel.app/">here</a>.
The documentation page has been fully built by using components from this package.

If you would like to share your feedback, extension ideas or report bugs, kindly use the contact option that
is available at the following contact page: <a href="https://nasco-docu.vercel.app/contact">Link</a>


![NPM Downloads](https://img.shields.io/npm/dw/:nasco)

```bash
npm i nasco
```

> [!NOTE]
> This Library is still under construction. The set of components currently included will be enriched as part of future releases

## Supported Functionalities
- Merge and clsx integration for extended customizations of each main component
- Theming support with default "dark:css" and "light:css" preparations

## Components

**Header**
Clean and simple header element. Supporting mobile device size adjustments as well as customizable link attributes.
Additional space for custom child-elements. For example, the internal **Button** component can be used with pre-configured styles and size
to personalize the overall UX.

**Hero**
The current package provides two different Hero versions.
**Simple (HeroSimple)** - minimalistic text/centered design with single button
**Image (HeroImage)** - Separated text and image areas

**RTL (Right to left, Image and content)**
**LTR (Left to right, Content and Image)**
**Placeholder (Image Template)**
As shown in the RTL or LTR section example, a simple image placeholder can be used as fallback component,
or in case you are still in development mode and need a temporary solution.

**Cards**
Simple cards, including crucial sections like "titles", "content" and "menu" enriched by a badge that
can be added to the top by choosing one of three versions.

**Price Elements**
Two versions: 
Banner / extended version
Simplified Card approach with fully customizable header and content section.

**Rating**
Simplified Rating Component with crucial properties, as well as a customizable footer section for more content, links ...

**ShowCode**
Component with two main sections.
1. Customizable component placeholder, used to maintain description, images and other describing or visualizing elements.
2. Code example. Beautified via **highlight.js** for an increased use for various languages

**Testimonials**
1. Two different styles. A minimalistic Grid approach and a slider and card based version
2. Adding **swiper** package for interactive behavior

**Brands**
Either choose by using a motion supported brand component, or directly integrate the provided **BrandList**


## More
Learn more about this package, content and feature scope by visiting <a href="https://nasco-docu.vercel.app/">the documentation</a>.