import { useState } from "react";

const skillsButtons = {
  English: ["Product Manager", "Back-end", "Front-end", "Game dev"],
  Spanish: ["Manager de Producto", "Back-end", "Front-end", "Desarrollo de juegos"],
  French: ["Gestionnaire de produits", "Back-end", "Front-end", "Développement de jeux"],
};

const skillsTexts = {
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

//Skills section
export default function Skills({ language }) {
  const [selected, setSelected] = useState(0);

  return (
    <>
      <div className="h-20" />
      <div className="flex items-start space-x-4 justify-center">
        <ul className="flex flex-col text-center space-y-2 flex-wrap mr-4" id="tabVertical" role="tablist">
          {[0, 1, 2, 3].map((e) => {
            return (
              <li id={e.toString()} className="flex-grow" role="presentation">
                <button
                  className={selected === e ? "btn-orange-selected" : "btn-orange-deselected"}
                  onClick={() => setSelected(e)}
                >
                  {skillsButtons[language][e]}
                </button>
              </li>
            );
          })}
        </ul>
        <div className="leading-snug space-y-4 max-w-xl py-3 mx-10">
          <h4>{skillsTexts[language][selected][0]}</h4>
          <p>{skillsTexts[language][selected][1]}</p>
        </div>
      </div>
    </>
  );
}
