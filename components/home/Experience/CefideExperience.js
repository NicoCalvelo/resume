const texts = {
  English: [
    "App development",
    "CEFiDe is a gym located in San Nicolás - Argentina. They work mainly in the recovery of injuries and the preparation of athletes, among others.  After talking to the manager several times and knowing my interest in the field of computer science, he proposed me the creation of his own application. As in any first job, with a little uncertainty I accepted. So I devoted myself to work without even imagining the adventures and learning that I was about to experience.",
  ],
  Spanish: [
    "Desarrollo de app",
    "El CEFiDe es un gimnasio situado en San Nicolás - Argentina. Trabajan principalmente en la recuperación de lesiones y la preparación de deportistas, entre otros.  Después de hablar con el gerente varias veces y conociendo mi interés en el campo de la informática, me propuso la creación de su propia aplicación. Como en cualquier primer trabajo, con un poco de incertidumbre acepté. Así que me dediqué al trabajo sin ni siquiera imaginar las aventuras y el aprendizaje que estaba a punto de experimentar.",
  ],
  French: [
    "App Développement",
    "Le CEFiDe est une salle de sport, situe en San Nicolas – Argentine. Ils travaillent principalement sur la récupération des blessures et la préparation des sportifs, entre autres.  Après avoir échangé avec le responsable a plusieurs reprises et connaissant mon intérêt par le domaine informatique, il m’a proposé la création de leur propre application. Comme dans tout premier travail, avec un peu d’incertitude j’ai accepté. Je me suis donc consacrée au travail sans même imaginer les aventures et apprentissages que j’étais sur le point de vivre.",
  ],
};
const frameworks = ["Flutter", "UX", "Photoshop", "Git/Github", "AWS (cloud)", "Windows", "Android"];

const expTexts = {
  English: [
    "Febraury 2019 - December 2020",
    `The first phase of my work was to understand the dynamics and needs of the customers in the room. This led me to create a news section, a calendar of activities and a system to visualize the different training routines.`,
    `I have certainly learned a lot about application development, but the most important thing was to get into the professional world. Hobnobbing with customers, managing daily demands, learning to prioritize, segment, and other skills beyond a programmer’s technicality.`,
  ],
  Spanish: [
    "Febrero 2019 - Diciembre 2019",
    `La primera fase de mi trabajo consistía en comprender la dinámica y las necesidades de los clientes de la sala. Esto me llevó a crear una sección de noticias, un calendario de actividades y un sistema para visualizar las diferentes rutinas de entrenamiento.`,
    `Sin duda he aprendido mucho sobre el desarrollo de aplicaciones, pero lo más importante fue entrar en el mundo profesional. Codearse con los clientes, gestionar las demandas diarias, aprender a priorizar, segmentar y otras habilidades que escapan al tecnicismo de un programador.`,
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
      <p className="absolute py-0.5 -top-4 bg-palette-yellow rounded-full px-4 text-palette-black left-4 font-bold text-xl tracking-wider">
        CEFiDe
      </p>
      <p className="text-sm font-light text-justify md:tracking-wide">{texts[language][1]}
      </p>
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
