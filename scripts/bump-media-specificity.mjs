/**
 * Raises the specificity of responsive variant utilities (rules inside @media)
 * from 0-1-0 to 0-2-0 by doubling their leading class selector.
 *
 * Why: consumers with their own Tailwind build load a stylesheet that redefines
 * unscoped utilities like `.block` or `.flex-col`. Depending on stylesheet
 * order those can override this library's media-scoped variants (`.lg\:hidden`,
 * `.lg\:flex-row`, ...) at equal specificity and break responsive layouts.
 * Doubling the class makes the variant win regardless of stylesheet order,
 * while `tailwind-merge` keeps consumer className overrides working (the
 * conflicting library class never reaches the DOM).
 */
import fs from "node:fs";
import postcss from "postcss";

const file = new URL("../dist/index.css", import.meta.url);
const css = fs.readFileSync(file, "utf8");
const root = postcss.parse(css);

// Matches a leading class selector including escaped characters (\: \/ \. ...)
const leadingClass = /^(\.(?:\\.|[^\s.:[>+~,)])+)/;

let bumped = 0;
root.walkAtRules("media", (atRule) => {
  atRule.walkRules((rule) => {
    rule.selectors = rule.selectors.map((selector) => {
      const match = selector.match(leadingClass);
      if (!match) return selector;
      bumped += 1;
      return match[1] + match[1] + selector.slice(match[1].length);
    });
  });
});

fs.writeFileSync(file, root.toString());
console.log(`bump-media-specificity: doubled ${bumped} selectors in dist/index.css`);
