const texts = {
  English: [
    "App development",
    "CEFiDe is a gym located in San Nicolás - Argentina. They work mainly in the recovery of injuries and the preparation of athletes, among others.",
  ],
  Spanish: [
    "Desarrollo de app",
    "El CEFiDe es un gimnasio situado en San Nicolás - Argentina. Trabajan principalmente en la recuperación de lesiones y la preparación de deportistas, entre otros.",
  ],
  French: [
    "App Développement",
    "Le CEFiDe est une salle de sport, situe en San Nicolas – Argentine. Ils travaillent principalement sur la récupération des blessures et la préparation des sportifs, entre autres.",
  ],
};
const frameworks = ["Flutter", "UX", "Photoshop", "Git/Github", "AWS (cloud)", "Windows", "Android"];

const expTexts = {
  English: [
    "Febraury 2019 - December 2020",
    `Part of my job was to understand and iterate on user needs. This led me to create a news section, a calendar of activities and a system to load and view the different training sheets.`,
    `I have learned a lot about application development, however the most important thing was those first contacts with the professional world.`,
  ],
  Spanish: [
    "Febrero 2019 - Diciembre 2019",
    `Parte de mi trabajo consistía en comprender e iterar sobre las necesidades de los usuarios. Esto me llevó a crear una sección de noticias, un calendario de actividades y un sistema cargar y visualizar las diferentes planillas de entrenamiento.`,
    `He aprendido mucho sobre el desarrollo de aplicaciones, sin embargo lo más importante fueron esos primeros contactos con el mundo profesional.`,
  ],
  French: [
    "Février 2019 - Décembre 2019",
    `La première phase de mon travail consistait en comprendre la dynamique et les besoins des clients de la salle. Cela m’a amené à créer un fil d’actualité, un planning des activités et un système pour visualiser les différentes routines d’entrainement.`,
    `J’ai certainement beaucoup appris sur le développement des applications, mais le plus important a été de rentrer dans le monde professionnel. Côtoyer les clients, gérer les demandes quotidiennes, apprendre à prioriser, segmenter et d’autres compétences qui échappent à la technicité d’un programmeur.`,
  ],
};

export default function CefideExperience({ language }) {
  return (
    <div className="relative shadow-xl flex flex-col pl-5 md:pl-8 pr-10 md:pr-14 pb-10 md:pb-16 pt-10 border-dashed border-2 border-opacity-50 rounded-lg border-palette-yellow">
      <div className="absolute flex left-4 -top-4 items-center  bg-palette-yellow py-0.5   rounded-full px-4   ">
        <p className="text-xl tracking-wider font-bold text-palette-black">CEFiDe</p>
        <div className="group flex flex-col">
          <svg
            className="h-5 w-5 text-palette-black ml-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            />
          </svg>
          <p className="hidden group-hover:flex group-hover:flex absolute z-10 bg-palette-black border border-palette-yellow rounded mx-6 p-6 top-10 left-0 w-64 text-xs font-light">
            {texts[language][1]}
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center md:space-x-2 space-y-5 md:space-y-0 md:h-64 mt-5">
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
        <div id="experienceText" className="md:w-5/6 leading-snug md:px-2 space-y-1.5">
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
