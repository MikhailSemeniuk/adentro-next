import Image from "next/image";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 px-5">

            <Header/>

            <div
                className="my-4 mb-32 text-center max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex-column">
                <Image
                    className="inline-block mb-6 dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src="/unilime.svg"
                    alt="Unilime Logo"
                    width={180}
                    height={37}
                    priority
                />
                <h1 className="my-4 mb-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                    We increase the conversion rate by increasing <span className="text-blue-600 dark:text-blue-500">
                    Core Web Vitals</span> metrics
                </h1>
                <div className="pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
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
            </div>

            <Footer/>

        </main>
    );
}
