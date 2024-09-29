"use client"

import { cn } from "@/lib/utils";
import { DownloadIcon } from "@radix-ui/react-icons";
import { ReactNode, useEffect, useState } from "react";
import { BundledLanguage, codeToHtml } from "shiki";

export type CSSBtnConfig = {
    visibility: String;
    selected: Boolean;
};

const ShowCode = ({ className, descriptionNode, code, language }: { className?: string, descriptionNode: ReactNode, code: string, language: BundledLanguage }) => {

    const [descConf, setDescription] = useState({ visibility: "block", selected: true, style: 'text-blue-600 rounded-ss-lg dark:text-blue-500' });
    const [codeConf, setCode] = useState({ visibility: "hidden", selected: false, style: 'dark:hover:text-gray-300' });
    const [copy, setCopyCommand] = useState("");
    const [transformedCode, setTransformedCode] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const html = await codeToHtml(code, {
                lang: language,
                themes: { 
                    light: 'min-light',
                    dark: 'min-dark',
                  },
                  colorReplacements: {
                      '#ffffff': '#f1f5f9',
                      '#000000': '#262626'
                  }
              });
            
              setTransformedCode(html);
        };
    
        fetchData();
      }, [code]);

    const toggleBlock = (block: String) => {
        switch (block) {
            case "default":
                setDescription({ visibility: "block", selected: true, style: 'text-blue-600 rounded-ss-lg dark:text-blue-500' });
                setCode({ visibility: "hidden", selected: false, style: 'dark:hover:text-gray-300' });
                break;
            case "code":
                setDescription({ visibility: "hidden", selected: false, style: 'dark:hover:text-gray-300' });
                setCode({ visibility: "block", selected: true, style: 'text-blue-600 rounded-ss-lg dark:text-blue-500' });
                break;
        }
    }
    const copyCode = () => {
        navigator.clipboard.writeText(code).then(
            () => {
                setCopyCommand("Copied to Clipboard");
                setTimeout(() => {
                    setCopyCommand("");
                }, 2000);
            },
            () => {
                setCopyCommand("Copied to Clipboard failed");
                setTimeout(() => {
                    setCopyCommand("");
                }, 2000);
            },
        );


    }

    return (
        <>


            <div className={cn("w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700", className)}>
                <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800" id="defaultTab" data-tabs-toggle="#defaultTabContent" role="tablist">
                    <li className="flex-none">
                        <button onClick={() => toggleBlock("default")} id="defaultBtn" data-tabs-target="#about" type="button" role="tab" aria-controls="about" aria-selected={descConf.selected} className={cn("inline-block p-4 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700", descConf.style)}>Description</button>
                    </li>
                    <li className="flex-none">
                        <button onClick={() => toggleBlock("code")} id="codeBtn" data-tabs-target="#services" type="button" role="tab" aria-controls="services" aria-selected={codeConf.selected} className={cn("inline-block p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700", codeConf.style)}>Show Code</button>
                    </li>
                    <li className="flex-1">
                    </li>
                    <li className="flex-none">
                        <div className="inline-block p-4">{copy}</div>
                    </li>
                    <li className="flex-none">
                        <button onClick={() => copyCode()} id="copyCodeBtn" data-tabs-target="#services" type="button" role="tab" aria-controls="services" className="inline-block p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                            <DownloadIcon className="w-4 h-4" />
                        </button>
                    </li>
                </ul>

                <div id="defaultTabContent">
                    <div className={`${descConf.visibility} p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800`} id="about" role="tabpanel" aria-labelledby="about-tab">
                        {descriptionNode}
                    </div>
                    <div className={`${codeConf.visibility} p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800`} id="services" role="tabpanel" aria-labelledby="services-tab">
                        <div className="flex relative rounded-xl border border-neutral-200 p-7.5 bg-slate-100 text-neutral-950 shadow dark:border-neutral-800 dark:bg-blacksection dark:text-gray-200 w-full">
                        <div dangerouslySetInnerHTML={{ __html: transformedCode }}></div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ShowCode;
