import hljs from "highlight.js";
import javascript from 'highlight.js/lib/languages/javascript'
import "highlight.js/styles/default.css";

const codetransform = ({ code, lang }: { code: string, lang: string }) => {
  hljs.registerLanguage('javascript', javascript);
  const transformed = hljs.highlight(code, { language: lang }).value;
  return transformed 
};

export default codetransform;
