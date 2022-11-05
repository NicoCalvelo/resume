import Image from "next/image";
import { useEffect } from "react";
import styles from "./about.module.scss";

export default function AboutMe() {
  useEffect(() => {
    // title animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.reveal);
        }
      });
    });
    observer.observe(document.getElementById("title_1"));
  }, []);

  return (
    <div className="flex flex-col max-w-6xl mx-auto py-32">
      <h3 id="orange" className="uppercase text-palette-orange font-bold text-lg">
        I'm specializing in
      </h3>
      <div id="title_1" className="flex flex-row items-center space-x-4">
        <h1 className="text-palette-black text-7xl">WEB PAGES</h1>
        <div className="h-0.25 flex-grow bg-palette-orange" />
      </div>
    </div>
  );
}
