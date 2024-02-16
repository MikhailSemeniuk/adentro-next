import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

export default function Privacy() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">

            <Header/>

            <div
                className="my-4 mb-32 z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex-column">
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                    Privacy policy
                </h1>
                <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
                    At UnilimeApp, we are committed to safeguarding the privacy of merchants using our applications
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                    ("the Service") on Shopify to power their stores. This Privacy Policy outlines how personal
                    information is gathered, utilized, and shared in connection with the installation or use of the
                    UnilimeApp on your Shopify-supported store.
                </p>
                <h2 className="mb-4 text-4xl font-bold dark:text-white">
                    Personal Information Collected by the App
                </h2>
                <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
                    Upon installing the UnilimeApp, certain information from your Shopify account becomes accessible.
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
                    such as cookies, log files, web beacons, tags, and pixels. We also use hotjar.com for recording
                    visitor sessions, ensuring GDPR compliance and data security.
                </p>
                <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                    To view permissions explicitly for each app, click the "View Details" link on the Shopify apps page
                    in your Shopify admin.
                </p>
                <h2 className="mb-4 text-4xl font-bold dark:text-white">
                    How We Use Your Personal Information
                </h2>
                <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
                    We utilize the collected personal information to deliver the Service, operate the App, and:
                </p>
                <ul className={`space-y-1 text-lg text-gray-500 list-disc list-inside dark:text-gray-400`}>
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
                    information. To exercise this right, contact us at help@unilimeapp.com. If you are a European
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
                    For more information or questions about our privacy practices, contact us at help@unilime.group.
                </p>
            </div>

            <Footer/>

        </main>
    );
}
