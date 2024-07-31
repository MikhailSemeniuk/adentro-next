import Image from "next/image";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Hero from "./components/homepage/Hero";
import Expertise from "@/app/components/homepage/Expertise";
import WhyUs from "@/app/components/homepage/WhyUs";
import ElasticSearch from "@/app/components/homepage/ElasticSearch";
import GenAI from "@/app/components/homepage/GenAI";
import Quote from "@/app/components/homepage/Quote";

export default function Home() {
    return (
        <>
            <Header/>
            <main className="flex min-h-screen flex-col items-center justify-between bg-white">
                <Hero/>
                <Expertise/>
                <WhyUs/>
                <ElasticSearch/>
                <GenAI/>
                <Quote/>
            </main>
            <Footer/>
        </>
    );
}
