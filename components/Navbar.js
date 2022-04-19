import Image from "next/image";
import Link from "next/link";
import styles from "./navBar.module.scss";
import { useEffect, useState } from "react";

const texts = {
  English: ["About me", "Experience", "Projects", "Contact"],
  Spanish: ["Sobre mi", "Experiencia", "Proyectos", "Contacto"],
  French: ["Sur moi", "Expérience", "Projets", "Contact"],
};

export default function NavBar({ language, color }) {
  const [scrolling, setScrolling] = useState(true);
  const [scrollTop, setScrollTop] = useState(0);
  const [open, setOpen] = useState(false);

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

  function scrollTo(elementId){
    var element = document.getElementById(elementId);
    var headerOffset = 55;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }

  return (
    <>
      <nav
        className={
          "fixed max-w-md md:max-w-6xl shadow-lg bg-palette-black md:mx-auto top-0 left-0 right-0 justify-between z-40 ease-in-out duration-500 delay-300 p-4 " +
          (scrolling ? "transition-transform" : "-translate-y-16 transform transition-transform")
        }
      >
        <div
          className={
            "relative md:hidden flex flex-col text-sm items-center space-y-2 ease-in-out duration-500 " +
            (open ? "" : "-top-1 -mt-28")
          }
        >
          <textbtn
            onClick={() => {
              setOpen(false);
              scrollTo('orange');
            }}
          >
            {texts[language][0]}
          </textbtn>
          <textbtn
            onClick={() => {
              setOpen(false);
              scrollTo('yellow');
            }}
          >
            {texts[language][1]}
          </textbtn>
          <textbtn
            onClick={() => {
              setOpen(false);
              scrollTo('purple');
            }}
          >
            {texts[language][2]}
          </textbtn>
          <textbtn
            onClick={() => {
              setOpen(false);
              scrollTo('grey');
            }}
          >
            {texts[language][3]}
          </textbtn>
        </div>
        <div className="flex flex-row justify-between">
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
          <div
            onClick={() => {
              setOpen(!open);
            }}
            className="flex w-2/5 justify-end md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              viewBox="0 0 24 24"
              fill="none"
              stroke={color}
              strokeWidth="2"
            >
              <path
                className="transition transition-all duration-500"
                strokeLinecap="round"
                strokeLinejoin="round"
                d={"M4 " + (open ? "15l7-7 7 " : "6h16M4 12h16m-7 6h") + "7"}
              />
            </svg>
          </div>
          <div className="hidden md:flex flex-row text-xs justify-evenly items-center space-x-4">
            <textbtn onClick={() => {scrollTo('orange');}}>{texts[language][0]}</textbtn>
            <div
              className={
                "w-1 h-1 transition-all duration-500 rounded-full " +
                (color == "#2FEB98"
                  ? "bg-palette-green"
                  : color == "#EB784B"
                  ? "bg-palette-orange"
                  : color == "#FFEC40"
                  ? "bg-palette-yellow"
                  : color == "#EB2FA0"
                  ? "bg-palette-purple"
                  : "bg-palette-grey")
              }
            />
            <textbtn onClick={() => {scrollTo('yellow');}}>{texts[language][1]}</textbtn>
            <div
              className={
                "w-1 h-1 transition-all duration-500 rounded-full " +
                (color == "#2FEB98"
                  ? "bg-palette-green"
                  : color == "#EB784B"
                  ? "bg-palette-orange"
                  : color == "#FFEC40"
                  ? "bg-palette-yellow"
                  : color == "#EB2FA0"
                  ? "bg-palette-purple"
                  : "bg-palette-grey")
              }
            />
            <textbtn onClick={() => {scrollTo('purple');}}>{texts[language][2]}</textbtn>
            <div
              className={
                "w-1 h-1 transition-all duration-500 rounded-full " +
                (color == "#2FEB98"
                  ? "bg-palette-green"
                  : color == "#EB784B"
                  ? "bg-palette-orange"
                  : color == "#FFEC40"
                  ? "bg-palette-yellow"
                  : color == "#EB2FA0"
                  ? "bg-palette-purple"
                  : "bg-palette-grey")
              }
            />
            <textbtn onClick={() => {scrollTo('grey');}}>{texts[language][3]}</textbtn>
          </div>
        </div>
      </nav>
    </>
  );
}
