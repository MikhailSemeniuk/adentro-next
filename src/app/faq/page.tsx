import Image from "next/image";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

export default function Faq() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">

            <Header/>

            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex-column">
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                    Faq Page
                </h1>
            </div>

            <Footer/>
        </main>
    );
}
