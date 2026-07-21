import hljs from "highlight.js/lib/core";
import bash from "highlight.js/lib/languages/bash";
import css from "highlight.js/lib/languages/css";
import javascript from "highlight.js/lib/languages/javascript";
import json from "highlight.js/lib/languages/json";
import typescript from "highlight.js/lib/languages/typescript";
import xml from "highlight.js/lib/languages/xml";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("json", json);
hljs.registerLanguage("bash", bash);
hljs.registerLanguage("css", css);
hljs.registerLanguage("xml", xml);
hljs.registerAliases(["js", "jsx"], { languageName: "javascript" });
hljs.registerAliases(["ts", "tsx"], { languageName: "typescript" });
hljs.registerAliases(["sh", "shell"], { languageName: "bash" });
hljs.registerAliases(["html"], { languageName: "xml" });

/** Highlights a code snippet, falling back to plain text for unknown languages. */
const codetransform = ({ code, lang }: { code: string; lang: string }): string => {
  if (!hljs.getLanguage(lang)) {
    return hljs.highlightAuto(code).value;
  }
  return hljs.highlight(code, { language: lang }).value;
};

export default codetransform;
