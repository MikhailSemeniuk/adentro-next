// Header
import Image from "next/image";


const Header = () => {

    return (
        <div className="max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
            <p className="text-2xl font-bold fixed left-0 top-0 flex w-full justify-center from-zinc-200 backdrop-blur-2xl dark:from-inherit lg:static lg:w-auto  lg:rounded-xl">
                <a href="/" className="flex group" rel="noopener noreferrer">
                    <span
                        className="relative inline-flex items-center justify-center overflow-hidden text-gray-900 group dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
                        <span
                            className="flex items-center relative transition-all ease-in duration-75 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                         <Image
                             src="/speedup-1.svg"
                             alt="SpeedUp"
                             className="dark:invert rounded-md mr-4"
                             width={240}
                             height={83}
                             priority
                         />
                        </span>
                    </span>
                </a>
            </p>
            <div
                className="fixed bottom-0 left-0 flex w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
                <a
                    className="pointer-events-none flex items-end place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                    href="https://unilime.group/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span
                        className="flex mb-3 mr-1 font-semibold"> by{" "}
                    </span>
                    <Image
                        src="/unilime.svg"
                        alt="Unilime Logo"
                        className="dark:invert"
                        width={110}
                        height={24}
                        priority
                    />
                </a>
            </div>
        </div>
    );
};

export default Header;