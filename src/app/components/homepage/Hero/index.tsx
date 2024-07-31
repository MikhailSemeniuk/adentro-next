import Image from "next/image";

const Hero = () => {

    return (
        <section className="py-20 pt-40 md:pt-60 relative flex w-full mx-auto flex-auto-no-shrink overflow-hidden lg:overflow-visible">
            <div className="container mx-auto text-center flex flex-col justify-center gap-9 relative">
                <Image
                    src="/hero-circle.png"
                    alt="hero-circle.png"
                    className="dark:invert absolute top-[25%] left-[33%] md:top-[45%] transform -translate-y-1/2 z-0"
                    width={1040}
                    height={978}
                    priority
                />
                <h1 className="text-main-heading-mobile sm:text-main-heading relative z-2">
                    Efficiency comes with <span className="bg-gradient-3 bg-clip-text  text-transparent  relative z-1">automation</span>
                </h1>
                <p className="max-w-4xl mx-auto text-md relative z-1">
                    In today&apos;s dynamic digital landscape, efficient security operations are crucial for organizational success and resilience. Cutting-edge
                    automation transforms compliance governance and risk assessment.
                </p>
                <div className="flex flex-col gap-4 justify-center items-center relative z-1">
                    <a href="/contact" className="bg-[#7774AA] text-white py-4 px-8 min-w-48 rounded transition-shadow hover:shadow-lg">Get started</a>
                    <div className="flex items-center gap-2">
                        <span>Pushing the limits since 2013</span>
                        <Image
                            src="/switz.svg"
                            alt="switz.svg"
                            className="dark:invert"
                            width={18}
                            height={14}
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
