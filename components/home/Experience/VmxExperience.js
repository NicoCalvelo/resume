import { useEffect, useState } from "react";
import styles from "./experience.module.scss";

const texts = {
  English: [
    "The VoiceMix Start-up was born as a tool to amplify and share the messages of value in our society, in order to inform and sensitize users on different topics.",
  ],
  Spanish: [
    "La Startup VoiceMix nace como una herramienta para amplificar y compartir mensajes de valor en nuestra sociedad, con el fin de informar y concienciar a los usuarios sobre diferentes temas.",
  ],
  French: [
    "La Start-up VoiceMix est née comme un outil permettant d'amplifier et partager les messages de valeur dans notre société, afin d' informer et conscientiser les utilisateurs sur différents sujets.",
  ],
};

const buttons = {
  English: ["Product Manager", "Front-end", "Back-end"],
  Spanish: ["Manager de Producto", "Front-end", "Back-end"],
  French: ["Responsable de Projet ", "Front-end", "Back-end"],
};
const frameworks = [
  ["Protuct Strategy", "Testing", "Agile", "User Stories", "Mail Campaigns"],
  ["Flutter", "HTML", "CSS", "Tailwind", "Figma", "UX/UI Basics"],
  ["Javascript", "React", "Next.js", "PHP Basics", "Firebase", "Database", "Analytics", "Auth", "Payments - Stripe"],
];

const expTexts = {
  English: [
    [
      "August 2021 - December 2021",
      `Working as a product manager has been an intense and rewarding experience.`,
      `My daily job was to coordinate a team of four people, to carry out the product development on UX/UI, back and front. All in direct contact with the marketing team and management.`,
    ],
    [
      "September 2020 - May 2021",
      `When I joined Voicemix, I faced the big challenge of making users understand the innovative tool we were building. This led me to research about UX/UI, to pay attention to the smallest details and discover a world that went beyond the beautiful presentation of some texts and buttons.`,
      `If something was confusing, we were likely to lose customers.`,
    ],
    [
      "June 2020 - August. 2021",
      `I have learned everything necessary to build a fully functional web app. Without a doubt the back-end is the area I master the most.`,
    ],
  ],
  Spanish: [
    [
      "Agosto 2021 - Diciembre 2021",
      `Trabajar como gerente de producto ha sido una experiencia intensa y gratificante.`,
      `Mi trabajo diario consistía en coordinar un equipo de cuatro personas para llevar a cabo el desarrollo del producto en UX/UI, back y front. Todo ello en relación directa con el equipo de marketing y la dirección.`,
    ],
    [
      "Septiembre 2020 - Mayo 2021",
      `Cuando entré en Voicemix, me enfrenté al gran desafío de hacer que los usuarios entiendan la herramienta innovadora que estábamos construyendo. Esto me llevó a investigar sobre UX/UI, a prestar atención a los detalles más pequeños y descubrir un mundo que iba más allá de presentar de forma bonita algunos textos y botones.`,
      `Si algo se prestaba a confusión, era muy probable que perdiéramos clientes.`,
    ],
    [
      "Junio 2020 - Agosto 2021",
      `He aprendido todo lo necesario para construir una app web completamente funcional. Sin duda el back-end es el area que mas domino.`,
    ],
  ],
  French: [
    [
      "Août 2021 - Décembre 2021",
      `Travailler comme chef de produit a été une expérience intense et enrichissante.`,
      `Mon travail quotidien consistait à coordonner un équipe de quatre personnes, pour mener à bien le développement du produit sur UX/UI, back et front. Le tout, en relation directe avec l’équipe marketing et la direction.`,
    ],
    [
      "Septembre 2020 - Mai 2021",
      `De mon entrée à VoiceMix, j’ai travaillé pour montrer l’outil innovant que nous étions en train de développer aux futurs utilisateurs. Cela m’a conduit à faire des recherches sur le UX/UI, à prêter attention aux plus petits détails et à découvrir un monde qui allait au-delà de la présentation de quelques textes et boutons.`,
      `Si quelque chose prêtait à confusion, il était très probable que nous perdions des clients.`,
    ],
    [
      "Juin 2020 - Août 2021",
      `Grâce au travail effectué sur VoiceMix, j'ai pu développer les compétences nécessaires pour construire une application web entièrement fonctionnelle. Le back-end est sans aucun doute le domaine d'activité que je maîtrise le mieux à ce jour.`,
    ],
  ],
};

