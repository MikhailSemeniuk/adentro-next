import Image from "next/image";

const Expertise = () => {

    return (
        <section className="py-20 md:pt-40 relative flex w-full mx-auto flex-auto-no-shrink overflow-hidden lg:overflow-visible">
            <div className="container mx-auto text-center flex flex-col justify-center gap-16 sm:gap-24 relative">
                <div className="">
                    <h2 className="text-section-subheading leading-none text-left">
                        Our expertise in automation
                    </h2>
                    <p className="text-left last:mt-7 max-w-lg text-md leading-loose">
                        We specialize in developing sophisticated automation frameworks using the latest GenAI technologies, seamlessly integrating Splunk and
                        Elastic.
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-logos-auto gap-8 md:gap-14 items-center justify-items-center sm:ml-32 lg:ml-64">
                    <Image
                        src="/logos/elastic.png"
                        alt="elastic.png"
                        className=" max-h-12 md:max-h-20 object-contain object-center h-auto w-auto"
                        width={224}
                        height={76}
                    />
                    <Image
                        src="/logos/splunk.png"
                        alt="splunk.png"
                        className=" max-h-12 md:max-h-20 object-contain object-center h-auto w-auto"
                        width={226}
                        height={66}
                    />
                    <Image
                        src="/logos/Google_Cloud_logo.png"
                        alt="Google_Cloud_logo.png"
                        className=" max-h-12 md:max-h-20 object-contain object-center h-auto w-auto"
                        width={269}
                        height={42}
                    />
                    <Image
                        src="/logos/Amazon_Web_Services_Logo.png"
                        alt="Amazon_Web_Services_Logo.png"
                        className=" max-h-12 md:max-h-14 object-contain object-center h-auto w-auto"
                        width={118}
                        height={71}
                    />
                </div>
                <p className="text-left max-w-lg text-md leading-loose  sm:ml-32 lg:ml-64 w-full">
                    Our solutions empower businesses to streamline their security operations, enhance efficiency, and ensure robust compliance with ever-evolving regulatory requirements.
                </p>
            </div>
        </section>
    );
};

export default Expertise;
