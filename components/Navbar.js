import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const texts = {
  English: ["About me", "Experience", "Contact"],
  Spanish: ["Sobre mi", "Experiencia", "Contacto"],
  French: ["Sur mon", "Expérience", "Contact"],
};

export default function NavBar({ language, color }) {
 
  const [scrolling, setScrolling] = useState(true);
  const [scrollTop, setScrollTop] = useState(0);

  // Watch if scroll Down or Up
  useEffect(() => {
    function onScroll() {
      let currentPosition = window.pageYOffset;
      if (currentPosition > scrollTop && currentPosition > 180) {
        // downscroll code
        setScrolling(false);
      } else {
        // upscroll code
        setScrolling(true);
      }
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    }

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [scrollTop]);

  function toAbout() {
    let element = document.getElementById('orange');
    element.scrollIntoView({behavior: "smooth"});
  }
  function toExperience() {
    let element = document.getElementById('yellow');
    element.scrollIntoView({behavior: "smooth"});
  }
  function toContact() {
    let element = document.getElementById('grey');
    element.scrollIntoView({behavior: "smooth"});
  }

  return (
    <>
      <nav
        className={
          "fixed max-w-md md:max-w-6xl shadow-lg bg-palette-black md:mx-auto top-0 left-0 right-0 justify-between z-40 ease-in-out duration-500 delay-300 flex p-4 " +
          (scrolling ? "transition-transform" : "-translate-y-16 transform transition-transform")
        }
      >
        <Link href="/" passHref>
          <svg width="23.06" height="30" viewBox="0 0 56 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              className="transition-all duration-500"
              d="M52.8184 69.785H35.0374L21.4353 53.9519V0.143459L52.8184 69.785Z"
              fill={color}
              opacity={0.5}
            />
            <path
              className="transition-all duration-500"
              d="M0.736328 0H21.4353V67.4194H16.7678V58.5634H13.7239V67.4194H0.736328V0Z"
              fill={color}
            />
            <path
              className="transition-all duration-500"
              d="M55.7363 71.5592H35.0374L35.0374 3.54839L39.7048 3.54839V24.8387H42.7488V3.54839L55.7363 3.54839L55.7363 71.5592Z"
              fill={color}
            />
          </svg>
        </Link>
        <div className="hidden md:flex flex-row text-xs justify-evenly items-center space-x-4">
          <textbtn onClick={toAbout}>{texts[language][0]}</textbtn>
          <div
            className={
              "w-1 h-1 transition-all duration-500 rounded-full " +
              (color == "#2FEB98"
                ? "bg-palette-green"
                : color == "#EB784B"
                ? "bg-palette-orange"
                : color == "#FFEC40"
                ? "bg-palette-yellow"
                : "bg-palette-grey")
            }
          />
          <textbtn onClick={toExperience}>{texts[language][1]}</textbtn>
          <div
            className={
              "w-1 h-1 transition-all duration-500 rounded-full " +
              (color == "#2FEB98"
                ? "bg-palette-green"
                : color == "#EB784B"
                ? "bg-palette-orange"
                : color == "#FFEC40"
                ? "bg-palette-yellow"
                : "bg-palette-grey")
            }
          />
          <textbtn onClick={toContact}>{texts[language][2]}</textbtn>
        </div>
      </nav>
    </>
  );
}
