import Image from "next/image";
import styles from "./header.module.scss";

const texts = {
  English: [
    "Hi, my name is",
    "Young tech-entrepreneur.",
    "An app for a local gym. A mobile game based in my hometown. A web app to change how we communicate and some crypto experiences.",
    'Download my formal CV',
  ],
  Spanish: [
    "Hola, me llamo",
    "Joven emprendedor en tecnología.",
    "Una aplicación para un gimnasio local. Un juego móvil basado en mi ciudad natal. Una aplicación web para cambiar la forma en que nos comunicamos y algunas experiencias crypto.",
    'Descargar mi CV formal',
  ],
  French: [
    "Salut, mon nom est",
    "Jeune entrepreneur en technologie.",
    "Une application pour un gymnase local. Un jeu mobile basé dans ma ville natale. Une application web pour changer la façon dont nous communiquons et certaines expériences crypto.",
    'Télécharger mon CV officiel',
  ],
};

export default function Header({ language }) {
  return (
    <div id='green' className="flex flex-row items-center justify-between">
      <div className="flex-col mb-20 space-y-3 w-3/5 z-10 -mr-20">
        <div className="leading-none text-palette-green">
          <div className={styles.outer}>
            <div className="font-medium text-sm">{texts[language][0]}</div>
            <div className={styles.present}>
              <div className="font-medium text-sm">{texts[language][0]}</div>
            </div>
          </div>
          <div className={styles.outer}>
            <h1>Nicolás Calvelo</h1>
            <div className={styles.name}>
              <h1>Nicolás Calvelo</h1>
            </div>
          </div>
        </div>
        <div className="leading-snug">
          <div className={styles.outer}>
            <h2 >{texts[language][1]}</h2>
            <div className={styles.inner}>
              <h2 className='text-palette-grey-blue'>{texts[language][1]}</h2>
            </div>
          </div>
          <div className={styles.fadeIn}>
            <p>{texts[language][2]}</p>
          </div>
        </div>
        <div className={styles.fadeIn}>
          <button className="action-btn">{texts[language][3]}</button>
        </div>
      </div>
      <div className="relative w-3/6">
        <div className={styles.backgroundImg} />
        <Image priority className="rounded" src="/images/header.jpg" width={582} height={436} alt="header_img" />
      </div>
    </div>
  );
}
