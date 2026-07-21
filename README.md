# Nasco

**(N)ext.js B(as)ic (Co)mponent Library** — prestyled, typed and zero-config.

Simplified, easy-to-use Next.js components for landing pages, documentation sites and mockups.
Reduced functionality scope focused on the most common user interactions, following familiar UX
patterns so your project looks professional without spending much effort.

Full documentation and live previews: **[nasco-docu.vercel.app](https://nasco-docu.vercel.app/)** —
the documentation page itself is built entirely with components from this package.

## Installation

```bash
npm i nasco
```

Import the stylesheet once (e.g. in your root `layout.tsx`) — that's it, no Tailwind
configuration, no content scanning, no theme copying:

```tsx
// app/layout.tsx
import "./globals.css";      // your own styles first (if any)
import "nasco/styles.css";   // nasco last, so its responsive styles win
```

The stylesheet ships precompiled and works with or without Tailwind in your own project.
If your project also uses Tailwind, import `nasco/styles.css` **after** your own global
stylesheet — otherwise your build's base utilities can override the library's
responsive variants.
If you do use Tailwind, your own utility classes passed via `className` merge cleanly with
component styles (`tailwind-merge` is applied internally).

## Usage

```tsx
import { Button, Card, HeroSimple } from "nasco";

export default function Page() {
  return (
    <HeroSimple
      jumbotron={{ link: "/changelog", text: "New Features" }}
      title="Build landing pages in minutes"
      subTitle="Prestyled Next.js components with sensible defaults."
    >
      <Button variant="outlined" size="lg" href="/docs">
        Get started
      </Button>
    </HeroSimple>
  );
}
```

## Theming

Dark mode works out of the box via the `dark` class (pairs perfectly with
[next-themes](https://github.com/pacocoursey/next-themes)). All colors resolve to CSS
variables, so re-branding requires no rebuild:

```css
/* your globals.css */
:root {
  --nasco-primary: #7c3aed;
  --nasco-black-section: #101426;
}
```

See `nasco/styles.css` for the full list of `--nasco-*` tokens (colors, code-block theme).

## Components

| Component | Description |
| --- | --- |
| `Header` | Sticky responsive navigation with mobile menu, submenus and optional theme toggler |
| `Accordion` | Animated expand/collapse list for FAQ sections |
| `FeatureGrid` | Icon + title + text grid with staggered reveal, 2-4 columns |
| `CTA` | Call-to-action band in dark/light variants with an action slot |
| `Steps` | Numbered vertical process for "how it works" and setup guides |
| `Input` / `Textarea` / `Label` | Prestyled, ref-forwarding form primitives |
| `Tabs` | Generic tab panel with optional action slot |
| `Badge` | Small rounded status label in three variants |
| `HeroSimple` / `HeroImage` | Centered hero or split text/image hero, with optional jumbotron link |
| `LTR` / `RTL` | Split content/image sections in both directions |
| `Card` | Content card with title, badge, dropdown menu and two visual variants |
| `PriceBanner` / `PriceCard` | Extended pricing banner or composable pricing card with status ribbon |
| `Rating` | Star rating card with author, date and custom footer slot |
| `ShowCode` | Tabbed description/code panel with syntax highlighting and copy button |
| `TestimonialSlider` / `TestimonialGrid` | Swiper-based carousel or minimalistic grid of testimonials |
| `Brand` / `BrandList` | Animated brand logos, single or as a responsive grid |
| `Timeline` | Vertical timeline for CVs, milestones or event lists |
| `Footer` | Multi-column footer with contact block, link lists and bottom bar |
| `BackToTop` | Floating scroll-to-top button |
| `Button` | Button/link with `default`, `outlined` and `link` variants in three sizes |
| `ImagePlaceholder` | Gradient placeholder to reserve image space during development |
| `ThemeToggler` | Standalone light/dark switch (next-themes) |

All components accept `className` for extension and export typed props
(`ButtonProps`, `CardProps`, ...). Shared data types (`MenuItem`, `Pricing`, `Testimonial`,
`TimelineItem`, ...) are exported as well.

## Requirements

- Next.js 14 or 15 (App Router)
- React 18 or 19

## Migrating from v1

v2 replaces the `config={{ ... }}` object props with flat, typed props:

```tsx
// v1
<Button config={{ style: "outlined", size: "sm" }}>Go</Button>
// v2
<Button variant="outlined" size="sm">Go</Button>
```

Further changes: `import "nasco/styles.css"` replaces all manual Tailwind setup;
`ShowCode`'s `descriptionNode` is now `description`; testimonial lists take `items`
instead of `data`; `PriceBanner` takes `plan`; the `Rating` data type is now `RatingData`
(with `id` instead of `_id`); previously missing components (`Footer`, `Timeline`,
`BackToTop`, `Brand`, `BrandList`, testimonials, `ThemeToggler`) are now exported.

## Feedback

Share feedback, extension ideas or bug reports via the
[contact page](https://nasco-docu.vercel.app/contact).

## License

MIT
