import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const texts = {
  English: ["About me", "Experience", "Now", "Contact"],
  Spanish: ["Sobre mi", "Experiencia", "Ahora", "Contacto"],
  French: ["Sur mon", "Expérience", "Maintenant", "Contact"],
};

export default function NavBar({ language }) {
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
          <Image className="cursor-pointer" src="/images/logo.svg" width={32} height={32} alt="logo" />
        </Link>
        <div className="flex flex-row text-xs justify-evenly items-center space-x-4">
          <textbtn onClick={() => {}}>{texts[language][0]}</textbtn>
          <div className="w-1 h-1 rounded-full bg-palette-green" />
          <textbtn onClick={() => {}}>{texts[language][1]}</textbtn>
          <div className="w-1 h-1 rounded-full bg-palette-green" />
          <textbtn onClick={() => {}}>{texts[language][2]}</textbtn>
          <div className="w-1 h-1 rounded-full bg-palette-green" />
          <textbtn onClick={() => {}}>{texts[language][3]}</textbtn>
        </div>
      </nav>
      <div className="h-5"/>
      </>
  );
}
