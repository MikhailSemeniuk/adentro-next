import Image from "next/image";

const GenAi = () => {

    return (
        <section id="culture" className="py-20 relative flex w-full mx-auto flex-auto-no-shrink overflow-hidden lg:overflow-visible">
            <div className="container mx-auto flex flex-col justify-center gap-14 sm:gap-24 relative">
                <h2 className="text-center text-section-heading-mobile sm:text-section-heading leading-none flex flex-col gap-8 justify-center items-center relative z-1">
                    <span>GenAI Modules</span>
                    <span className="font-light text-2xl sm:text-5xl">in security and process automation</span>
                </h2>

                <p className="sm:text-[26px] max-w-3xl relative z-1">
                    Our GenAI modules are at the forefront of security and process automation, providing innovative solutions tailored to your needs. Key
                    features include:
                </p>

                <ul className="grid grid-cols-modules gap-10 lg:gap-12 ">
                    <li className="border border-main-blue border-opacity-40 rounded-md bg-white p-7 flex flex-col justify-start items-start text-start gap-3 sm:gap-6">
                        <div className="relative w-14 h-14 flex items-center justify-center">
                            <Image
                                src="/circles/elastic-item-circle.svg"
                                alt="circle"
                                className="w-full h-full max-w-[5.5rem] max-h-[5.5rem] object-contain object-center"
                                fill
                            />
                            <Image
                                src="/icons/monitoring.svg"
                                alt="monitoring.svg"
                                className="w-full h-full max-w-[28px] max-h-[28px]"
                                width="28"
                                height="28"
                            />
                            <span className="relative z-10 text-2xl"></span>
                        </div>
                        <h3 className="font-medium text-[26px] leading-normal">AI-Driven Security Monitoring</h3>
                        <p className="text-md font-normal leading-normal">Our GenAI modules continuously monitor and analyze network traffic, detecting
                            suspicious activities and potential threats with unprecedented accuracy.</p>
                    </li>
                    <li className="border border-main-blue border-opacity-40 rounded-md bg-white p-7 flex flex-col justify-start items-start text-start gap-3 sm:gap-6">
                        <div className="relative w-14 h-14 flex items-center justify-center">
                            <Image
                                src="/circles/elastic-item-circle.svg"
                                alt="circle"
                                className="w-full h-full max-w-[5.5rem] max-h-[5.5rem] object-contain object-center"
                                fill
                            />
                            <Image
                                src="/icons/automated.svg"
                                alt="analysis.svg"
                                className="w-full h-full max-w-[28px] max-h-[28px]"
                                width="28"
                                height="28"
                            />
                            <span className="relative z-10 text-2xl"></span>
                        </div>
                        <h3 className="font-medium text-[26px] leading-normal">Automated Incident Response</h3>
                        <p className="text-md font-normal leading-normal">GenAI-powered automation enables rapid incident response, executing predefined actions
                            to mitigate threats and minimize damage.</p>
                    </li>
                    <li className="border border-main-blue border-opacity-40 rounded-md bg-white p-7 flex flex-col justify-start items-start text-start gap-3 sm:gap-6">
                        <div className="relative w-14 h-14 flex items-center justify-center">
                            <Image
                                src="/circles/elastic-item-circle.svg"
                                alt="circle"
                                className="w-full h-full max-w-[5.5rem] max-h-[5.5rem] object-contain object-center"
                                fill
                            />
                            <Image
                                src="/icons/analysis.svg"
                                alt="analysis.svg"
                                className="w-full h-full max-w-[28px] max-h-[28px]"
                                width="28"
                                height="28"
                            />
                            <span className="relative z-10 text-2xl"></span>
                        </div>
                        <h3 className="font-medium text-[26px] leading-normal">Predictive Analysis</h3>
                        <p className="text-md font-normal leading-normal">Utilize GenAI to predict potential security breaches and vulnerabilities, allowing proactive measures to strengthen your defenses.</p>
                    </li>
                    <li className="border border-main-blue border-opacity-40 rounded-md bg-white p-7 flex flex-col justify-start items-start text-start gap-3 sm:gap-6">
                        <div className="relative w-14 h-14 flex items-center justify-center">
                            <Image
                                src="/circles/elastic-item-circle.svg"
                                alt="circle"
                                className="w-full h-full max-w-[5.5rem] max-h-[5.5rem] object-contain object-center"
                                fill
                            />
                            <Image
                                src="/icons/optimization.svg"
                                alt="optimization.svg"
                                className="w-full h-full max-w-[28px] max-h-[28px]"
                                width="28"
                                height="28"
                            />
                            <span className="relative z-10 text-2xl"></span>
                        </div>
                        <h3 className="font-medium text-[26px] leading-normal">Process Optimization</h3>
                        <p className="text-md font-normal leading-normal">Automate routine processes and workflows, freeing up valuable resources and enhancing overall operational efficiency.</p>
                    </li>
                    <li className="border border-main-blue border-opacity-40 rounded-md bg-white p-7 flex flex-col justify-start items-start text-start gap-3 sm:gap-6">
                        <div className="relative w-14 h-14 flex items-center justify-center">
                            <Image
                                src="/circles/elastic-item-circle.svg"
                                alt="circle"
                                className="w-full h-full max-w-[5.5rem] max-h-[5.5rem] object-contain object-center"
                                fill
                            />
                            <Image
                                src="/icons/dynamic.svg"
                                alt="dynamic.svg"
                                className="w-full h-full max-w-[28px] max-h-[28px]"
                                width="28"
                                height="28"
                            />
                            <span className="relative z-10 text-2xl"></span>
                        </div>
                        <h3 className="font-medium text-[26px] leading-normal">Dynamic Threat Intelligence</h3>
                        <p className="text-md font-normal leading-normal">GenAI modules aggregate and analyze threat intelligence from multiple sources, providing real-time updates and actionable insights to stay ahead of emerging threats.</p>
                    </li>
                    <li className="items-center justify-center hidden lg:flex">
                        <Image
                            src="/circles/circle-simple.svg"
                            alt="circle"
                            className="w-full h-full max-w-48 max-h-48 object-contain object-center"
                            width="196"
                            height="196"
                        />
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default GenAi;
