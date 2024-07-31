// Footer

import Image from "next/image";

const Footer = () => {

    return (
        <footer className="py-16 relative flex w-full mx-auto flex-auto-no-shrink overflow-hidden">
            <Image
                src="/circles/footer-circle.png"
                alt="footer-circle"
                className="dark:invert absolute left-[-20%] sm:left-[-10%] sm:top-[10%]"
                width={686}
                height={686}
                priority
            />
            <div className="container flex justify-center items-center flex-col w-full mx-auto">
                <div className="flex flex-col justify-center items-center gap-6 max-w-lg text-center mb-20 md:mb-32 lg:mb-52">
                    <h2 className="text-footer-heading-mobile md:text-footer-heading">
                        Let’s make the&nbsp;connection!
                    </h2>
                    <a
                        href="mailto:email@email.com"
                        className="bg-gradient-3 bg-clip-text text-xl md:text-3xl text-transparent relative hover:before:w-0 before:w-full before:h-0.5 before:absolute before:bg-gradient-3 before:bottom-0 before:left-0 before:transition-all">
                        email@email.com
                    </a>
                </div>
                <span className="text-sm text-center ">
                    &#169; {new Date().getFullYear()} adentro AG | Sihlbruggstrasse 109 | CH 6340 Baar ZG | Switzerland
                </span>
            </div>
        </footer>
    );
};

export default Footer;
