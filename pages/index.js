import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import AboutMe from "../components/home/AboutMe";
import Experience from "../components/home/Experience";
import Header from "../components/home/Header";
import Interests from "../components/home/Interests";
import Language from "../components/home/Language";
import NavBar from "../components/home/Navbar";
import Skills from "../components/home/Skills";

const name = "Nico";
const siteTitle = "Nico Calvelo";

export default function Home() {
  const [language, setLanguage] = useState("English");

  useEffect(() => {
    let previousSelectedLanguage = localStorage.getItem("language");
    if (previousSelectedLanguage) setLanguage(previousSelectedLanguage);
  }, []);

  return (
    <>
      
      <div className="relative mx-auto max-w-5xl px-10 text-palette-grey-blue space-y-10">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="See Nicolas Calvelo resume online Now!" />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
          <title>{siteTitle}</title>
        </Head>
        <NavBar language={language} />
        <Language
          language={language}
          onSelect={(newLanguage) => {
            setLanguage(newLanguage);
            localStorage.setItem("language", newLanguage);
          }}
        />
        <Header language={language} />
        <AboutMe language={language} />
        <Skills language={language} />
        <Interests language={language} />
        <Experience language={language} />
      </div>
    </>
  );
}
