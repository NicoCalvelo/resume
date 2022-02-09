import { useEffect, useState } from "react";
import styles from "./experience.module.scss";

const buttons = {
  English: ["Product Manager", "Back-end", "Front-end", "Game dev"],
  Spanish: ["Manager de Producto", "Back-end", "Front-end", "Desarrollo de juegos"],
  French: ["Gestionnaire de produits", "Back-end", "Front-end", "Développement de jeux"],
};

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
      <div className="h-24" />
      <div className="flex-col space-y-16 my-36">
        <div id="h3yellow" className="flex flex-row items-center space-x-4 px-4">
          <div className="h-0.25 flex-grow bg-palette-yellow" />
          <h3>Experience</h3>
        </div>
        <div className="flex items-center space-x-4 justify-between -ml-10">
          <div className="flex flex-col text-palette-yellow text-opacity-50 items-center">
            <p2 className="rounded-full bg-palette-black border-2 border-palette-yellow border-opacity-50 px-2.5 py-1">
              2022
            </p2>
            <div className="relative h-36 flex-grow w-0.5 bg-palette-yellow bg-opacity-50">
              <div className="absolute top-1 bottom-16 w-0.5 bg-palette-yellow" />
            </div>
            <p2 className="rounded-full bg-palette-black border-2 border-palette-yellow border-opacity-50 px-2.5 py-1">
              2018
            </p2>
          </div>
          <ul className="flex-col space-y-2 w-2/6" id="tabVertical" role="tablist">
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
          <div id="experienceText" className="w-4/6 leading-snug space-y-4 text-justify px-10">
            <h4>{expTexts[language][selected][0]}</h4>
            <p>{expTexts[language][selected][1]}</p>
          </div>
        </div>
      </div>
    </>
  );
}
