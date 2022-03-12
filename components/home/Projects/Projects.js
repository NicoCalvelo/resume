import { useEffect } from "react";
import styles from "./projects.module.scss";
import Image from "next/image";
import { openProjectModal } from "../Modals/projectModal";

const texts = {
  English: ["Projects", "See more"],
  Spanish: ["Proyectos", "Ver más"],
  French: ["Projets", "Voir plus"],
};

const projectsSlots = [
    {
        title:'Crypto Towers',
        description: {
            English: 'A game where you have towers on a map full of other players who also have towers and you can occasionally face them. All the towers on the map are NFT, which means they’re really yours.',
            Spanish: 'Un juego donde posees torres en un mapa lleno de otros jugadores que también tienen torres y puedes enfrentarlas ocasionalmente. Todas las torres en el mapa son NFT, lo cual significa que realmente son tuyas.',
            French: 'Un jeu où vous avez des tours sur une carte pleine d’autres joueurs qui ont aussi des tours et vous pouvez parfois y faire face. Toutes les tours sur la carte sont NFT, ce qui signifie qu’elles sont vraiment à vous.',
        },
        img: '/images/cryptoTowers.jpg',
    },
    {
        title:'Trading Bot',
        description: {
            English: 'The uncertainty of cryptocurrencies',
            Spanish: 'La incertidumbre de las criptomonedas',
            French: 'L’incertitude des cryptomonnaies',
        },
        img: '/images/botPortrait.jpg',
        timePeriod: {
            English: 'August 2021',
            Spanish: 'Agosto 2021',
            French: 'Août 2021',
        }    
    },
    {
        title:'Endeavor Miami',
        description: {
            English: 'Find your start-up ideal investors',
            Spanish: 'Inversores ideales para tu start-up',
            French: 'Des onduleurs idéaux pour votre start-up',
        },
        img: '/images/endeavorPortrait.jpg',
        timePeriod: {
            English: 'June 2021',
            Spanish: 'Junio 2021',
            French: 'Juin 2021',
        }    
    },
    {
        title:'Te Busco',
        description: {
            English: 'A mobile game based in my hometown',
            Spanish: 'Un juego basado en mi ciudad natal',
            French: 'Un jeu basé sur ma ville natale',
        },
        img: '/images/teBuscoPortrait.jpg',
        timePeriod: {
            English: 'May 2020',
            Spanish: 'Mayo 2020',
            French: 'Mai 2020',
        }    
    },
]

export default function Projects({ language }) {

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
    observer.observe(document.getElementById("h3purple"));
  }, []);

  const registerUser = async (event) => {
    // event.preventDefault()
    // const res = await fetch('/api/register', {
    //   body: JSON.stringify({
    //     name: event.target.name.value
    //   }),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   method: 'POST'
    // })
    // const result = await res.json()
    // result.user => 'Ada Lovelace'
  };
  return (
    <>
      <div className="h-16 md:h-36 w-full"></div>
      <div id="purple" className="flex-col items-center space-y-10 md:space-y-16 md:px-4">
        <div id="h3purple" className="flex flex-row items-center space-x-1 md:space-x-4 ">
          <div className="h-0.25 w-1/5 bg-palette-purple" />
          <h3>{texts[language][0]}</h3>
          <div className="h-0.25 flex-grow bg-palette-purple" />
        </div>
        <div className="relative flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="relative mb-4 w-5/6 md:mb-0 md:w-4/6">
            <div className={styles.backgroundImg} />
            <Image
              quality="100"
              className="rounded"
              src={projectsSlots[0].img}
              width={1900}
              height={969.43}
              alt="header_img"
            />
          </div>
          <div className="flex flex-col text-left max-w-lg md:max-w-none md:py-6 md:w-4/6 md:pl-10">
            <h2 className="leading-normal text-palette-grey-blue">
              {projectsSlots[0].title}
              <br />{" "}
              <p className="pb-4 pr-5">
              {projectsSlots[0]['description'][language]}
              </p>
            </h2>
            <button
              onClick={() => {openProjectModal(projectsSlots[0].title)}}
              className="action-btn-purple w-28 "
            >
              {texts[language][1]}
            </button>
          </div>
          <div className="absolute right-2 -top-2 rounded-full bg-palette-purple text-xs font-semibold px-4 py-1 text-palette-black transition transition-all duration-500 hover:bg-opacity-75 hover:ring-2 ring-opacity-50 ring-palette-purple">
            LIVE
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between justify-items-center gap-8 md:gap-5 lg:gap-2">
          {[1, 2, 3].map((e) => {
            return (
              <div onClick={() => {openProjectModal(projectsSlots[e].title)}} key={e.toString()} className="relative w-full max-w-sm md:max-w-none flex flex-row border border-palette-purple bottom-0.5 shadow cursor-pointer hover:shadow-xl rounded transition transition-all duration-500 hover:bg-palette-purple hover:bg-opacity-10 hover:ring-2 ring-opacity-50 ring-palette-purple">
                <Image
                  quality={100}
                  className="rounded-l"
                  src={projectsSlots[e].img}
                  width={160}
                  height={140}
                  objectFit='cover'
                  alt="project-slot-image"
                />
                <div className="flex w-2/4 flex-col pl-2 py-2 pr-2 justify-evenly">
                  <h2 className="text-xl leading-none font-extrabold">{projectsSlots[e].title}</h2>
                  <p className="text-xs">{projectsSlots[e]['description'][language]}</p>
                </div>
                <div className="absolute right-2 -bottom-3 rounded-full bg-palette-purple text-xs font-semibold px-4 py-1 text-palette-black transition transition-all duration-500 hover:bg-opacity-75 hover:ring-2 ring-opacity-50 ring-palette-purple">
                {projectsSlots[e]['timePeriod'][language]}
                </div>
              </div>
            );
          })}
        </div>
        {/* <div className="relative flex flex-col border border-palette-purple rounded py-4 px-8">
            <h2 className="text-2xl font-extrabold">What’s next?</h2>
            <form className="p-4" onSubmit={registerUser}>
              <input className="w-full rounded border border-opacity-50 border-palette-purple bg-gray-800 bg-opacity-50 text-gray-500 px-4 focus:outline-none placeholder-gray-700 italic" placeholder="text me a project..." id="projectIdea" name="projectIdea" type="text" autoComplete="none" required />
              <button className="absolute right-2 -bottom-3 rounded-full bg-palette-purple text-xs font-semibold px-6 py-1 text-palette-black" type="submit">Send</button>
            </form>
          </div> */}
      </div>
    </>
  );
}
