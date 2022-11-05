import { useEffect, useState } from "react";
import CefideExperience from "./CefideExperience";
import styles from "./experience.module.scss";
import VmxExperience from "./VmxExperience";

const texts = {
  English: ["Experience"],
  Spanish: ["Experiencia"],
  French: ["Expérience"],
};

export default function Experience({ language ="English" }) {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      // Loop over the entries
      entries.forEach((entry) => {
        // If the element is visible -> Add the animation class
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.reveal);
        }
      });
    });
    observer.observe(document.getElementById("h3yellow"));
  }, []);

  useEffect(() => {
    let element = document.getElementById("experienceText");
    element.classList.remove(styles.textBlink);
    void element.offsetWidth;
    element.classList.add(styles.textBlink);
  }, [selected]);

  return (
    <>
      <div className="h-14 md:h-28 w-screen h-screen"></div>
      <div id="yellow" className="flex-col space-y-10 md:px-4">
        <div id="h3yellow" className="flex flex-row items-center space-x-1 md:space-x-4">
          <div className="h-0.25 flex-grow bg-palette-yellow" />
          <h3>{texts[language][0]}</h3>
        </div>
        <VmxExperience language={language} />
        <div className="h-2 md:h-8" />
        <CefideExperience language={language} />
      </div>
    </>
  );
}
