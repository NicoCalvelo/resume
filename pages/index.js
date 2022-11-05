import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import FloatingIcons from "../components/FloatingIcons";
import NavBar from "../components/Navbar";
import AboutMe from "../components/resume/AboutMe";
import Contact from "../components/resume/Contact";
import Experience from "../components/resume/Experience/Experience";
import Header from "../components/resume/Header";
import styles from "../components/resume/header.module.scss";
import Interests from "../components/resume/Interests";
import Projects from "../components/resume/Projects/Projects";
import SocailSideBar from "../components/SocialSideBar";

const siteTitle = "@nico.calvelo";

export default function Home() {
  const [color, setColor] = useState("#2FEB98");

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
        <meta name="description" content="Welcome to my web page! See my resume and learn about me." />
        <meta name="keywords" content="Nicolas, Calvelo" />
        <meta name="author" content="Nico Calvelo"></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="twitter:card" content="summary_large_image" />
        <title>{siteTitle}</title>
      </Head>
      <main id="main" className="fixed text-palette-grey-blue overflow-y-scroll w-full h-screen ">
        <Header />
        <FloatingIcons />
        <div style={{ zIndex: "40" }} className="relative bg-palette-black">
          <NavBar color={color} />
          <AboutMe />
          <Experience />
          <Projects />
          <Contact />
          <SocailSideBar color={color} />
        </div>
      </main>
    </>
  );
}
