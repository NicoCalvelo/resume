import Head from "next/head";
import { useEffect, useState } from "react";
import AboutMe from "../components/resume/AboutMe";
import Contact from "../components/resume/Contact";
import Experience from "../components/resume/Experience/Experience";
import Header from "../components/resume/Header";
import Interests from "../components/resume/Interests";
import Language from "../components/resume/Language";
import Projects from "../components/resume/Projects/Projects";
import NavBar from "../components/Navbar";
import SocailSideBar from "../components/SocialSideBar";

const siteTitle = "Resume @nico.calvelo";

export default function Resume() {
  const [language, setLanguage] = useState("French");
  const [color, setColor] = useState("#2FEB98");

  useEffect(() => {
    let previousSelectedLanguage = localStorage.getItem("language");
    if (previousSelectedLanguage) setLanguage(previousSelectedLanguage);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      // Loop over the entries
      entries.forEach((entry) => {
        // If the element is visible
        if (entry.isIntersecting) {
          // Add the animation class
          if (entry.target.id === "green") {
            setColor("#2FEB98");
          } else if (entry.target.id === "orange") {
            setColor("#EB784B");
          } else if (entry.target.id === "yellow") {
            setColor("#FFEC40");
          } else if (entry.target.id === "purple") {
            setColor("#EB2FA0");
          } else if (entry.target.id === "grey") {
            setColor("#DFDFDF");
          }
        }
      });
    });
    observer.observe(document.getElementById("green"));
    observer.observe(document.getElementById("orange"));
    observer.observe(document.getElementById("yellow"));
    observer.observe(document.getElementById("purple"));
    observer.observe(document.getElementById("grey"));
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="og:title" content={siteTitle} />
        <meta name="description" content="See my resume online Here!" />
        <meta name="keywords" content="Nicolas, Calvelo, Resume, CV" />
        <meta name="author" content="Nico Calvelo"></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="twitter:card" content="summary_large_image" />
        <title>{siteTitle}</title>
      </Head>
      <main id="main" className="relative mx-auto md:pl-16 md:pr-6 max-w-6xl text-palette-grey-blue space-y-10 md:space-y-16">
        <NavBar language={language} color={color} />
        <Language
          language={language}
          onSelect={(newLanguage) => {
            setLanguage(newLanguage);
            localStorage.setItem("language", newLanguage);
          }}
        />
        <Header language={language} />
        <AboutMe language={language} />
        <Interests language={language} />
        <Experience language={language} />
        <Projects language={language} />
        <Contact language={language} />
        <SocailSideBar color={color} />
      </main>
    </>
  );
}
