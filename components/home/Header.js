import Image from "next/image";
import styles from "./header.module.scss";

const texts = {
  English: [
    "Hi, my name is",
    "Young tech-entrepreneur.",
    "An app for a local gym. A game based in my hometown. A web app to raise our voice and some crypto experiences.",
    'My resume',
  ],
  Spanish: [
    "Hola, me llamo",
    "Joven emprendedor en tecnología.",
    "Una aplicación para un gimnasio local. Un juego basado en mi ciudad natal. Una aplicación web para alzar nuestra voz y algunas experiencias crypto.",
    'Mi CV',
  ],
  French: [
    "Salut, mon nom est",
    "Jeune entrepreneur en technologie.",
    "Une application pour une salle de gym locale. Un jeu basé dans ma ville natale. Une application web pour faire entendre notre voix et des expériences Crypto.",
    'Mon résumé',
  ],
};

export default function Header({ language }) {
  return (
    <div id='green' className="flex flex-col-reverse md:flex-row items-center justify-between">
      <div className="flex-col text-left md:mb-16 space-y-3 md:w-3/5 z-10 md:-mr-20">
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
        <div className="leading-none md:leading-snug">
          <div className={styles.outer}>
            <h2 >{texts[language][1]}</h2>
            <div className={styles.inner}>
              <h2 className='text-palette-grey-blue'>{texts[language][1]}</h2>
            </div>
          </div>
          <div className={styles.fadeIn}>
            <p className="py-2">{texts[language][2]}</p>
          </div>
        </div>
        <div className={styles.fadeIn}>
          <a href="https://drive.google.com/file/d/1payP2JuK5lVdE2uI_VvmXuxWXmL9TEc4/view?usp=sharing" target="_blank" rel="noreferrer" className="action-btn">{texts[language][3]}</a>
        </div>
      </div>
      <div className="relative mb-10 w-5/6 md:mb-0 md:w-3/6">
        <div className={styles.backgroundImg} />
        <Image priority className="rounded" src="/images/header.jpg" width={582} height={436} alt="header_img" />
      </div>
    </div>
  );
}
