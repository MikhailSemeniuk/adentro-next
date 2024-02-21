import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Frequently Asked Questions - Unilime SpeedUp",
};

export default function Faq() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 px-5">

            <Header/>

            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex-column">
                <section className="dark:bg-gray-900">
                    <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Frequently
                            Asked Questions</h1>
                        <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
                            <div>
                                <div className="mb-10">
                                    <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                        <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                                             fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd"
                                                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                                  clipRule="evenodd"></path>
                                        </svg>
                                        How does the Unilime SpeedUp app work and help me?
                                    </h3>
                                    <p className="text-gray-500 dark:text-gray-400">We increase the conversion rate by
                                        increasing Core Web Vitals metrics.</p>
                                    <p className="text-gray-500 dark:text-gray-400">Our App boosts your website&apos;s
                                        Core Web Vitals. As a result, it helps to improve your Conversion Rate and
                                        increase Revenue.</p>
                                </div>
                                <div className="mb-10">
                                    <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                        <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                                             fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd"
                                                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                                  clipRule="evenodd"></path>
                                        </svg>
                                        What should I do after installing the Unilime SpeedUp app?
                                    </h3>
                                    <p className="text-gray-500 dark:text-gray-400">You have to choose a tariff plan,
                                        and then activate the app functionality by enabling the corresponding toggle
                                        switch. Then our application is already up and running, speeding up your online
                                        store.</p>
                                </div>
                                <div className="mb-10">
                                    <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                        <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                                             fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd"
                                                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                                  clipRule="evenodd"></path>
                                        </svg>
                                        Can I receive a refund if I don&apos;t want to use the app?
                                    </h3>
                                    <p className="text-gray-500 dark:text-gray-400">You can deactivate your subscription
                                        plan but the funds for the paid/current period can’t be refunded.</p>
                                </div>
                                <div className="mb-10">
                                    <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                        <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                                             fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd"
                                                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                                  clipRule="evenodd"></path>
                                        </svg>
                                        Can I use the same subscription to install the app to all my other stores?
                                    </h3>
                                    <p className="text-gray-500 dark:text-gray-400">No, this is not possible. Each store
                                        is individually charged for each app that is installed.</p>
                                </div>
                                <div className="mb-10">
                                    <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                        <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                                             fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd"
                                                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                                  clipRule="evenodd"></path>
                                        </svg>
                                        What is the &quot;Check Performance&quot; feature?
                                    </h3>
                                    <p className="text-gray-500 dark:text-gray-400">This option provides you with the
                                        performance details &quot;before&quot; and &quot;after&quot; our app
                                        activation. To receive the correct metrics, be sure that you&apos;ve enabled
                                        SpeedUp boost before checking your performance</p>
                                </div>
                                <div className="mb-10">
                                    <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                        <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                                             fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd"
                                                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                                  clipRule="evenodd"></path>
                                        </svg>
                                        Is Unilime SpeedUp compatible with my visitors&apos; browsers?
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
                                            <path fillRule="evenodd"
                                                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                                  clipRule="evenodd"></path>
                                        </svg>
                                        Will Unilime SpeedUp affect my design and templates?
                                    </h3>
                                    <p className="text-gray-500 dark:text-gray-400">Absolutely not.</p>
                                    <p className="text-gray-500 dark:text-gray-400">We focus on optimizing JavaScript
                                        and images. We do not compromise the integrity of your online store&apos;s
                                        templates in any way.
                                    </p>
                                </div>
                                <div className="mb-10">
                                    <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                        <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                                             fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd"
                                                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                                  clipRule="evenodd"></path>
                                        </svg>
                                        Can your app block scripts from any third-party app?
                                    </h3>
                                    <p className="text-gray-500 dark:text-gray-400">Sure! Unfortunately, some apps might
                                        use different methods for loading their scripts, so it can be quite challenging
                                        for the app to identify and block them. In case you’ve faced with similar
                                        issues, please contact at <a
                                            className={`font-medium text-blue-600 dark:text-blue-500 hover:underline`}
                                            href="mailto:info@unilime.group">info@unilime.group</a></p>
                                </div>
                                <div className="mb-10">
                                    <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                        <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                                             fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd"
                                                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                                  clipRule="evenodd"></path>
                                        </svg>
                                        Why has my site&apos;s Google ranking and website traffic not improved?
                                    </h3>
                                    <p className="text-gray-500 dark:text-gray-400">Google may require additional time
                                        to update your page rankings, which could be one reason why your Google page
                                        listings aren&apos;t updating promptly. </p>
                                    <p className="text-gray-500 dark:text-gray-400">It&apos;s essential to understand
                                        that SEO doesn&apos;t yield immediate impacts on your site&apos;s traffic and
                                        sales. Typically, it takes about 4 to 6 months to observe significant results.
                                        This delay isn&apos;t due to our app being slow; rather, it reflects the nature
                                        of how Google and other search engines operate. SEO is a long-term endeavor.</p>
                                </div>
                                <div className="mb-10">
                                    <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                        <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                                             fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd"
                                                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                                  clipRule="evenodd"></path>
                                        </svg>
                                        Why aren&apos;t my Google page listings updating?
                                    </h3>
                                    <p className="text-gray-500 dark:text-gray-400">It may take several weeks for Google
                                        to index your site&apos;s new information, so you may not see immediate changes
                                        in
                                        Google search results from the app&apos;s updates. However, you can expedite the
                                        process by adhering to <a
                                            className={`font-medium text-blue-600 dark:text-blue-500 hover:underline`}
                                            href="https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl?visit_id=638440368335549432-928111708&rd=1"
                                            target="_blank">
                                            Google&apos;s official guidelines</a> for requesting a recrawl of
                                        your site.</p>
                                </div>
                                <div className="mb-10">
                                    <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                        <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                                             fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd"
                                                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                                  clipRule="evenodd"></path>
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
