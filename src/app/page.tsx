import Image from "next/image";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-16 pb-32 lg:pb-16 px-5 bg-white">

            <Header/>

            <div
                className="my-4 mb-32 pt-32 text-center max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex-column">
                <h1 className="my-4 mb-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                    We increase the conversion rate by increasing <span className="text-blue-600 dark:text-blue-500">
                    Core Web Vitals</span> metrics
                </h1>
                <div
                    className="pt-8 mb-16 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
                    <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
                        Our App boosts your website&apos;s Core Web Vitals. As a result, it helps to improve your
                        Conversion
                        Rate
                        and increase Revenue.
                    </p>
                    <ul className={`space-y-4 text-left text-gray-500 dark:text-gray-400`}>
                        <li className={`flex items-center space-x-3 rtl:space-x-reverse`}>
                            <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                                 aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                            </svg>
                            <span>Improve your Page Speed, Core Web Vitals & Decrease Bounce Rate</span>
                        </li>
                        <li className={`flex items-center space-x-3 rtl:space-x-reverse`}>
                            <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                                 aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                            </svg>
                            <span>Improve your SEO Rankings & Conversion Rates & Speed Metrics</span>
                        </li>
                        <li className={`flex items-center space-x-3 rtl:space-x-reverse`}>
                            <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                                 aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                            </svg>
                            <span>Improve page speed on mobile, even on slower connections or older devices</span>
                        </li>
                        <li className={`flex items-center space-x-3 rtl:space-x-reverse`}>
                            <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                                 aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                            </svg>
                            <span>Our app speed optimization reduces the impact of third party Shopify apps</span>
                        </li>
                    </ul>
                </div>
                <a href="https://apps.shopify.com/unilime-speedup" target={`_blank`}
                   className="custom-btn inline-flex items-center px-5 py-3 text-2xl lg:text-2xl font-medium text-center focus:ring-4 focus:outline-none rounded-lg focus:outline-none">
                    SpeedUp my store
                    <svg className="w-4 h-4 lg:w-4 lg:h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                         fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>

            <Footer/>

        </main>
    );
}
