"use client"; // Header
import Image from "next/image";
import {useEffect, useState} from "react";


const Header = () => {
    const [active, setActive] = useState<boolean>(true);
    const [isScroll, setIsScroll] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            window.scrollY > 10 ? setIsScroll(true) : setIsScroll(false)
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isScroll]);

    const onClick = () => {
        setActive(!active)
    };

    return (
        <header
            className={`fixed transition-all left-0 top-0 right-0 flex-auto-no-shrink w-full items-center justify-between text-sm lg:flex z-20 md:py-11 py-6 ${isScroll && `shadow-md backdrop-blur bg-white/30`}`}>
            <div className={`container grid grid-cols-2 sm:flex items-center justify-center gap-6 md:gap-12 mx-auto after:left-0 after:top-0 after:bg-black/30 after:transition-opacity after:backdrop-blur after:fixed after:z-9 after:h-dvh after:block after:w-full  ${active ? 'after:opacity-0 after:invisible' : 'after:opacity-1 after:visible'}`}>
                <nav className="hidden sm:flex justify-center w-auto">
                    <ul className="flex items-center justify-center gap-6 md:gap-12">
                        <li className="text-sm font-light">
                            <a className="hover:underline text-sm font-normal" href="/approach">Approach</a>
                        </li>
                        <li>
                            <a className="hover:underline" href="/services">Services</a>
                        </li>
                    </ul>
                </nav>
                <a href="/" className="sm:row-end-1 sm:col-span-2 justify-start sm:justify-center sm:col-span-none flex group" rel="noopener noreferrer">
                    <Image
                        src="/logo.svg"
                        alt="Adentro"
                        className="dark:invert"
                        width={145}
                        height={25}
                        priority
                    />
                </a>
                <button
                    onClick={onClick}
                    className="ml-auto flex sm:hidden z-99"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="Vector" d="M21 12H3M21 6H3M15 18H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </button>
                <nav className="hidden sm:flex justify-center w-auto">
                    <ul className="flex items-center justify-center gap-6 md:gap-12">
                        <li>
                            <a className="hover:underline" href="/culture">Culture</a>
                        </li>
                        <li>
                            <a className="hover:underline" href="/contact">Contact</a>
                        </li>
                    </ul>
                </nav>
                <nav
                    className={`flex sm:hidden shadow-lg justify-center w-2/3 fixed top-0 right-0 z-10 bg-white h-dvh transition-all ${active ? 'translate-x-full' : 'translate-x-0 '}`}>
                    <button
                        onClick={onClick}
                        className="absolute right-4 top-6 sm:hidden z-99"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
                                  fill="currentColor"/>
                        </svg>
                    </button>
                    <ul
                        className="flex items-center justify-start flex-col gap-6 md:gap-12 py-20">
                        <li className="text-m">
                            <a className="hover:underline text-lg" href="/approach">Approach</a>
                        </li>
                        <li>
                            <a className="hover:underline text-lg" href="/services">Services</a>
                        </li>
                        <li>
                            <a className="hover:underline text-lg" href="/culture">Culture</a>
                        </li>
                        <li>
                            <a className="hover:underline text-lg" href="/contact">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;