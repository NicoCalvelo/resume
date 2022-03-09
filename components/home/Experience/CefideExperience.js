const texts = {
  English: [
    "App development",
    "CEFiDe is a gym in the city where I was born and lived my childhood. Its owner, a friend of my father’s, learned that I was taking an application development course and hired me to do what would be my first application project. With a little uncertainty and doubting my abilities, I set to work, without even imagining how much I would dive into this world after a few months.",
  ],
  Spanish: [
    "Desarrollo de app",
    "CEFiDe es un gimnasio de la ciudad donde nací y viví mi ñiñez. Su dueño, amigo de mi padre, al enterarse que estaba realizando un curso de desarrollo de app me contrato para realizar lo que seria mi primer proyecto de app. Con un poco de incertidumbre y dudando de mis capacidades me puse manos a la obra, sin siquiera imaginar cuanto me adentraria en este mundo al cabo de unos meses.",
  ],
  French: [
    "App Développement",
    "CEFiDe est un gymnase de la ville où je suis né et où j’ai vécu mon enfance. Son propriétaire, ami de mon père, a appris qu’il prenait un cours de développement d’applications et m’a engagé pour faire ce qui serait mon premier projet d’app. Avec un peu d’incertitude et doutant de mes capacités, je me mis au travail, sans même imaginer combien je m’aventurerais dans ce monde après quelques mois.",
  ],
};
const frameworks = ["Flutter", "UX", "GIMP", "Git/Github", "AWS (cloud)", "Windows", "Android"];

const expTexts = {
  English: [
    "Febraury 2019 - December 2020",
    `My weekly job was to make as much progress as possible in the gym and customer requirements. This led me to make a news feed about the gym, a system of shifts, loading and viewing of gym routines, and also an administration program for PC where to manage the entire database.`,
    `I have certainly learned a lot about application development, however what served me most was to start rubbing shoulders with customers and the daily demand of the real world, learning to prioritize, segment and other skills that escape a programmer’s technicality.`,
  ],
  Spanish: [
    "Febrero 2019 - Diciembre 2019",
    `Mi trabajo semanal era hacer el mayor progreso posible en el gimnasio y los requisitos del cliente. Esto me llevó a hacer un feed de noticias sobre el gimnasio, un sistema de turnos, carga y visualización de rutinas de gimnasio, y también un programa de administración para PC donde gestionar toda la base de datos.`,
    `Sin duda he aprendido mucho sobre el desarrollo de aplicaciones, sin embargo, lo que más me sirvió fue empezar a codearme con los clientes y la demanda diaria del mundo real, aprender a priorizar, segmentar y otras habilidades que escapan al tecnicismo de un programador.`,
  ],
  French: [
    "Février 2019 - Décembre 2019",
    `Mon travail hebdomadaire était de faire le plus de progrès possible dans le gymnase et les exigences des clients. Cela m’a amené à faire un flux de nouvelles sur le gymnase, un système de quarts de travail, le chargement et la visualisation des routines de gymnase, et aussi un programme d’administration pour PC où gérer la base de données entière.`,
    `J’ai certainement beaucoup appris sur le développement d’applications, mais ce qui m’a le plus servi était de commencer à côtoyer les clients et la demande quotidienne du monde réel, apprendre à prioriser, segmenter et d’autres compétences qui échappent à la technicité d’un programmeur.`,
  ],
};

export default function CefideExperience({ language }) {
  return (
    <div className="relative shadow-xl flex flex-col pl-8 pr-14 pb-16 pt-10 border-dashed border-2 border-opacity-50 rounded-lg border-palette-yellow">
      <p className="absolute py-0.5 -top-4 bg-palette-yellow rounded-full px-4 text-palette-black left-4 font-bold text-xl tracking-wider">
        CEFiDe
      </p>
      <p className="text-sm md:text-sm font-light tracking-wide">{texts[language][1]}
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
          {texts[language][0]}
        </div>
        <div id="experienceText" className="md:w-5/6 leading-snug px-2 space-y-1.5">
          <p className="font-light text-xs pt-5 pb-1">{expTexts[language][0]}</p>
          {expTexts[language].map((e) => {
            if (expTexts[language].indexOf(e) != 0) {
              return (
                <p key={e.toString()} className="text-justify">
                  {e}
                </p>
              );
            }
          })}
          <ul className="grid leading-snug pt-6 text-xs md:text-sm font-semibold md:font-bold md:tracking-wider gap-2 grid-cols-3">
            {frameworks.map((e) => {
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
