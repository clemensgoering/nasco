import ShowCode from "@/components/ShowCode/ShowCode";
export default function Code() {

    const desciption = (
        <>
        <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Powering innovation & trust at 200,000+ companies worldwide</h2><p className="mb-3 text-gray-500 dark:text-gray-400">Empower Developers, IT Ops, and business teams to collaborate at high velocity. Respond to changes and deliver great customer and employee service experiences fast.</p><a href="#" className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700">
            Learn more
            <svg className=" w-2.5 h-2.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
            </svg>
        </a>
        </>
    );

    return (
        <>
            <ShowCode descriptionNode={desciption} code={`<pre class="shiki nord has-diff" style="background-color:#2e3440ff;color:#d8dee9ff" tabindex="0">
    <code>
        <span class="line diff remove">...</span>
        <span class="line diff add">...</span>
    </code>
</pre>`} language="html"/>
        </>
    );
}


