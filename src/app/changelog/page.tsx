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
                        <p className="mmb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Read more about the releases made for SpeedUp from our changelog
                        </p>
                        <div className="flex w-full  py-8">
                            <div className="flex-auto max-w-4xl min-w-0 pt-6 lg:pt-8">
                                <h2 className="relative group mb-4 text-4xl font-bold dark:text-white">
                                    1.0.6
                                    <span id="changelog-1-0-6" className="absolute -top-[40px]"></span>
                                    <a className="ml-2 text-blue-700 opacity-0 transition-opacity dark:text-blue-500 group-hover:opacity-100"
                                       href="#changelog-1-0-6" aria-label="Link to this section: changelog-1-0-6">#</a>
                                </h2>
                                <ul className={`space-y-1 mb-9 text-lg text-gray-500 list-disc list-inside dark:text-gray-400`}>
                                    <li>Minor changes to configurations</li>
                                </ul>
                                <h2 className="relative group mb-4 text-4xl font-bold dark:text-white">
                                    1.0.5
                                    <span id="changelog-1-0-5" className="absolute -top-[40px]"></span>
                                    <a className="ml-2 text-blue-700 opacity-0 transition-opacity dark:text-blue-500 group-hover:opacity-100"
                                       href="#changelog-1-0-5" aria-label="Link to this section: changelog-1-0-5">#</a>
                                </h2>
                                <ul className={`space-y-1 mb-9 text-lg text-gray-500 list-disc list-inside dark:text-gray-400`}>
                                    <li>Updated configuration to add privacy compliance webhooks</li>
                                </ul>
                                <h2 className="relative group mb-4 text-4xl font-bold dark:text-white">
                                    1.0.4
                                    <span id="changelog-1-0-4" className="absolute -top-[40px]"></span>
                                    <a className="ml-2 text-blue-700 opacity-0 transition-opacity dark:text-blue-500 group-hover:opacity-100"
                                       href="#changelog-1-0-4" aria-label="Link to this section: changelog-1-0-4">#</a>
                                </h2>
                                <ul className={`space-y-1 mb-9 text-lg text-gray-500 list-disc list-inside dark:text-gray-400`}>
                                    <li>Updated billing plan information</li>
                                    <li>Fixed minor bugs</li>
                                    <li>Implemented mandatory compliance webhooks</li>
                                </ul>
                                <h2 className="relative group mb-4 text-4xl font-bold dark:text-white">
                                    1.0.3
                                    <span id="changelog-1-0-3" className="absolute -top-[40px]"></span>
                                    <a className="ml-2 text-blue-700 opacity-0 transition-opacity dark:text-blue-500 group-hover:opacity-100"
                                       href="#changelog-1-0-3" aria-label="Link to this section: changelog-1-0-3">#</a>
                                </h2>
                                <ul className={`space-y-1 mb-9 text-lg text-gray-500 list-disc list-inside dark:text-gray-400`}>
                                    <li>Hotfixes</li>
                                    <li>Improved PageSpeed optimization script</li>
                                </ul>
                                <h2 className="relative group mb-4 text-4xl font-bold dark:text-white">
                                    1.0.2
                                    <span id="changelog-1-0-2" className="absolute -top-[40px]"></span>
                                    <a className="ml-2 text-blue-700 opacity-0 transition-opacity dark:text-blue-500 group-hover:opacity-100"
                                       href="#changelog-1-0-2" aria-label="Link to this section: changelog-1-0-2">#</a>
                                </h2>
                                <ul className={`space-y-1 mb-9 text-lg text-gray-500 list-disc list-inside dark:text-gray-400`}>
                                    <li>Check Performance functionality</li>
                                    <li>Settings Page (General/Billing)</li>
                                    <li>Support Page</li>
                                    <li>Hotfixes</li>
                                </ul>
                                <h2 className="relative group mb-4 text-4xl font-bold dark:text-white">
                                    1.0.1
                                    <span id="changelog-1-0-1" className="absolute -top-[40px]"></span>
                                    <a className="ml-2 text-blue-700 opacity-0 transition-opacity dark:text-blue-500 group-hover:opacity-100"
                                       href="#changelog-1-0-1" aria-label="Link to this section: changelog-1-0-1">#</a>
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
