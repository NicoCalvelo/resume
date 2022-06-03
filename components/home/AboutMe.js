import Image from "next/image";
import { useEffect } from "react";
import styles from "./about.module.scss";

const texts = {
  English: [
    "About me",
    `I was born in Argentina in 2002. I am passionate about nature, sport, start-ups and the technology industry. I consider myself a simple and calm person, dedicated and ambitious. I hope to be able to convey my learning and my values throughout this page.`,
    `At the age of 16, I started programming and creating my own video games and apps. Driven by my curiosity, I wanted to understand what was going on behind these screens. Without dreaming, years later I would find myself immersed in all that working in a start-up.`,
    `At the end of my 17 years, I went to live alone in the south of my country. The famous Argentine Patagonia.  There I began my two years of studies in administration and my participation in the world of work. Different experiences, learnings, disappointments and joys, with emotions intensified in a context of pandemic. Certainly a great growth both personal and professional that gave me what it took to face this next step.`,
    `I currently live in Decazeville, France. With the intention of learning language, culture and integrating into society. Also with the aim of continuing my studies and continue enriching my professional career with new and challenging experiences.`,
  ],
  Spanish: [
    "Sobre mi",
    `Nací en Argentina en 2002. Me apasionan la naturaleza, el deporte, las start-ups y la industria tecnológica. Me considero una persona sencilla y tranquila, dedicada y ambiciosa. Espero poder transmitir mi aprendizaje y mis valores a lo largo de esta página.`,
    `A la edad de 16 años, empecé a programar y crear mis propios videojuegos y aplicaciones. Impulsado por mi curiosidad, quería entender lo que estaba sucediendo detrás de estas pantallas. Sin planearlo, años más tarde me encontraría totalmente inmerso en ese mundo.`,
    `Al final de mis 17 años, fui a vivir solo al sur de mi país. La conocida Patagonia argentina.  Allí comencé mis dos años de estudios en administración y mis participaciones en emprendimientos. Diferentes experiencias, aprendizajes, decepciones y alegrías, con emociones intensificadas en un contexto de pandemia. Sin duda un gran crecimiento tanto personal como profesional que me dio lo necesario para hacer frente a las siguientes etapas en mi vida.`,
    `Actualmente vivo en Aveyron, Francia. Con la intención de aprender el idioma, la cultura e integrarme en la dinamica local. Con la mente puesta en continuar mis estudios y seguir enriqueciendo mi carrera profesional con nuevas y desafiantes experiencias.`,
  ],
    French: [
    "Sur moi",
    `Fortement attiré par l’industrie technologique, l'innovation et les start-up, je sais apprécier les défis complexes, avec des enjeux divers. Originaire d'Argentine, j'apprécie grandement la nature, le sport et les activités en plein air. Étant calme et simple dans la vie quotidienne, je garde un esprit critique sur mon travail et mes objectifs.`,
    `A l'âge de 16 ans, j’ai commencé à travailler sur mes compétences en programmation en tant qu’autodidacte. Ce qui m’a permis de créer mes premiers jeux et applications. Ce contact avec la technologie a tissé ma curiosité, en me poussant vers une compréhension plus approfondie de cet univers.`,
    `En 2020 je suis partie vivre en Patagonie, ou j’ai réalisé mes deux ans d'études en administration et mes premières expériences professionnelles. J’ai vécu deux ans très riches en émotions et travail, accentuées par un contexte mondial unique en raison du Covid-19. Sans doute une grande expérience, qui m'a donné les outils nécessaires pour aborder de nouveaux défis dans ma vie.`,
    `Avec la ferme intention de poursuivre le développement de mon apprentissage, et souhaitant enrichir mon parcours professionnel. Je recherche actuellement une entreprise qui sache m'accompagner dans mon projet d'apprentissage.`,
  ],
 };

export default function AboutMe({ language }) {
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
    observer.observe(document.getElementById("h3"));
  }, []);

  return (
    <>
      <div className="h-14 md:h-28 w-full"></div>
      <div id="orange" className="flex flex-col space-y-5">
        <div id="h3" className="flex flex-row items-center space-x-1 md:space-x-4 md:px-4">
          <h3>{texts[language][0]}</h3>
          <div className="h-0.25 flex-grow bg-palette-orange" />
        </div>
        <div className="flex flex-col md:flex-row md:px-8 space-y-5 md:space-y-0 md:space-x-5 items-center justify-evenly">
          <div className="flex relative justify-end w-4/5 md:w-2/5">
            <div className="absolute max-w-xs hover:scale-110 hover:bg-palette-orange hover:bg-opacity-20 transition duration-500 ease-in-out bottom-4 top-5 right-4 -left-4 md:bottom-8 md:top-10 md:right-20 md:-left-4 border border-palette-orange rounded" />
            <Image
              priority
              className="rounded max-w-xs hover:scale-125 md:hover:scale-110 transition duration-500 ease-in-out"
              src={"/images/fotixo.jpg"}
              width={375}
              height={500}
              alt="fotixo"
            />
          </div>
          <div className="flex leading-snug w-full md:w-3/5 flex-col space-y-2 md:space-y-4 md:px-10 ">
            {texts[language].map((e) => {
              if (texts[language].indexOf(e) != 0)
                return (
                  <p key={e} className="text-justify">
                    {e}
                  </p>
                );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
