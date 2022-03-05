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
    `A la edad de 16 años, empecé a programar y crear mis propios videojuegos y aplicaciones. Impulsado por mi curiosidad, quería entender lo que estaba sucediendo detrás de estas pantallas. Sin soñarlo, años más tarde  me encontraría inmerso en todo aquello trabajando en una start-up.`,
    `Al final de mis 17 años, fui a vivir solo al sur de mi país. La famosa Patagonia argentina.  Allí comencé mis dos años de estudios en administración y mis participaciones en el mundo del trabajo. Diferentes experiencias, aprendizajes, decepciones y alegrías, con emociones intensificadas en un contexto de pandemia. Sin duda un gran crecimiento tanto personal como profesional que me dio lo necesario para hacer frente a este próximo paso.`,
    `Actualmente vivo en Decazeville, Francia. Con la intención de aprender el idioma, la cultura e integrarme en la sociedad. Además con el objetivo también continuar mis estudios y seguir enriqueciendo mi carrera profesional con nuevas y desafiantes experiencias.`,
  ],
  French: [
    "Sur moi",
    `Je suis né en Argentine en 2002. Je suis passionné par la nature, le sport, les start-ups et l’industrie
    technologique. Je me considère comme quelqu’un de simple et de calme, ainsi que dévoué et ambitieux.
    J’espère pouvoir vous transmettre mes apprentissages et mes valeurs tout au long de cette page.`,
    `À l’âge de 16 ans, j’ai commencé à programmer et à créer mes propres jeux vidéo et applications. Poussé par ma curiosité, je voulais comprendre ce qui se passait derrière ces écrans. Sans en rêver, des années plus tard, je me retrouverais plongé dans tout ce travail sur une start-up.`,
    `À la fin de mes 17 ans, je suis allé vivre seul au sud de mon pays. La célèbre Patagonie argentine. C’est
    là que j’ai commencé mes deux années d’études en administration et mes participations dans le monde du
    travail. Différentes expériences, apprentissages, déceptions et joies, avec des émotions intensifiées dans
    un contexte de pandémie. Sans doute une grande croissance à la fois personnelle et professionnelle qui m’a
    donné le nécessaire pour faire face à cette prochaine étape.`,
    `Je vis actuellement à Decazeville, en France. Avec l’intention d’apprendre la langue, la culture et m’intégrer dans la société. En outre, dans le but de poursuivre mes études et de continuer à enrichir ma carrière avec de nouvelles expériences stimulantes.`,
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
      <div className="h-14 md:h-24 w-full"></div>
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
              return texts[language].indexOf(e) == 0 ? <></> : <p className="text-justify">{e}</p>;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
