import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const texts = {
  English: ["About me", "Experience", "Now", "Contact"],
  Spanish: ["Sobre mi", "Experiencia", "Ahora", "Contacto"],
  French: ["Sur mon", "Expérience", "Maintenant", "Contact"],
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

  return (
    <>
      <nav
        className={
          "fixed w-full max-w-6xl shadow-lg bg-palette-black mx-auto top-0 left-0 right-0 justify-between z-40 ease-in-out duration-500 delay-300 flex p-4 " +
          (scrolling ? "transition-transform" : "-translate-y-16 transform transition-transform")
        }
      >
        <Link href="/">
          <svg width="25" height="32.53" viewBox="0 0 56 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="transition-all duration-500" d="M52.8184 69.785H35.0374L21.4353 53.9519V0.143459L52.8184 69.785Z" fill={color} opacity={.5} />
            <path className="transition-all duration-500" d="M0.736328 0H21.4353V67.4194H16.7678V58.5634H13.7239V67.4194H0.736328V0Z" fill={color}  />
            <path className="transition-all duration-500"
              d="M55.7363 71.5592H35.0374L35.0374 3.54839L39.7048 3.54839V24.8387H42.7488V3.54839L55.7363 3.54839L55.7363 71.5592Z"
              fill={color}
            />
          </svg>
        </Link>
        <div className="flex flex-row text-xs justify-evenly items-center space-x-4">
          <textbtn onClick={() => {}}>{texts[language][0]}</textbtn>
          <div className={"w-1 h-1 transition-all duration-500 rounded-full " + (color =='#2FEB98' ?'bg-palette-green' : color =='#EB784B' ?'bg-palette-orange' :color=='#FFEC40' ?'bg-palette-yellow' :'bg-palette-grey')} />
          <textbtn onClick={() => {}}>{texts[language][1]}</textbtn>
          <div className={"w-1 h-1 transition-all duration-500 rounded-full " + (color =='#2FEB98' ?'bg-palette-green' : color =='#EB784B' ?'bg-palette-orange' :color=='#FFEC40' ?'bg-palette-yellow' :'bg-palette-grey')} />
          <textbtn onClick={() => {}}>{texts[language][2]}</textbtn>
          <div className={"w-1 h-1 transition-all duration-500 rounded-full " + (color =='#2FEB98' ?'bg-palette-green' : color =='#EB784B' ?'bg-palette-orange' :color=='#FFEC40' ?'bg-palette-yellow' :'bg-palette-grey')} />
          <textbtn onClick={() => {}}>{texts[language][3]}</textbtn>
        </div>
      </nav>
      <div className="h-5" />
    </>
  );
}
