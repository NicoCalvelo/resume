import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Header from "../components/home/Header";
import Language from "../components/home/Language";

const name = "Nico";
const siteTitle = "Nico Calvelo";

export default function Home() {
  const [language, setLanguage] = useState("English");

  return (
    <div className="mx-auto max-w-6xl text-palette-grey-blue space-y-20">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="See Nicolas Calvelo resume online Now!" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <title>{siteTitle}</title>
      </Head>
      <Language selected={language} onSelect={(newLanguage) => setLanguage(newLanguage)} />
      <Header language={language} />
    </div>
  );
}
