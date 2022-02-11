import { useEffect, useState } from "react";
import styles from "./experience.module.scss";

const buttons = {
  English: ["Product Manager", "Front-end", "Back-end", "Game dev"],
  Spanish: ["Manager de Producto", "Front-end", "Back-end", "Desarrollo de juegos"],
  French: ["Gestionnaire de produits", "Front-end", "Back-end", "Développement de jeux"],
};
const frameworks = ["Javascript", "React", "Next.js", "Flutter", "Unity3D", "C#", "CSS", "Tailwind"];

const expTexts = {
  English: [
    [
      "I’m developing as a product manager.",
      "An app for a local gym. A mobile game based in my hometown. A web app to change how we communicate and An app for a local gym. A mobile game based in my hometown. A web app to change how we communicate and some An app for a local gym. A mobile game based in my hometown. A web app to change how we communicate and some",
    ],
    [
      "I’m developing as a product manager.",
      "An app for a local gym. A mobile game based in my hometown. A web app to change how we communicate and An app for a local gym. A mobile game based in my hometown. A web app to change how we communicate and some An app for a local gym. A mobile game based in my hometown. A web app to change how we communicate and some",
    ],
    [
      "I’m developing as a product manager.",
      "An app for a local gym. A mobile game based in my hometown. A web app to change how we communicate and An app for a local gym. A mobile game based in my hometown. A web app to change how we communicate and some An app for a local gym. A mobile game based in my hometown. A web app to change how we communicate and some",
    ],
    [
      "I’m developing as a product manager.",
      "An app for a local gym. A mobile game based in my hometown. A web app to change how we communicate and An app for a local gym. A mobile game based in my hometown. A web app to change how we communicate and some An app for a local gym. A mobile game based in my hometown. A web app to change how we communicate and some",
    ],
  ],
  Spanish: [
    [
      "I’m developing as a product manager.",
      "An app for a local gym. A mobile game based in my hometown. A web app to change how we communicate and An app for a local gym. A mobile game based in my hometown. A web app to change how we communicate and some An app for a local gym. A mobile game based in my hometown. A web app to change how we communicate and some",
    ],
    [
      "I’m developing as a product manager.",
      "An app for a local gym. A mobile game based in my hometown. A web app to change how we communicate and An app for a local gym. A mobile game based in my hometown. A web app to change how we communicate and some An app for a local gym. A mobile game based in my hometown. A web app to change how we communicate and some",
    ],
    [
      "I’m developing as a product manager.",
      "An app for a local gym. A mobile game based in my hometown. A web app to change how we communicate and An app for a local gym. A mobile game based in my hometown. A web app to change how we communicate and some An app for a local gym. A mobile game based in my hometown. A web app to change how we communicate and some",
    ],
    [
      "I’m developing as a product manager.",
      "An app for a local gym. A mobile game based in my hometown. A web app to change how we communicate and An app for a local gym. A mobile game based in my hometown. A web app to change how we communicate and some An app for a local gym. A mobile game based in my hometown. A web app to change how we communicate and some",
    ],
  ],
  French: [
    [
      "I’m developing as a product manager.",
      "An app for a local gym. A mobile game based in my hometown. A web app to change how we communicate and An app for a local gym. A mobile game based in my hometown. A web app to change how we communicate and some An app for a local gym. A mobile game based in my hometown. A web app to change how we communicate and some",
    ],
    [
      "I’m developing as a product manager.",
      "An app for a local gym. A mobile game based in my hometown. A web app to change how we communicate and An app for a local gym. A mobile game based in my hometown. A web app to change how we communicate and some An app for a local gym. A mobile game based in my hometown. A web app to change how we communicate and some",
    ],
    [
      "I’m developing as a product manager.",
      "An app for a local gym. A mobile game based in my hometown. A web app to change how we communicate and An app for a local gym. A mobile game based in my hometown. A web app to change how we communicate and some An app for a local gym. A mobile game based in my hometown. A web app to change how we communicate and some",
    ],
    [
      "I’m developing as a product manager.",
      "An app for a local gym. A mobile game based in my hometown. A web app to change how we communicate and An app for a local gym. A mobile game based in my hometown. A web app to change how we communicate and some An app for a local gym. A mobile game based in my hometown. A web app to change how we communicate and some",
    ],
  ],
};

export default function Experience({ language }) {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      // Loop over the entries
      entries.forEach((entry) => {
        // If the element is visible
        if (entry.isIntersecting) {
          // Add the animation class
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
      <div className="h-20" />
      <div id='yellow' className="flex-col space-y-10">
        <div id="h3yellow" className="flex flex-row items-center space-x-4 px-4">
          <div className="h-0.25 flex-grow bg-palette-yellow" />
          <h3>Experience</h3>
        </div>
        <div className="flex items-center space-x-2 justify-between h-72 my-20">
          <div className="flex flex-col text-palette-yellow text-opacity-50 items-center h-full">
            <p2 className="rounded-full bg-palette-black border-2 border-palette-yellow border-opacity-50 px-2.5 py-1">
              2022
            </p2>
            <div className="relative h-full flex-grow w-0.5 bg-palette-yellow bg-opacity-50">
              <div
                className={
                  "absolute w-0.5 transition-all duration-700 bg-palette-yellow " +
                  (selected == 0
                    ? "top-5 bottom-36"
                    : selected == 1
                    ? "top-10 bottom-32"
                    : selected == 2
                    ? "top-6 bottom-20"
                    : "top-28 bottom-2")
                }
              />
            </div>
            <p2 className="rounded-full bg-palette-black border-2 border-palette-yellow border-opacity-50 px-2.5 py-1">
              2018
            </p2>
          </div>
          <ul className="flex flex-col h-full py-10 w-1/6 -ml-4 justify-evenly" id="tabVertical" role="tablist">
            {[0, 1, 2, 3].map((e) => {
              return (
                <li id={e.toString()} className="flex-grow" role="presentation">
                  <button
                    className={selected === e ? "btn-yellow-selected" : "btn-yellow-deselected"}
                    onClick={() => {
                      if (selected != e) setSelected(e);
                    }}
                  >
                    {buttons[language][e]}
                  </button>
                </li>
              );
            })}
          </ul>
          <div id="experienceText" className="w-5/6 leading-snug space-y-5 text-justify px-16">
            <h4>{expTexts[language][selected][0]}</h4>
            <p>{expTexts[language][selected][1]}</p>
            <ul className="grid leading-snug text-sm font-bold tracking-wider gap-2 grid-cols-3">
                {frameworks.map((e) => {
                  return (
                    <li id={frameworks.indexOf(e).toString()} className="flex flex-row items-center space-x-2">
                      <svg width="7" height="9" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.375 11.5L0.624999 22.3253L0.625 0.674682L19.375 11.5Z" fill="#EB784B" />
                      </svg>
                      <div>{e}</div>
                    </li>
                  );
                })}
              </ul>
          </div>
        </div>
      </div>
    </>
  );
}
