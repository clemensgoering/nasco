"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { CheckIcon, CodeIcon, CopyIcon, InfoCircledIcon } from "@radix-ui/react-icons";
import codetransform from "@/lib/codetransform";
import Tabs from "../Tabs/Tabs";

export interface ShowCodeProps {
  className?: string;
  /** Content of the description tab: text, images, live previews, ... */
  description?: ReactNode;
  /** Raw code shown (highlighted) in the code tab and copied to the clipboard. */
  code: string;
  /**
   * Highlight.js language id. Registered out of the box: js/jsx, ts/tsx,
   * json, bash/sh/shell, css and html/xml; anything else falls back to
   * auto-detection.
   */
  language: string;
  /** Custom tab labels, e.g. { description: "Preview" }. */
  labels?: { description?: ReactNode; code?: ReactNode };
}

/**
 * Tabbed panel switching between a description slot and a highlighted code
 * example with a copy-to-clipboard action. Built on the generic Tabs component.
 *
 * @example
 * <ShowCode
 *   description={<LiveDemo />}
 *   code={`<Button>Save</Button>`}
 *   language="tsx"
 *   labels={{ description: "Preview" }}
 * />
 */
const ShowCode = ({ className, description, code, language, labels }: ShowCodeProps) => {
  const [copied, setCopied] = useState(false);
  const [highlighted, setHighlighted] = useState("");

  useEffect(() => {
    setHighlighted(codetransform({ code, lang: language }));
  }, [code, language]);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  const copyCode = () => {
    navigator.clipboard.writeText(code).then(() => setCopied(true));
  };

  return (
    <Tabs
      className={className}
      items={[
        {
          id: "description",
          label: (
            <>
              <InfoCircledIcon className="h-4.5 w-4.5" />
              {labels?.description ?? "Description"}
            </>
          ),
          content: description,
        },
        {
          id: "code",
          label: (
            <>
              {labels?.code ?? "Show Code"}
              <CodeIcon className="h-4.5 w-4.5" />
            </>
          ),
          content: (
            <div className="nasco-code relative">
              <pre className="p-4">
                <code
                  className="hljs block overflow-x-auto rounded-xl border border-neutral-200 p-7.5 shadow dark:border-neutral-800"
                  dangerouslySetInnerHTML={{ __html: highlighted }}
                />
              </pre>
            </div>
          ),
        },
      ]}
      actions={
        <button
          type="button"
          onClick={copyCode}
          aria-label="Copy code to clipboard"
          className="flex items-center gap-2 rounded-tr-md p-4 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-700"
        >
          {copied ? (
            <>
              <CheckIcon className="h-4.5 w-4.5 text-green-500" />
              <span className="text-green-500">Copied</span>
            </>
          ) : (
            <CopyIcon className="h-4.5 w-4.5" />
          )}
        </button>
      }
    />
  );
};

export default ShowCode;
