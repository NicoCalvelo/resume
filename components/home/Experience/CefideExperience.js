const texts = {
  English: ["App development"],
  Spanish: ["Desarrollo de app"],
  French: ["App Développement"],
};
const frameworks = ["Uniy3D", "C#", "GIMP", "Windows", "Android"];

const expTexts = {
  English: [
    "Febraury 2019 - December 2020",
    `My introduction to the world of programming was in 2018 through games. In September 2020 I launched on Google Play a platform game based in my hometown. From idea, design to mechanics and animations. `,
    `Without a doubt, game development is the most fun. Mistakes that on the web can be a headache, in games can lead to laughter and mysteries. `,
    `When I want to, as a hobby, I go back to work on some simple and short project to learn and have fun.`,
  ],
  Spanish: [
    "Febrero 2019 - Diciembre 2019",
    `Mi introducción al mundo de la programación fue en 2018 a través de los juegos. En septiembre del 2020 llegué a lanzar en Google Play un juego de plataformas basado en mi ciudad natal. Desde la idea, el diseño hasta la mecánica y las animaciones.`,
    `Sin duda, el desarrollo de juegos es lo más divertido. Los errores que en la web pueden ser un dolor de cabeza, en los juegos pueden dar lugar a risas y misterios.`,
    `Cuando me dan ganas, como hobby, vuelvo a trabajar en algún proyecto sencillo y corto para aprender y divertirme.`,
  ],
  French: [
    "Février 2019 - Décembre 2019",
    `Mon introduction au monde de la programmation a été en 2018 à travers les jeux. En septembre 2020, j’ai lancé sur Google Play un jeu de plateforme basé dans ma ville natale. De l’idée, du design à la mécanique et aux animations. `,
    `Sans aucun doute, le développement de jeux est le plus amusant. Les erreurs sur le web peuvent être un casse-tête, dans les jeux peuvent conduire à des rires et des mystères. `,
    `Quand j’en ai envie, comme hobby, je reviens travailler sur un projet simple et court pour apprendre et m’amuser. `,
  ],
};

export default function CefideExperience({ language }) {
  return (
    <div className="relative shadow-xl flex flex-col pl-8 pr-14 pb-16 pt-10 border-dashed border-2 border-opacity-50 rounded-lg border-palette-yellow">
      <p className="absolute py-0.5 -top-4 bg-palette-yellow rounded-full px-4 text-palette-black left-4 font-bold text-xl tracking-wider">
        CEFiDe
      </p>
      <p className="text-sm md:text-base font-light tracking-wide">
        À l’âge de 17 ans, je suis entré dans le monde des apps en développant une pour une salle de gym locale. J'ai
        commencé à acquérir des connaissances sur les bases de données et les expériences des utilisateurs.
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
          <p className="font-light text-xs pt-5 pb-1">{expTexts[language][3][0]}</p>
          {expTexts[language].map((e) => {
            return expTexts[language].indexOf(e) == 0 ? (
              <></>
            ) : (
              <p key={e} className="text-justify">
                {e}
              </p>
            );
          })}
          <ul className="grid leading-snug pt-6 text-xs md:text-sm font-semibold md:font-bold md:tracking-wider gap-2 grid-cols-3">
            {frameworks.map((e) => {
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
