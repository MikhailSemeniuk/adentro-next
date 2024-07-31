import Image from "next/image";

const WhyUs = () => {

    return (
        <section id="approach" className="py-20 md:pt-40 relative flex w-full mx-auto flex-auto-no-shrink overflow-hidden lg:overflow-visible">
            <div className="container mx-auto text-center flex flex-col justify-center gap-14 sm:gap-28 relative">
                <h2 className="text-section-subheading leading-none text-left">
                    Why choose us?
                </h2>

                <ul className="grid grid-cols-why-us gap-10 lg:gap-16 lg:ml-28 sm:ml-16">
                    <li className="grid grid-cols-1 sm:grid-cols-[88px_1fr] gap-3 sm:gap-8">
                        <Image
                            src="/icons/AdvancedAutomation.svg"
                            alt="AdvancedAutomation.svg"
                            className="w-full h-full max-w-[5.5rem] max-h-[5.5rem] object-contain object-center"
                            width={88}
                            height={88}
                        />
                        <div className="flex flex-col justify-start items-start text-start gap-3 sm:gap-6">
                            <h3 className="font-medium text-[28px] leading-normal">
                                Advanced Automation
                            </h3>
                            <p className="text-md font-normal leading-loose">
                                Leverage the power of AI to automate complex security tasks, reducing manual effort and minimizing human error.
                            </p>
                        </div>
                    </li>
                    <li className="grid grid-cols-1 sm:grid-cols-[88px_1fr] gap-3 sm:gap-8">
                        <Image
                            src="/icons/LLM.svg"
                            alt="Icon"
                            className="w-full h-full max-w-[5.5rem] max-h-[5.5rem] object-contain object-center"
                            width={88}
                            height={88}
                        />
                        <div className="flex flex-col justify-start items-start text-start gap-3 sm:gap-6">
                            <h3 className="font-medium text-[28px] leading-normal">
                                Leveraging Large Language
                                Models (LLM)
                            </h3>
                            <p className="text-md font-normal leading-loose">
                                Our automated frameworks ensure your organization remains compliant with the latest regulations, mitigating risks and
                                safeguarding your reputation. </p>
                        </div>
                    </li>
                    <li className="grid grid-cols-1 sm:grid-cols-[88px_1fr] gap-3 sm:gap-8">
                        <Image
                            src="/icons/DAST.svg"
                            alt="DAST.svg"
                            className="w-full h-full max-w-[5.5rem] max-h-[5.5rem] object-contain object-center"
                            width={88}
                            height={88}
                        />
                        <div className="flex flex-col justify-start items-start text-start gap-3 sm:gap-6">
                            <h3 className="font-medium text-[28px] leading-normal">
                                SAST/DAST Scanning </h3>
                            <p className="text-md font-normal leading-loose">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>
                    </li>
                    <li className="grid grid-cols-1 sm:grid-cols-[88px_1fr] gap-3 sm:gap-8">
                        <Image
                            src="/icons/ComplianceGovernance.svg"
                            alt="Icon"
                            className="w-full h-full max-w-[5.5rem] max-h-[5.5rem] object-contain object-center"
                            width={88}
                            height={88}
                        />
                        <div className="flex flex-col justify-start items-start text-start gap-3 sm:gap-6">
                            <h3 className="font-medium text-[28px] leading-normal">Compliance Governance</h3>
                            <p className="text-md font-normal leading-loose">Our automated frameworks ensure your organization remains compliant with the latest
                                regulations, mitigating risks and safeguarding your reputation.</p>
                        </div>
                    </li>
                    <li className="grid grid-cols-1 sm:grid-cols-[88px_1fr] gap-3 sm:gap-8">
                        <Image
                            src="/icons/DevSecOps.svg"
                            alt="Icon"
                            className="w-full h-full max-w-[5.5rem] max-h-[5.5rem] object-contain object-center"
                            width={88}
                            height={88}
                        />
                        <div className="flex flex-col justify-start items-start text-start gap-3 sm:gap-6">
                            <h3 className="font-medium text-[28px] leading-normal">DevSecOps</h3>
                            <p className="text-md font-normal leading-loose">Integrate security seamlessly into your development lifecycle with our DevSecOps
                                approach, enhancing collaboration and delivering robust, secure applications faster.</p>
                        </div>
                    </li>
                    <li className="grid grid-cols-1 sm:grid-cols-[88px_1fr] gap-3 sm:gap-8">
                        <Image
                            src="/icons/Vulnerability.svg"
                            alt="Icon"
                            className="w-full h-full max-w-[5.5rem] max-h-[5.5rem] object-contain object-center"
                            width={88}
                            height={88}
                        />
                        <div className="flex flex-col justify-start items-start text-start gap-3 sm:gap-6">
                            <h3 className="font-medium text-[28px] leading-normal">Vulnerability Management</h3>
                            <p className="text-md font-normal leading-loose">Proactively manage and remediate vulnerabilities with our comprehensive solution,
                                ensuring your systems remain secure and resilient against emerging threats.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default WhyUs;
