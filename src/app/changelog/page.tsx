import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "SpeedUp - Changelog",
    description: "Read more about the releases made for SpeedUp from our changelog"
};

export default function Changelog() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-32 lg:p-16 px-5 bg-white">

            <Header/>

            <div className="my-4 mb-32 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex-column">
                <section className="dark:bg-gray-900">
                    <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                            SpeedUp - Changelog
                        </h1>
                        <p className="mmb-4 text-2xl pt-2 font-normal text-gray-500 dark:text-gray-400">
                            Read more about the releases made for SpeedUp from our changelog
                        </p>
                        <div className="flex w-full  pt-8">
                            <div className="flex-auto pt-6 lg:pt-8">
                                <h2 className="relative flex items-center group mb-4 text-3xl font-bold dark:text-white">
                                    <svg className="w-6 h-6 mr-2 text-gray-800 dark:text-white" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                         viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                              stroke-width="2"
                                              d="M15.583 8.445h.01M10.86 19.71l-6.573-6.63a.993.993 0 0 1 0-1.4l7.329-7.394A.98.98 0 0 1 12.31 4l5.734.007A1.968 1.968 0 0 1 20 5.983v5.5a.992.992 0 0 1-.316.727l-7.44 7.5a.974.974 0 0 1-1.384.001Z"/>
                                    </svg>
                                    1.0.8
                                    <span id="v-1-0-8" className="absolute -top-[40px]"></span>
                                    <a className="ml-2 text-blue-700 opacity-0 transition-opacity dark:text-blue-500 group-hover:opacity-100 hidden xl:block"
                                       href="#v-1-0-8" aria-label="Link to this section: v-1-0-8">#</a>
                                </h2>
                                <ul className={`space-y-1 mb-9 text-lg text-gray-500 list-disc list-inside dark:text-gray-400`}>
                                    <li>Adding discount functionality</li>
                                    <li>Fixed speedup script</li>
                                    <li>Fixed welcome screen bug</li>
                                </ul>
                                <h2 className="relative flex items-center group mb-4 text-3xl font-bold dark:text-white">
                                    <svg className="w-6 h-6 mr-2 text-gray-800 dark:text-white" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                         viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                              stroke-width="2"
                                              d="M15.583 8.445h.01M10.86 19.71l-6.573-6.63a.993.993 0 0 1 0-1.4l7.329-7.394A.98.98 0 0 1 12.31 4l5.734.007A1.968 1.968 0 0 1 20 5.983v5.5a.992.992 0 0 1-.316.727l-7.44 7.5a.974.974 0 0 1-1.384.001Z"/>
                                    </svg>
                                    1.0.7
                                    <span id="v-1-0-7" className="absolute -top-[40px]"></span>
                                    <a className="ml-2 text-blue-700 opacity-0 transition-opacity dark:text-blue-500 group-hover:opacity-100 hidden xl:block"
                                       href="#v-1-0-7" aria-label="Link to this section: v-1-0-7">#</a>
                                </h2>
                                <ul className={`space-y-1 mb-9 text-lg text-gray-500 list-disc list-inside dark:text-gray-400`}>
                                    <li>Fixes for infinite loop on test payments</li>
                                    <li>Minor refactoring for better usage</li>
                                </ul>
                                <h2 className="relative flex items-center group mb-4 text-3xl font-bold dark:text-white">
                                    <svg className="w-6 h-6 mr-2 text-gray-800 dark:text-white" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                         viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                              stroke-width="2"
                                              d="M15.583 8.445h.01M10.86 19.71l-6.573-6.63a.993.993 0 0 1 0-1.4l7.329-7.394A.98.98 0 0 1 12.31 4l5.734.007A1.968 1.968 0 0 1 20 5.983v5.5a.992.992 0 0 1-.316.727l-7.44 7.5a.974.974 0 0 1-1.384.001Z"/>
                                    </svg>
                                    1.0.6
                                    <span id="v-1-0-6" className="absolute -top-[40px]"></span>
                                    <a className="ml-2 text-blue-700 opacity-0 transition-opacity dark:text-blue-500 group-hover:opacity-100 hidden xl:block"
                                       href="#v-1-0-6" aria-label="Link to this section: v-1-0-6">#</a>
                                </h2>
                                <ul className={`space-y-1 mb-9 text-lg text-gray-500 list-disc list-inside dark:text-gray-400`}>
                                    <li>Minor changes to configurations</li>
                                </ul>
                                <h2 className="relative flex items-center group mb-4 text-3xl font-bold dark:text-white">
                                    <svg className="w-6 h-6 mr-2 text-gray-800 dark:text-white" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                         viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                              stroke-width="2"
                                              d="M15.583 8.445h.01M10.86 19.71l-6.573-6.63a.993.993 0 0 1 0-1.4l7.329-7.394A.98.98 0 0 1 12.31 4l5.734.007A1.968 1.968 0 0 1 20 5.983v5.5a.992.992 0 0 1-.316.727l-7.44 7.5a.974.974 0 0 1-1.384.001Z"/>
                                    </svg>
                                    1.0.5
                                    <span id="v-1-0-5" className="absolute -top-[40px]"></span>
                                    <a className="ml-2 text-blue-700 opacity-0 transition-opacity dark:text-blue-500 group-hover:opacity-100 hidden xl:block"
                                       href="#v-1-0-5" aria-label="Link to this section: v-1-0-5">#</a>
                                </h2>
                                <ul className={`space-y-1 mb-9 text-lg text-gray-500 list-disc list-inside dark:text-gray-400`}>
                                    <li>Updated configuration to add privacy compliance webhooks</li>
                                </ul>
                                <h2 className="relative flex items-center group mb-4 text-3xl font-bold dark:text-white">
                                    <svg className="w-6 h-6 mr-2 text-gray-800 dark:text-white" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                         viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                              stroke-width="2"
                                              d="M15.583 8.445h.01M10.86 19.71l-6.573-6.63a.993.993 0 0 1 0-1.4l7.329-7.394A.98.98 0 0 1 12.31 4l5.734.007A1.968 1.968 0 0 1 20 5.983v5.5a.992.992 0 0 1-.316.727l-7.44 7.5a.974.974 0 0 1-1.384.001Z"/>
                                    </svg>
                                    1.0.4
                                    <span id="v-1-0-4" className="absolute -top-[40px]"></span>
                                    <a className="ml-2 text-blue-700 opacity-0 transition-opacity dark:text-blue-500 group-hover:opacity-100 hidden xl:block"
                                       href="#v-1-0-4" aria-label="Link to this section: v-1-0-4">#</a>
                                </h2>
                                <ul className={`space-y-1 mb-9 text-lg text-gray-500 list-disc list-inside dark:text-gray-400`}>
                                    <li>Updated billing plan information</li>
                                    <li>Fixed minor bugs</li>
                                    <li>Implemented mandatory compliance webhooks</li>
                                </ul>
                                <h2 className="relative flex items-center group mb-4 text-3xl font-bold dark:text-white">
                                    <svg className="w-6 h-6 mr-2 text-gray-800 dark:text-white" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                         viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                              stroke-width="2"
                                              d="M15.583 8.445h.01M10.86 19.71l-6.573-6.63a.993.993 0 0 1 0-1.4l7.329-7.394A.98.98 0 0 1 12.31 4l5.734.007A1.968 1.968 0 0 1 20 5.983v5.5a.992.992 0 0 1-.316.727l-7.44 7.5a.974.974 0 0 1-1.384.001Z"/>
                                    </svg>
                                    1.0.3
                                    <span id="v-1-0-3" className="absolute -top-[40px]"></span>
                                    <a className="ml-2 text-blue-700 opacity-0 transition-opacity dark:text-blue-500 group-hover:opacity-100 hidden xl:block"
                                       href="#v-1-0-3" aria-label="Link to this section: v-1-0-3">#</a>
                                </h2>
                                <ul className={`space-y-1 mb-9 text-lg text-gray-500 list-disc list-inside dark:text-gray-400`}>
                                    <li>Hotfixes</li>
                                    <li>Improved PageSpeed optimization script</li>
                                </ul>
                                <h2 className="relative flex items-center group mb-4 text-3xl font-bold dark:text-white">
                                    <svg className="w-6 h-6 mr-2 text-gray-800 dark:text-white" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                         viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                              stroke-width="2"
                                              d="M15.583 8.445h.01M10.86 19.71l-6.573-6.63a.993.993 0 0 1 0-1.4l7.329-7.394A.98.98 0 0 1 12.31 4l5.734.007A1.968 1.968 0 0 1 20 5.983v5.5a.992.992 0 0 1-.316.727l-7.44 7.5a.974.974 0 0 1-1.384.001Z"/>
                                    </svg>
                                    1.0.2
                                    <span id="v-1-0-2" className="absolute -top-[40px]"></span>
                                    <a className="ml-2 text-blue-700 opacity-0 transition-opacity dark:text-blue-500 group-hover:opacity-100 hidden xl:block"
                                       href="#v-1-0-2" aria-label="Link to this section: v-1-0-2">#</a>
                                </h2>
                                <ul className={`space-y-1 mb-9 text-lg text-gray-500 list-disc list-inside dark:text-gray-400`}>
                                    <li>Check Performance functionality</li>
                                    <li>Settings Page (General/Billing)</li>
                                    <li>Support Page</li>
                                    <li>Hotfixes</li>
                                </ul>
                                <h2 className="relative flex items-center group mb-4 text-3xl font-bold dark:text-white">
                                    <svg className="w-6 h-6 mr-2 text-gray-800 dark:text-white" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                         viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                              stroke-width="2"
                                              d="M15.583 8.445h.01M10.86 19.71l-6.573-6.63a.993.993 0 0 1 0-1.4l7.329-7.394A.98.98 0 0 1 12.31 4l5.734.007A1.968 1.968 0 0 1 20 5.983v5.5a.992.992 0 0 1-.316.727l-7.44 7.5a.974.974 0 0 1-1.384.001Z"/>
                                    </svg>
                                    1.0.1
                                    <span id="v-1-0-1" className="absolute -top-[40px]"></span>
                                    <a className="ml-2 text-blue-700 opacity-0 transition-opacity dark:text-blue-500 group-hover:opacity-100 hidden xl:block"
                                       href="#v-1-0-1" aria-label="Link to this section: v-1-0-1">#</a>
                                </h2>
                                <ul className={`space-y-1 text-lg text-gray-500 list-disc list-inside dark:text-gray-400`}>
                                    <li>Release of the initial version of SpeedUp</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <Footer/>

        </main>
    );
}
