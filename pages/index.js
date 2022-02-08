import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import AboutMe from "../components/home/AboutMe";
import Header from "../components/home/Header";
import Language from "../components/home/Language";
import NavBar from "../components/home/Navbar";

const name = "Nico";
const siteTitle = "Nico Calvelo";

export default function Home() {
  const [language, setLanguage] = useState("English");

  useEffect(() => {
    let previousSelectedLanguage = localStorage.getItem("language");
    if (previousSelectedLanguage) setLanguage(previousSelectedLanguage);
  }, []);

  return (
    <div className="mx-auto max-w-5xl px-10 text-palette-grey-blue space-y-10">
      <NavBar language={language}/>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="See Nicolas Calvelo resume online Now!" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <title>{siteTitle}</title>
      </Head>
      <Language
        selected={language}
        onSelect={(newLanguage) => {
          setLanguage(newLanguage);
          localStorage.setItem("language", newLanguage);
        }}
      />
      <Header language={language} />
      <AboutMe language={language} />
    </div>
  );
}
