import { useEffect, useState } from "react";
import styles from "./experience.module.scss";

const texts = {
  English: ["Experience"],
  Spanish: ["Experiencia"],
  French: ["Expérience"],
};

const buttons = {
  English: ["Product Manager", "Front-end", "Back-end", "App development"],
  Spanish: ["Manager de Producto", "Front-end", "Back-end", "Desarrollo de app"],
  French: ["Gestionnaire de produits", "Front-end", "Back-end", "App Développement"],
};
const frameworks = [
  ["Reports", "Testing", "Agile", "User stories"],
  ["Flutter", "HTML", "CSS", "Tailwind", "Figma"],
  ["Javascript", "PHP", "React", "Next.js", "Wamp", "Firebase", "APIs", "Machine learning", "Payments"],
  ["Uniy3D", "C#", "GIMP", "Windows", "Android"],
];

const expTexts = {
  English: [
    [
      "August 2021 - December 2021",
      `In August 2021 I started my job as a product manager at Voicemix inc. It was a short but otherwise intense experience, as it usually is in the life of start-ups. `,
      `My daily job was to coordinate the UX/UI and development team to address both user stories, marketing team requirements and the overall vision of the company. `,
      `We have used agile work methodologies and conducted multiple tests with different user groups. We knew that if we wanted a tool that impacted globally, we had to get a product that people loved.`,
    ],
    [
      "September 2020 - May 2021",
      `I started developing because of the need to show the world what I was doing. I saw it as the part that had to be done.`,
      `When I joined Voicemix, I faced the big challenge of making users understand the innovative tool we were building. This led me to research about UX/UI, to pay attention to the smallest details and discover a world that went beyond the beautiful presentation of some texts and buttons.`,
      `If something was confusing, we were likely to lose customers. Although I’m not very good at design, I have an eye for judgment and I quickly realize that things are not aesthetically aligned. `,
    ],
    [
      "June 2020 - August. 2021",
      `I have learned everything necessary to build a fully functional web app. Undoubtedly the back-end is what I master most. `,
      `Starting with basic services connecting to firebase, passing through payment systems with Stripe and its webhooks, up to APIs such as twitter, slack, spreadsheets, mailing services and others. `,
      `I have occasionally used Gatsby for blogs, Machine learning for a trading bot and Solidity to venture into the crypto world. `,
    ],
    [
      "Febraury 2019 - December 2020",
      `My introduction to the world of programming was in 2018 through games. In September 2020 I launched on Google Play a platform game based in my hometown. From idea, design to mechanics and animations. `,
      `Without a doubt, game development is the most fun. Mistakes that on the web can be a headache, in games can lead to laughter and mysteries. `,
      `When I want to, as a hobby, I go back to work on some simple and short project to learn and have fun.`,
    ],
  ],
  Spanish: [
    [
      "Agosto 2021 - Diciembre 2021",
      `En agosto del 2021 comenzó mi trabajo como manager de producto en Voicemix inc. Fue una experiencia corta pero por demás de intensa, como suele ser en la vida de las start-ups.`,
      `Mi trabajo diario consistía en coordinar al equipo de UX/UI y de desarrollo para afrontar tanto las historias de usuarios, los requisitos del equipo de marketing y la vision general de la compañía.`,
      `Hemos utilizado metodologías de trabajo agiles y realizado multiples testeos con diferentes grupos de usuarios. Sabíamos que si queríamos una herramienta que impacte a nivel mundial debíamos conseguir un producto que la gente ame.`,
    ],
    [
      "Septiembre 2020 - Mayo 2021",
      `Empecé a desarrollar por la necesidad de mostrar al mundo lo que estaba haciendo. Lo veía como la parte que tenía que hacerse.`,
      `Cuando entré en Voicemix, me enfrenté al gran desafío de hacer que los usuarios entiendan la herramienta innovadora que estábamos construyendo. Esto me llevó a investigar sobre UX/UI, a prestar atención a los detalles más pequeños y descubrir un mundo que iba más allá de presentar de forma bonita algunos textos y botones.`,
      `Si algo se prestaba a confusión, era muy probable que perdiéramos clientes. Aunque no soy muy bueno en diseño, tengo ojo para el juicio y rápidamente me doy cuenta de que las cosas no están estéticamente alineadas.`,
    ],
    [
      "Junio 2020 - Agosto 2021",
      `He aprendido todo lo necesario para construir una app web completamente funcional. Sin duda el back-end es de lo que mas domino.`,
      `Comenzando por los servicios básicos conectando con firebase, pasando por sistemas de pagos con Stripe y sus webhooks, hasta APIs como twitter, slack, hojas de calculo, servicios de mailing y otros.`,
      `Ocasionalmente he usado Gatsby para blogs, Machine learning para un bot de trading y Solidity para incursionar en el mundo crypto.`,
    ],
    [
      "Febrero 2019 - Diciembre 2019",
      `Mi introducción al mundo de la programación fue en 2018 a través de los juegos. En septiembre del 2020 llegué a lanzar en Google Play un juego de plataformas basado en mi ciudad natal. Desde la idea, el diseño hasta la mecánica y las animaciones.`,
      `Sin duda, el desarrollo de juegos es lo más divertido. Los errores que en la web pueden ser un dolor de cabeza, en los juegos pueden dar lugar a risas y misterios.`,
      `Cuando me dan ganas, como hobby, vuelvo a trabajar en algún proyecto sencillo y corto para aprender y divertirme.`,
    ],
  ],
  French: [
    [
      "Août 2021 - Décembre 2021",
      `En août 2021, j’ai commencé à travailler comme responsable produit chez Voicemix inc. Ce fut une expérience courte mais intense, comme c’est souvent le cas dans la vie des start-ups. `,
      `Mon travail quotidien consistait à coordonner l’équipe UX/UI et de développement pour faire face à la fois aux histoires d’utilisateurs, aux exigences de l’équipe marketing et à la vision globale de l’entreprise. `,
      `Nous avons utilisé des méthodes de travail agiles et effectué plusieurs tests avec différents groupes d’utilisateurs. Nous savions que si nous voulions un outil qui ait un impact mondial, nous devions obtenir un produit que les gens aiment.`,
    ],
    [
      "Septembre 2020 - Mai 2021",
      `J’ai commencé à développer pour montrer au monde ce que je faisais. `,
      `Lorsque je suis entré dans Voicemix, j’ai dû relever le défi de faire comprendre aux utilisateurs l’outil innovant que nous construisions. Cela m’a conduit à faire des recherches sur UX/UI, à prêter attention aux plus petits détails et à découvrir un monde qui allait au-delà de la présentation de quelques textes et boutons. `,
      `Si quelque chose prêtait à confusion, il était très probable que nous perdions des clients. Bien que je ne sois pas très bon en design, j’ai l’œil pour le jugement et je me rends vite compte que les choses ne sont pas alignées esthétiquement. `,
    ],
    [
      "Juin 2020 - Août 2021",
      `J’ai appris tout ce qu’il fallait pour construire une application web entièrement fonctionnelle. Le back-end est sans aucun doute ce que je maîtrise le plus. `,
      `En commençant par les services de base en se connectant avec firebase, en passant par les systèmes de paiement avec Stripe et ses Webhooks, jusqu’aux API comme twitter, slack, feuilles de calcul, services de mailing et autres. `,
      `J’ai parfois utilisé Gatsby pour les blogs, Machine learning pour un bot de trading et Solidity pour plonger dans le monde Crypto. `,
    ],
    [
      "Février 2019 - Décembre 2019",
      `Mon introduction au monde de la programmation a été en 2018 à travers les jeux. En septembre 2020, j’ai lancé sur Google Play un jeu de plateforme basé dans ma ville natale. De l’idée, du design à la mécanique et aux animations. `,
      `Sans aucun doute, le développement de jeux est le plus amusant. Les erreurs sur le web peuvent être un casse-tête, dans les jeux peuvent conduire à des rires et des mystères. `,
      `Quand j’en ai envie, comme hobby, je reviens travailler sur un projet simple et court pour apprendre et m’amuser. `,
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
      <div className="h-14 md:h-28 w-full"></div>
      <div id="yellow" className="flex-col space-y-10 md:px-4">
        <div id="h3yellow" className="flex flex-row items-center space-x-1 md:space-x-4">
          <div className="h-0.25 flex-grow bg-palette-yellow" />
          <h3>{texts[language][0]}</h3>
        </div>
        <div className="relative shadow-xl flex flex-col pl-4 md:pl-8 pr-8 md:pr-14 pb-10 md:pb-16 pt-8 md:pt-10 border-dashed border-2 border-opacity-50 rounded-lg border-palette-yellow">
          <a
            href="https://www.voicemix.io/"
            target="_blank"
            rel="noreferrer"
            className="absolute flex items-center py-0.5 -top-4 bg-palette-yellow rounded-full px-4 text-palette-black left-4 font-bold text-xl tracking-wider hover:underline"
          >
            Voicemix.inc{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
          <p className="text-sm md:text-base font-light tracking-wide">
            En août 2021, j’ai commencé à travailler comme responsable produit chez Voicemix inc. Ce fut une expérience
            courte mais intense, comme c’est souvent le cas dans la vie des start-ups.
          </p>
          <div className="flex flex-col md:flex-row items-center md:space-x-2 space-y-5 md:space-y-0 md:h-80 pt-5">
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
                  <li key={e.toString} className="flex-grow" role="presentation">
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
            <div id="experienceText" className="md:w-5/6 leading-snug px-2 space-y-1.5">
              <p className="font-light text-xs pt-5 pb-1">{expTexts[language][selected][0]}</p>
              {expTexts[language][selected].map((e) => {
                return expTexts[language][selected].indexOf(e) == 0 ? <></> : <p className="text-justify">{e}</p>;
              })}
              <ul className="grid leading-snug pt-6 text-xs md:text-sm font-semibold md:font-bold md:tracking-wider gap-2 grid-cols-3">
                {frameworks[selected].map((e) => {
                  return (
                    <li key={frameworks.indexOf(e).toString()} className="flex flex-row items-center space-x-2">
                      <svg
                        className="flex-shrink-0"
                        width="7"
                        height="9"
                        viewBox="0 0 20 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.375 11.5L0.624999 22.3253L0.625 0.674682L19.375 11.5Z"
                          opacity="70%"
                          fill="#FFEC40"
                        />
                      </svg>
                      <div>{e}</div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="h-8" />
        <div className="relative shadow-xl flex flex-col pl-8 pr-14 pb-16 pt-10 border-dashed border-2 border-opacity-50 rounded-lg border-palette-yellow">
          <p className="absolute py-0.5 -top-4 bg-palette-yellow rounded-full px-4 text-palette-black left-4 font-bold text-xl tracking-wider">
            CEFiDe
          </p>
          <p className="text-sm md:text-base font-light tracking-wide">
            À l’âge de 17 ans, je suis entré dans le monde des apps en développant une pour une salle de gym locale.
            J'ai commencé à acquérir des connaissances sur les bases de données et les expériences des utilisateurs.
          </p>
          <div className="flex flex-col md:flex-row items-center md:space-x-2 space-y-5 md:space-y-0 md:h-64 pt-5">
            <div className="flex flex-row-reverse md:flex-col text-palette-yellow text-opacity-50 items-center w-full md:w-min h-full">
              <p2 className="rounded-full bg-palette-black border-2 border-palette-yellow border-opacity-50 px-2.5 py-1">
                2020
              </p2>
              <div className="relative h-0.5 w-full md:w-0.5 md:h-full flex-grow bg-palette-yellow bg-opacity-50">
                <div className="absolute h-0.5 md:h-auto md:w-0.5 transition-all duration-700 bg-palette-yellow right-2 left-3 md:right-0 md:left-0 md:top-2 md:bottom-4" />
              </div>
              <p2 className="rounded-full bg-palette-black border-2 border-palette-yellow border-opacity-50 px-2.5 py-1">
                2019
              </p2>
            </div>
            <div className="text-palette-yellow text-left uppercase text-xs md:text-sm font-semibold md:py-3 px-2">
              {buttons[language][3]}
            </div>
            <div id="experienceText" className="md:w-5/6 leading-snug px-2 space-y-1.5">
              <p className="font-light text-xs pt-5 pb-1">{expTexts[language][3][0]}</p>
              {expTexts[language][3].map((e) => {
                return expTexts[language][3].indexOf(e) == 0 ? <></> : <p className="text-justify">{e}</p>;
              })}
              <ul className="grid leading-snug pt-6 text-xs md:text-sm font-semibold md:font-bold md:tracking-wider gap-2 grid-cols-3">
                {frameworks[3].map((e) => {
                  return (
                    <li key={frameworks.indexOf(e).toString()} className="flex flex-row items-center space-x-2">
                      <svg
                        className="flex-shrink-0"
                        width="7"
                        height="9"
                        viewBox="0 0 20 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.375 11.5L0.624999 22.3253L0.625 0.674682L19.375 11.5Z"
                          opacity="70%"
                          fill="#FFEC40"
                        />
                      </svg>
                      <div>{e}</div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
