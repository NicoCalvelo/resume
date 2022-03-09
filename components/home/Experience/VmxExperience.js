import { useEffect, useState } from "react";
import styles from "./experience.module.scss";

const texts = {
  English: [
    "Voicemix is a start-up in technology.  It was born as a platform to empower valuable messages and has gradually entered the world of Blockchain and NFTs. I joined the company in early 2020 as a programmer thanks to knowing the founder. In early 2021 we managed to consolidate a team of 14 people and thus face multiple challenges. From the conception and assembly of the product, to marketing campaigns at the Latin American level and funding rounds at Draper University, California.",
  ],
  Spanish: [
    "Voicemix es una start-up en tecnología.  Nació como una plataforma para potenciar mensajes valiosos y ha entrado gradualmente en el mundo de Blockchain y NFTs. Me uní a la empresa a principios de 2020 como programador gracias a conocer al fundador. A principios de 2021 logramos consolidar un equipo de 14 personas y así enfrentar múltiples desafíos. Desde la concepción y armado del producto, hasta campañas de marketing a nivel latinoamericano y rondas de funding en la Universidad Draper, California.",
  ],
  French: [
    "Voicemix est une start-up technologique.  Il est né comme une plate-forme pour amplifier messages de valeur et est progressivement entré dans le monde de Blockchain et NFTs. J’ai rejoint l’entreprise début 2020 en tant que programmeur grâce à la connaissance du fondateur. Au début de 2021, nous avons réussi à regrouper une équipe de 14 personnes et ainsi faire face à de multiples défis. De la conception et de l’assemblage du produit, aux campagnes de marketing au niveau latino-américain et aux rondes de financement à l’Université Draper, en Californie.",
  ],
};

const buttons = {
  English: ["Product Manager", "Front-end", "Back-end"],
  Spanish: ["Manager de Producto", "Front-end", "Back-end"],
  French: ["Chef de Project", "Front-end", "Back-end"],
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
      `In August 2021 I started my job as a product manager at Voicemix inc. It was a short but otherwise intense experience, as it usually is in the life of start-ups. `,
      `My daily job was to coordinate the UX/UI and development team to address both user stories, marketing team requirements and the overall vision of the company. `,
      `We have used agile work methodologies and conducted multiple tests with different user groups. We knew that if we wanted a tool that impacted globally, we had to get a product that people loved.`,
    ],
    [
      "September 2020 - May 2021",
      `When I joined Voicemix, I faced the big challenge of making users understand the innovative tool we were building. This led me to research about UX/UI, to pay attention to the smallest details and discover a world that went beyond the beautiful presentation of some texts and buttons.`,
      `If something was confusing, we were likely to lose customers. Although I’m not very good at design, I have an eye for judgment and I quickly realize that things are not aesthetically aligned. `,
    ],
    [
      "June 2020 - August. 2021",
      `I have learned everything necessary to build a fully functional web app. Without a doubt the back-end is the area I master the most.`,
      `Starting with basic services connecting with firebase, passing through payment systems with Stripe and its webhooks, up to APIs such as twitter, slack, spreadsheets, mailing campaigns and others.`,
      `I have occasionally used Gatsby for blogs, BigQuery for analytics, and Solidity to venture into the crypto world.`,
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
      `Cuando entré en Voicemix, me enfrenté al gran desafío de hacer que los usuarios entiendan la herramienta innovadora que estábamos construyendo. Esto me llevó a investigar sobre UX/UI, a prestar atención a los detalles más pequeños y descubrir un mundo que iba más allá de presentar de forma bonita algunos textos y botones.`,
      `Si algo se prestaba a confusión, era muy probable que perdiéramos clientes. Aunque no soy muy bueno en diseño, tengo ojo para el juicio y rápidamente me doy cuenta de que las cosas no están estéticamente alineadas.`,
    ],
    [
      "Junio 2020 - Agosto 2021",
      `He aprendido todo lo necesario para construir una app web completamente funcional. Sin duda el back-end es el area que mas domino.`,
      `Comenzando por los servicios básicos conectando con firebase, pasando por sistemas de pagos con Stripe y sus webhooks, hasta APIs como twitter, slack, hojas de calculo, campañas de mailing y otros.`,
      `Ocasionalmente he usado Gatsby para blogs, BigQuery para analiticos y Solidity para incursionar en el mundo crypto.`,
    ],
  ],
  French: [
    [
      "Août 2021 - Décembre 2021",
      `En août 2021, j’ai commencé à travailler comme responsable produit chez Voicemix inc. Ce fut une expérience courte mais intense, comme c’est souvent le cas dans la vie des start-ups. `,
      `Mon travail quotidien consistait à coordonner l’équipe UX/UI et de développement pour faire face à la fois aux user stories, aux exigences de l’équipe marketing et à la vision globale de l’entreprise. `,
      `Nous avons utilisé des méthodes de travail agiles et effectué plusieurs tests avec différents groupes d’utilisateurs. Nous savions que si nous voulions un outil qui ait un impact mondial, nous devions obtenir un produit que les gens aiment.`,
    ],
    [
      "Septembre 2020 - Mai 2021",
      `Lorsque je suis entré dans Voicemix, j’ai dû relever le défi de faire comprendre aux utilisateurs l’outil innovant que nous construisions. Cela m’a conduit à faire des recherches sur UX/UI, à prêter attention aux plus petits détails et à découvrir un monde qui allait au-delà de la présentation de quelques textes et boutons. `,
      `Si quelque chose prêtait à confusion, il était très probable que nous perdions des clients. Bien que je ne sois pas très bon en design, j’ai l’œil pour le jugement et je me rends vite compte que les choses ne sont pas alignées esthétiquement. `,
    ],
    [
      "Juin 2020 - Août 2021",
      `J’ai appris tout ce qu’il faut pour construire une application web entièrement fonctionnelle. Le back-end est sans aucun doute la zone que je maîtrise le plus.`,
      `En commençant par les services de base en se connectant avec firebase, en passant par les systèmes de paiement avec Stripe et ses Webhooks, jusqu’aux API comme twitter, slack, feuilles de calcul, campagnes de mailing et autres.`,
      `’ai parfois utilisé Gatsby pour les blogs, BigQuery pour les analyses et Solidity pour plonger dans le monde Crypto.`,
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
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </a>
      <p className="text-sm md:text-sm font-light tracking-wide">{texts[language][0]}</p>
      <div className="flex flex-col md:flex-row items-center md:space-x-2 space-y-5 md:space-y-0 md:h-80 ">
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
