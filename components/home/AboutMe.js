import Image from "next/image";
import { useEffect } from "react";
import styles from "./about.module.scss";

const texts = {
  English: [
    "About me",
    `Strongly attracted by the technological industry, innovation and start-ups, I know how to appreciate complex challenges, with various stakes. Originally from Argentina, I greatly appreciate nature, sport and outdoor activities. Being calm and simple in everyday life, I keep a critical mind about my work and my goals.`,
    `At the age of 16, I started working on my programming skills as a self-taught. This allowed me to create my first games and applications. This contact with technology has woven my curiosity, pushing me towards a deeper understanding of this universe.`,
    `In 2020 I went to live in Patagonia, where I completed my two years of studies in administration and my first professional experiences. I have lived two years with a lot of emotions and work, accentuated by a unique global environment due to Covid-19. Undoubtedly a great experience, which gave me the necessary tools to tackle new challenges in my life.`,
    `With the firm intention of continuing my learning in web development, and wishing to enrich my professional career. I am currently looking for a learning project, allowing me to use my skills.`,
  ],
  Spanish: [
    "Sobre mi",
    `Apasionado por la industria tecnológica, la innovación y las start-ups, sé apreciar los desafíos complejos en su totalidad. Originario de Argentina, atraido por la naturaleza, el deporte, la inovacion en tecnologia y las actividades al aire libre. Me considero tranquilo y sencillo en la vida cotidiana, asi manteniendo una mente crítica sobre mi trabajo y mis objetivos.`,
    `A los 16 años comencé a aprender a programar de forma autodidacta. Esto me permitió crear mis primeros juegos y aplicaciones. Este contacto temprano con la tecnología alimentó mi curiosidad, llevándome a una comprensión más profunda de lo que el inovar implicaba.`,
    `En 2020 me fui a vivir a la Patagonia, donde realicé mis dos años de estudios en administración y mis primeras experiencias profesionales. He vivido dos años muy ricos en emociones y trabajo, acentuados por un contexto mundial único debido al Covid-19. Sin duda una gran experiencia, que me dio las herramientas necesarias para abordar nuevos desafíos en mi vida.`,
    `Con la firme intención de continuar mi aprendizaje en desarrollo web, y deseando enriquecer mi trayectoria profesional. Actualmente estoy buscando un proyecto de aprendizaje que me permita aprovechar mis habilidades.`,
  ],
  French: [
    "Sur moi",
    `Fortement attiré par l’industrie technologique, l'innovation et les start-up, je sais apprécier les défis complexes, avec des enjeux divers. Originaire d'Argentine, j'apprécie grandement la nature, le sport et les activités en plein air. Étant calme et simple dans la vie quotidienne, je garde un esprit critique sur mon travail et mes objectifs.`,
    `A l'âge de 16 ans, j’ai commencé à travailler sur mes compétences en programmation en tant qu’autodidacte. Ce qui m’a permis de créer mes premiers jeux et applications. Ce contact avec la technologie a tissé ma curiosité, en me poussant vers une compréhension plus approfondie de cet univers.`,
    `En 2020 je suis partie vivre en Patagonie, ou j’ai réalisé mes deux ans d'études en administration et mes premières expériences professionnelles. J’ai vécu deux ans très riches en émotions et travail, accentuées par un contexte mondial unique en raison du Covid-19. Sans doute une grande expérience, qui m'a donné les outils nécessaires pour aborder de nouveaux défis dans ma vie.`,
    `Avec la ferme intention de continuer mon apprentissage en développement web, et souhaitant enrichir mon parcours professionnel. Je suis actuellement à la recherche d’un projet en apprentissage, me permettant de mettre à profit mes compétences.`,
  ],
};


// const texts = {
//   English: [
//     "About me",
//     `I was born in Argentina in 2002. I am passionate about nature, sport, start-ups and the technology industry. I consider myself a simple and calm person, dedicated and ambitious. I hope to be able to convey my learning and my values throughout this page.`,
//     `At the age of 16, I started programming and creating my own video games and apps. Driven by my curiosity, I wanted to understand what was going on behind these screens. Without dreaming, years later I would find myself immersed in all that working in a start-up.`,
//     `At the end of my 17 years, I went to live alone in the south of my country. The famous Argentine Patagonia.  There I began my two years of studies in administration and my participation in the world of work. Different experiences, learnings, disappointments and joys, with emotions intensified in a context of pandemic. Certainly a great growth both personal and professional that gave me what it took to face this next step.`,
//     `I currently live in Decazeville, France. With the intention of learning language, culture and integrating into society. Also with the aim of continuing my studies and continue enriching my professional career with new and challenging experiences.`,
//   ],
//   Spanish: [
//     "Sobre mi",
//     `Nací en Argentina en 2002. Me apasionan la naturaleza, el deporte, las start-ups y la industria tecnológica. Me considero una persona sencilla y tranquila, dedicada y ambiciosa. Espero poder transmitir mi aprendizaje y mis valores a lo largo de esta página.`,
//     `A la edad de 16 años, empecé a programar y crear mis propios videojuegos y aplicaciones. Impulsado por mi curiosidad, quería entender lo que estaba sucediendo detrás de estas pantallas. Sin soñarlo, años más tarde  me encontraría inmerso en todo aquello trabajando en una start-up.`,
//     `Al final de mis 17 años, fui a vivir solo al sur de mi país. La famosa Patagonia argentina.  Allí comencé mis dos años de estudios en administración y mis participaciones en el mundo del trabajo. Diferentes experiencias, aprendizajes, decepciones y alegrías, con emociones intensificadas en un contexto de pandemia. Sin duda un gran crecimiento tanto personal como profesional que me dio lo necesario para hacer frente a este próximo paso.`,
//     `Actualmente vivo en Decazeville, Francia. Con la intención de aprender el idioma, la cultura e integrarme en la sociedad. Además con el objetivo también continuar mis estudios y seguir enriqueciendo mi carrera profesional con nuevas y desafiantes experiencias.`,
//   ],
//   French: [
//     "Sur moi",
//     `Je suis né en Argentine en 2002. Je suis passionné par la nature, le sport, les start-ups et l’industrie
//     technologique. Je me considère comme quelqu’un de simple et de calme, ainsi que dévoué et ambitieux.
//     J’espère pouvoir vous transmettre mes apprentissages et mes valeurs tout au long de cette page.`,
//     `À l’âge de 16 ans, j’ai commencé à programmer et à créer mes propres jeux vidéo et applications. Poussé par ma curiosité, je voulais comprendre ce qui se passait derrière ces écrans. Sans en rêver, des années plus tard, je me retrouverais plongé dans tout ce travail sur une start-up.`,
//     `À la fin de mes 17 ans, je suis allé vivre seul au sud de mon pays. La célèbre Patagonie argentine. C’est
//     là que j’ai commencé mes deux années d’études en administration et mes participations dans le monde du
//     travail. Différentes expériences, apprentissages, déceptions et joies, avec des émotions intensifiées dans
//     un contexte de pandémie. Sans doute une grande croissance à la fois personnelle et professionnelle qui m’a
//     donné le nécessaire pour faire face à cette prochaine étape.`,
//     `Je vis actuellement à Decazeville, en France. Avec l’intention d’apprendre la langue, la culture et m’intégrer dans la société. En outre, dans le but de poursuivre mes études et de continuer à enrichir ma carrière avec de nouvelles expériences stimulantes.`,
//   ],
// };

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
              return texts[language].indexOf(e) == 0 ? <></> : <p className="text-justify">{e}</p>;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
