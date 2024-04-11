// Header
import Image from "next/image";


const Header = () => {

    return (
        <div className="max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
            <p className="text-2xl font-bold fixed left-0 top-0 flex w-full justify-center from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:from-inherit lg:static lg:w-auto  lg:rounded-xl">
                <a href="/" className="group rounded-lg" rel="noopener noreferrer">
                    <span
                        className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
                        <span
                            className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                         <Image
                             src="/speedup.svg"
                             alt="SpeedUp"
                             className="dark:invert"
                             width={100}
                             height={24}
                             priority
                         />
                            SpeedUp
                        </span>
                    </span>
                </a>
            </p>
            <div
                className="fixed bottom-0 left-0 flex w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
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