import Image from "next/image";

const ElasticSearch = () => {

    return (
        <section className="py-20 relative flex w-full mx-auto flex-auto-no-shrink overflow-hidden lg:overflow-visible">
            <div className="container mx-auto flex flex-col justify-center gap-14 sm:gap-24 relative">
                <Image
                    src="/circles/elastic-circle.png"
                    alt="elastic-circle.png"
                    className="absolute top-0 lg:top-[-12rem] right-[25%] pointer-events-none"
                    width={1039}
                    height={978}
                />
                <h2 className="text-center text-section-heading-mobile sm:text-section-heading leading-none flex flex-col gap-8 justify-center items-center relative z-1">
                    <span>Elastic Search and LLM</span>
                    <span className="font-light text-2xl sm:text-5xl">— a powerful combination</span>
                </h2>

                <p className="sm:text-[26px] max-w-3xl relative z-1">
                    Elastic Search's robust data indexing and search capabilities combined with the analytical power of Large Language Models (LLM) offer
                    unparalleled insights into your security data. This combination allows for:
                </p>

                <ul className="grid grid-cols-elastic gap-10 lg:gap-12 ">
                    <li className="border border-main-blue border-opacity-40 rounded-md bg-white p-7 flex flex-col justify-start items-start text-start gap-3 sm:gap-6">
                        <div className="relative w-14 h-14 flex items-center justify-center">
                            <Image
                                src="/circles/elastic-item-circle.svg"
                                alt="circle"
                                className="w-full h-full max-w-[5.5rem] max-h-[5.5rem] object-contain object-center"
                                fill
                            />
                            <span className="relative z-10 text-2xl">1</span>
                        </div>
                        <h3 className="font-medium text-[22px] leading-normal">
                            Real-Time Threat Detection
                        </h3>
                        <p className="text-md font-normal leading-normal">Quickly identify and respond to security incidents with real-time data analysis.</p>
                    </li>
                    <li className="border border-main-blue border-opacity-40 rounded-md bg-white p-7 flex flex-col justify-start items-start text-start gap-3 sm:gap-6">
                        <div className="relative w-14 h-14 flex items-center justify-center">
                            <Image
                                src="/circles/elastic-item-circle.svg"
                                alt="circle"
                                className="w-full h-full max-w-[5.5rem] max-h-[5.5rem] object-contain object-center"
                                fill
                            />
                            <span className="relative z-10 text-2xl">2</span>
                        </div>
                        <h3 className="font-medium text-[22px] leading-normal">
                            Real-Time Threat Detection
                        </h3>
                        <p className="text-md font-normal leading-normal">LLMs provide deep understanding and context, making sense of complex data patterns and correlations.</p>
                    </li>
                    <li className="border border-main-blue border-opacity-40 rounded-md bg-white p-7 flex flex-col justify-start items-start text-start gap-3 sm:gap-6">
                        <div className="relative w-14 h-14 flex items-center justify-center">
                            <Image
                                src="/circles/elastic-item-circle.svg"
                                alt="circle"
                                className="w-full h-full max-w-[5.5rem] max-h-[5.5rem] object-contain object-center"
                                fill
                            />
                            <span className="relative z-10 text-2xl">3</span>
                        </div>
                        <h3 className="font-medium text-[22px] leading-normal">
                            Scalable Solutions
                        </h3>
                        <p className="text-md font-normal leading-normal">Both Elastic Search and LLMs are designed to scale with your business, ensuring consistent performance as your data grows.</p>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default ElasticSearch;
