// Header
import Image from "next/image";


const Header = () => {

    return (
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
            <p className="text-2xl font-bold fixed left-0 top-0 flex w-full justify-center from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:from-inherit lg:static lg:w-auto  lg:rounded-xl">
                <a
                    href="/"
                    className="group rounded-lg"
                    rel="noopener noreferrer"
                >
                    SpeedUp Shopify App
                </a>
            </p>
            <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
                <a
                    className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                    href="https://unilime.group/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    By{" "}
                    <Image
                        src="/unilime.svg"
                        alt="Unilime Logo"
                        className="dark:invert"
                        width={100}
                        height={24}
                        priority
                    />
                </a>
            </div>
        </div>
    );
};

export default Header;