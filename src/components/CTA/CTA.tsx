import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type CTAVariant = "dark" | "light";

const ctaVariants: Record<CTAVariant, string> = {
  dark: "bg-blacksection text-white dark:bg-blackho",
  light: "bg-zumthor text-black dark:bg-blacksection dark:text-white",
};

export interface CTAProps {
  title: ReactNode;
  content?: ReactNode;
  /** Visual style of the band. Defaults to "dark". */
  variant?: CTAVariant;
  className?: string;
  /** Action area: buttons, newsletter input, ... */
  children?: ReactNode;
}

/**
 * Call-to-action band, typically placed between the last section and the footer.
 *
 * @example
 * <CTA title="Ready to start?" content="Assemble your page in minutes.">
 *   <Button size="lg" href="/docs">Get started</Button>
 * </CTA>
 */
const CTA = ({ title, content, variant = "dark", className, children }: CTAProps) => (
  <section
    className={cn(
      "rounded-2xl px-8 py-12.5 text-center shadow-solid-10 md:px-12 lg:py-15",
      ctaVariants[variant],
      className,
    )}
  >
    <h2 className="mx-auto mb-4 max-w-2xl text-3xl font-bold xl:text-sectiontitle2">{title}</h2>
    {content && (
      <div
        className={cn(
          "mx-auto mb-8 max-w-xl",
          variant === "dark" ? "text-manatee" : "text-waterloo dark:text-manatee",
        )}
      >
        {content}
      </div>
    )}
    {children && <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">{children}</div>}
  </section>
);

export default CTA;