export default function VmxExperience({ language }) {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    let element = document.getElementById("experienceText");
    element.classList.remove(styles.textBlink);
    void element.offsetWidth;
    element.classList.add(styles.textBlink);
  }, [selected]);

  return (
    <div className="relative shadow-xl flex flex-col pl-5 md:pl-8 pr-10 md:pr-14 pb-10 md:pb-16 pt-8 border-dashed border-2 border-opacity-50 rounded-lg border-palette-yellow">
      <div className="absolute flex left-4 -top-4 items-center  bg-palette-yellow py-0.5   rounded-full px-4   ">
        <p className="text-xl tracking-wider font-bold text-palette-black">Voicemix.inc</p>
        <div className="group flex flex-col">
          <svg className="h-5 w-5 text-palette-black ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            />
          </svg>
          <p className="hidden group-hover:flex group-hover:flex absolute z-10 bg-palette-black border border-palette-yellow rounded mx-6 p-6 top-10 left-0 w-64 text-xs font-light">
            {texts[language][0]}
          </p>
        </div>
      </div>

      <div className="flex flex-col pt-4 md:flex-row items-center md:space-x-2 space-y-5 md:space-y-0 md:h-80 ">
        <div className="flex flex-row-reverse md:flex-col text-palette-yellow text-opacity-50 items-center w-full md:w-min h-full">
          <p2 className="rounded-full bg-palette-black border-2 border-palette-yellow border-opacity-50 px-2.5 py-1">
            2022
          </p2>
          <div className="relative h-0.5 w-full md:w-0.5 md:h-full flex-grow bg-palette-yellow bg-opacity-50">
            <div
              className={
                "absolute h-0.5 md:h-auto md:w-0.5 transition-all duration-700 bg-palette-yellow " +
                (selected == 0
                  ? "right-1 left-36 md:right-0 md:left-0 md:top-1.5 md:bottom-48"
                  : selected == 1
                  ? "right-14 left-16 md:right-0 md:left-0 md:top-16 md:bottom-16"
                  : "right-10 left-12 md:right-0 md:left-0 md:top-12 md:bottom-12")
              }
            />
          </div>
          <p2 className="rounded-full bg-palette-black border-2 border-palette-yellow border-opacity-50 px-2.5 py-1">
            2020
          </p2>
        </div>
        <ul
          className="grid grid-cols-2 md:flex md:flex-col md:h-full md:py-10 md:w-1/6 md:-ml-4 justify-evenly"
          id="tabVertical"
          role="tablist"
        >
          {[0, 1, 2].map((e) => {
            return (
              <li key={buttons[language][e]} className="flex-grow" role="presentation">
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
        <div id="experienceText" className="md:w-5/6 leading-snug md:px-2 space-y-1.5">
          <p className="font-light text-xs pt-5 pb-1">{expTexts[language][selected][0]}</p>
          {expTexts[language][selected].map((e) => {
            if (expTexts[language][selected].indexOf(e) != 0) {
              return (
                <p key={e} className="text-justify">
                  {e}
                </p>
              );
            }
          })}
          <ul className="grid leading-snug pt-6 text-xs md:text-sm font-semibold md:font-bold md:tracking-wider gap-2 grid-cols-3">
            {frameworks[selected].map((e) => {
              return (
                <li key={e} className="flex flex-row items-center space-x-2">
                  <svg width="7" height="9" viewBox="0 0 20 23">
                    <path d="M19.375 11.5L0.624999 22.3253L0.625 0.674682L19.375 11.5Z" opacity="70%" fill="#FFEC40" />
                  </svg>
                  <div>{e}</div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
