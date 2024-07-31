import Image from "next/image";

const Quote = () => {

    return (
        <section className="py-24 sm:py-40 lg:py-64 relative flex w-full mx-auto flex-auto-no-shrink bg-white overflow-hidden">
            <div className="container mx-auto flex flex-col justify-center gap-14 sm:gap-24 relative">
                <Image
                    src="/circles/circle-simple.svg"
                    alt="circle"
                    className="absolute w-full h-full min-w-[20rem] min-h-[20rem] sm:min-w-xl sm:min-h-[36rem] right-[-9rem] sm:right-[1rem] lg:right-[12rem] max-w-xl max-h-[36rem] object-contain object-center shrink-0"
                    width="582"
                    height="582"
                />
                <p className="text-2xl sm:text-5xl sm:leading-[1.2] max-w-5xl relative z-1">
                    Partner with us to revolutionize your security operations, achieve unparalleled efficiency, and maintain unwavering compliance in an increasingly complex digital world.
                </p>
            </div>
        </section>
    );
};

export default Quote;
