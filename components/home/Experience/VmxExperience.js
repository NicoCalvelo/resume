import { useEffect, useState } from "react";
import styles from "./experience.module.scss";

const texts = {
  English: [
    "The VoiceMix Start-up was born as a tool to amplify and share the messages of value in our society, in order to inform and sensitize users on different topics.",
    "In 2020 I joined the company as a full-stack developper. We reached a staff of 14 in 2021, allowing us to cope with a multitude of tasks. From product design and assembly, through Latin American marketing campaigns, to rounds of funding at Draper University in California.",
    "The Company is gradually evolving, and in the news it is focused on Blockchain and NFT’s projects.",
  ],
  Spanish: [
    "La Startup VoiceMix nace como una herramienta para amplificar y compartir mensajes de valor en nuestra sociedad, con el fin de informar y concienciar a los usuarios sobre diferentes temas.",
    "En 2020 me uní a la empresa como programador full-stack. Alcanzamos una plantilla de 14 personas en 2021, lo que nos permitió hacer frente a una multitud de tareas. Desde el diseño y montaje del producto, pasando por campañas de marketing a nivel latinoamericano, hasta las rondas de financiación en la Universidad Draper de California.",
    "La start-up evoluciona progresivamente, y en la actualidad se centra en proyectos en Blockchain y NFT’s.",
  ],
  French: [
    "La Start-up VoiceMix est née comme un outil permettant d'amplifier et partager les messages de valeur dans notre société, afin d' informer et conscientiser les utilisateurs sur différents sujets.",
    "En 2020 j’ai rejoint l’entreprise en tant que programmateur full-stack. Nous avons atteint un effectif de 14 personnes en 2021, nous permettant de faire face à une multitude de tâches. De la conception et de l’assemblage du produit, en pasant par des campagnes de marketing sur le plan Latino-Américain, jusqu’aux rondes de financement à l’Université Draper en Californie.",
    "La Société évolue progressivement, et dans l'actualité elle est centrée sur des projets en Blockchain et NFT’s.",
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
      `My daily job was to coordinate a team of four people, to carry out the product development on the UX/UI, back and front end aspects. All in direct contact with the marketing team and management.`,
      `We have implemented agile and responsive working methods, allowing us to regularly test the progress of our activity with different user groups. To create a real impact, we had to correlate technical possibilities with user expectations.`,
    ],
    [
      "September 2020 - May 2021",
      `When I joined Voicemix, I faced the big challenge of making users understand the innovative tool we were building. This led me to research about UX/UI, to pay attention to the smallest details and discover a world that went beyond the beautiful presentation of some texts and buttons.`,
      `If something was confusing, we were likely to lose customers. Although I’m not very good at design, I have an eye for judgment and I quickly realize that things are not aesthetically aligned. `,
    ],
    [
      "June 2020 - August. 2021",
      `I have learned everything necessary to build a fully functional web app. Without a doubt the back-end is the area I master the most.`,
      `During this period I worked with tools like firebase, payment systems with Stripe and API’s on Twitter or Slack. In the same way, I was able to use Gatsby for the creation of blogs, BigQuery for the extraction of data and Solidity to dive into the Crypto world.`,
    ],
  ],
  Spanish: [
    [
      "Agosto 2021 - Diciembre 2021",
      `Trabajar como gerente de producto ha sido una experiencia intensa y gratificante.`,
      `Mi trabajo diario consistía en coordinar un equipo de cuatro personas para llevar a cabo el desarrollo del producto en los aspectos UX/UI, back y front end. Todo ello en relación directa con el equipo de marketing y la dirección.`,
      `Hemos implementado métodos de trabajo ágiles y responsivos, lo que nos permite comprobar periódicamente los avances de nuestro negocio con diferentes grupos de usuarios. Para crear un impacto real, tuvimos que correlacionar las posibilidades técnicas con las expectativas de los usuarios.`,
    ],
    [
      "Septiembre 2020 - Mayo 2021",
      `Cuando entré en Voicemix, me enfrenté al gran desafío de hacer que los usuarios entiendan la herramienta innovadora que estábamos construyendo. Esto me llevó a investigar sobre UX/UI, a prestar atención a los detalles más pequeños y descubrir un mundo que iba más allá de presentar de forma bonita algunos textos y botones.`,
      `Si algo se prestaba a confusión, era muy probable que perdiéramos clientes. Aunque no soy muy bueno en diseño, tengo ojo para el juicio y rápidamente me doy cuenta de que las cosas no están estéticamente alineadas.`,
    ],
    [
      "Junio 2020 - Agosto 2021",
      `He aprendido todo lo necesario para construir una app web completamente funcional. Sin duda el back-end es el area que mas domino.`,
      `Durante este tiempo he trabajado con herramientas como Firebase, sistemas de pago con Stripe y API’s en Twitter o Slack. Del mismo modo, pude utilizar Gatsby para la creación de blogs, BigQuery para la extracción de datos y Solidity para sumergirme en el mundo Crypto.`,
    ],
  ],
  French: [
    [
      "Août 2021 - Décembre 2021",
      `Travailler comme chef de produit a été une expérience intense et enrichissante.`,
      `Mon travail quotidien consistait à coordonner un équipe de quatre personnes, pour mener à bien le développement du produit sur les aspects UX/UI, back et front end. Le tout, en relation directe avec l’équipe marketing et la direction.`,
      `Nous avons mis en place des méthodes de travail agiles et responsives, permettant de tester régulièrement les avancements de notre activité avec différents groupes d’utilisateurs. Pour créer un réel impact, nous devions corréler les possibilités techniques avec l’attente des utilisateurs.`,
    ],
    [
      "Septembre 2020 - Mai 2021",
      `De mon entrée à VoiceMix, j’ai travaillé pour montrer l’outil innovant que nous étions en train de développer aux futurs utilisateurs. Cela m’a conduit à faire des recherches sur le UX/UI, à prêter attention aux plus petits détails et à découvrir un monde qui allait au-delà de la présentation de quelques textes et boutons.`,
      `Si quelque chose prêtait à confusion, il était très probable que nous perdions des clients. Bien que je ne sois pas très bon en design, j’ai l’œil pour le jugement et je me rends vite compte que les choses ne sont pas alignées esthétiquement.`,
    ],
    [
      "Juin 2020 - Août 2021",
      `Grâce au travail effectué sur VoiceMix, j'ai pu développer les compétences nécessaires pour construire une application web entièrement fonctionnelle. Le back-end est sans aucun doute le domaine d'activité que je maîtrise le mieux à ce jour.`,
      `Pendant cette période j’ai travaillé avec des outils comme firebase, systèmes de paiement avec Stripe et API’s sur Twitter ou Slack. A ce même titre, j’ai pu utiliser Gatsby pour la création des blogs, BigQuery pour l’extraction des données et Solidity pour plonger dans le monde Crypto.`,
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
      {texts[language].map((e) => (
        <p key={e} className="text-sm font-light text-justify md:tracking-wide pt-1.5">
          {e}
        </p>
      ))}
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
              return <p key={e} className="text-justify">{e}</p>;
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
