import Image from "next/image";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">

            <Header/>

            <div
                className="my-4 mb-32 text-center z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex-column">
                <Image
                    className="inline-block mb-6 dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src="/unilime.svg"
                    alt="Unilime Logo"
                    width={180}
                    height={37}
                    priority
                />
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                    We increase the conversion rate by increasing Core Web Vitals metrics
                </h1>
                <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
                    Our App boosts your website’s Core Web Vitals. As a result, it helps to improve your Conversion Rate
                    and increase Revenue.
                </p>
                <ul className={`space-y-1 text-lg text-gray-500 list-disc list-inside dark:text-gray-400`}>
                    <li>Improve your Page Speed, Core Web Vitals & Decrease Bounce Rate</li>
                    <li>Improve your SEO Rankings & Conversion Rates & Speed Metrics</li>
                    <li>Improve page speed on mobile, even on slower connections or older devices</li>
                    <li>Our app speed optimization reduces the impact of third party Shopify apps</li>
                </ul>
            </div>

            <Footer/>

        </main>
    );
}
