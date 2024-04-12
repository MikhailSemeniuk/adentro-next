import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Privacy Policy - Unilime SpeedUp",
};

export default function Privacy() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-32 lg:p-16 px-5 bg-white">

            <Header/>

            <div className="my-4 mb-32 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex-column">
                <section className="dark:bg-gray-900">
                    <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                            Privacy Policy
                        </h1>
                        <div className="pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
                            <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
                                At SpeedUp, we are committed to safeguarding the privacy of merchants using our applications
                                (&quot;the App&quot;) on Shopify to power their stores. This Privacy Policy outlines how personal
                                information is gathered, utilized, and shared in connection with the installation or use of the
                                SpeedUp on your Shopify-supported store.
                            </p>
                            <h2 className="mb-4 text-4xl font-bold dark:text-white">
                                Personal Information Collected by the App
                            </h2>
                            <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
                                Upon installing the SpeedUp, certain information from your Shopify account becomes accessible.
                                The complete list, as available through Shopify, can be viewed <a
                                className={`font-medium text-blue-600 dark:text-blue-500 hover:underline`}
                                href="https://shopify.dev/docs/api/usage/access-scopes" target={`_blank`}>here</a>.
                            </p>
                            <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
                                Additionally, we collect the following personal information from you and/or your customers after the
                                App installation:
                            </p>
                            <ul className={`space-y-1 text-lg text-gray-500 list-disc list-inside dark:text-gray-400`}>
                                <li>Information about store visitors, including IP address, web browser details, time zone, and
                                    details about installed cookies on the device.
                                </li>
                            </ul>
                            <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
                                We gather this information directly from individuals, your Shopify account, or through technologies
                                such as cookies, log files, web beacons, tags, and pixels ensuring GDPR compliance and data security.
                            </p>
                            <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
                                To view permissions explicitly for each app, click the &quot;View Details&quot; link on the Shopify apps page
                                in your Shopify admin.
                            </p>
                            <h2 className="mb-4 text-4xl font-bold dark:text-white">
                                How We Use Your Personal Information
                            </h2>
                            <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
                                We utilize the collected personal information to deliver the Service, operate the App, and:
                            </p>
                            <ul className={`mb-6 space-y-1 text-lg text-gray-500 list-disc list-inside dark:text-gray-400`}>
                                <li>Communicate with you</li>
                                <li>Optimize and enhance the App</li>
                                <li>Provide information or advertising related to our products or services</li>
                            </ul>
                            <h2 className="mb-4 text-4xl font-bold dark:text-white">
                                Sharing Your Personal Information
                            </h2>
                            <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
                                Rest assured, your information is never shared for advertising purposes. In specific situations, we
                                may share your Personal Information to comply with laws and regulations, respond to legal requests,
                                or protect our rights.
                            </p>
                            <h2 className="mb-4 text-4xl font-bold dark:text-white">
                                Your Rights
                            </h2>
                            <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
                                For European residents, you have the right to access, correct, update, or delete your personal
                                information. To exercise this right, contact us via e-mail specified below. If you are a European
                                resident, note that we process your information to fulfill contracts or pursue legitimate business
                                interests, and your data may be transferred outside of Europe.
                            </p>
                            <h2 className="mb-4 text-4xl font-bold dark:text-white">
                                Changes
                            </h2>
                            <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
                                We may update this Privacy Policy to reflect changes in practices or for operational, legal, or
                                regulatory reasons.
                            </p>
                            <h2 className="mb-4 text-4xl font-bold dark:text-white">
                                Contact Us
                            </h2>
                            <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
                                For more information or questions about our privacy practices, contact us at <a className={`font-medium text-blue-600 dark:text-blue-500 hover:underline`} href="mailto:info@unilime.group">info@unilime.group</a>.
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            <Footer/>

        </main>
    );
}
