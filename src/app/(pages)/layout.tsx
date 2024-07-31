import type {Metadata} from "next";
import {Noto_Sans} from "next/font/google";
import "../globals.css";
import Header from "@/app/components/common/Header";
import Footer from "@/app/components/common/Footer";

const notoSans = Noto_Sans({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Adentro",
    description: "Efficiency comes with\n automation\n",
};

export default function RootLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={notoSans.className}>
        <main className="flex min-h-screen flex-col items-center justify-between bg-white">
            <Header/>
            {children}
            <Footer/>
        </main>
        </body>
        </html>
    );
}
