import ShowCode from "@/components/ShowCode/ShowCode";
import React from "react";
export default function Code() {

    const desciption = (
        <>
            <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</h2>
            <p className="mb-3 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
        </>
    );

    return (

        <section className="overflow-hidden pb-20 pt-15 lg:pb-25 xl:pb-30">
            <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
                <ShowCode descriptionNode={desciption} code={`<pre class="shiki nord has-diff" style="background-color:#2e3440ff;color:#d8dee9ff" tabindex="0">
    <code>
        <span class="line diff remove">...</span>
        <span class="line diff add">...</span>
    </code>
</pre>`} language="html" />
            </div>
        </section>
    );
}


