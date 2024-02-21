import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Unilime SpeedUp: Shopify Pagespeed App",
    description: "We increase the conversion rate by increasing Core Web Vitals metrics\n",
    verification: {
        google: "k5N-HIiMH2y6swBG7i4aYnmzZKQnyChjoRY3gGtWt3w",
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>{children}</body>
        </html>
    );
}
