import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Frequently Asked Questions - Unilime SpeedUp",
};

export default function Faq() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">

            <Header/>

            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex-column">
                <section className="dark:bg-gray-900">
                    <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Frequently
                            Asked Questions</h1>
                        <div
                            className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
                            <div>
                                <div className="mb-10">
                                    <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                        <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                                             fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                                  clip-rule="evenodd"></path>
                                        </svg>
                                        How does the Unilime SpeedUp app work and help me?
                                    </h3>
                                    <p className="text-gray-500 dark:text-gray-400">We increase the conversion rate by
                                        increasing Core Web Vitals metrics.</p>
                                    <p className="text-gray-500 dark:text-gray-400">Our App boosts your website’s Core
                                        Web Vitals. As a result, it helps to improve your Conversion Rate and increase
                                        Revenue.</p>
                                </div>
                                <div className="mb-10">
                                    <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                        <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                                             fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                                  clip-rule="evenodd"></path>
                                        </svg>
                                        What should I do after installing the Unilime SpeedUp app?
                                    </h3>
                                    <p className="text-gray-500 dark:text-gray-400">No further action is required. The
                                        application is already up and running, speeding up your online store.</p>
                                </div>
                                <div className="mb-10">
                                    <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                        <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                                             fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                                  clip-rule="evenodd"></path>
                                        </svg>
                                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                                        Is Unilime SpeedUp compatible with my visitors' browsers?
                                    </h3>
                                    <p className="text-gray-500 dark:text-gray-400">No worries. Our application is
                                        designed not to interfere with the operation of your website for regular
                                        visitors in any way.</p>
                                </div>
                            </div>
                            <div>
                                <div className="mb-10">
                                    <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                        <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                                             fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                                  clip-rule="evenodd"></path>
                                        </svg>
                                        Will Unilime SpeedUp affect my design and templates?
                                    </h3>
                                    <p className="text-gray-500 dark:text-gray-400">Absolutely not.</p>
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    <p className="text-gray-500 dark:text-gray-400">We focus on optimizing JavaScript
                                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                                        and images. We do not compromise the integrity of your online store's templates
                                        in any way.</p>
                                </div>
                                <div className="mb-10">
                                    <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                        <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                                             fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                                  clip-rule="evenodd"></path>
                                        </svg>
                                        Can I modify any options in the application for my online store?
                                    </h3>
                                    <p className="text-gray-500 dark:text-gray-400">Yes, Unilime SpeedUp provides that
                                        flexibility.</p>
                                </div>
                                <div className="mb-10">
                                    <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                        <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                                             fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                                  clip-rule="evenodd"></path>
                                        </svg>
                                        Still have questions?
                                    </h3>
                                    <p className="text-gray-500 dark:text-gray-400">Please contact us at <a
                                        className={`font-medium text-blue-600 dark:text-blue-500 hover:underline`}
                                        href="mailto:info@unilime.group">info@unilime.group</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <Footer/>
        </main>
    );
}
