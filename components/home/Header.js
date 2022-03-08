import Image from "next/image";
import styles from "./header.module.scss";

const texts = {
  English: [
    "Hi, my name is",
    "Young tech-entrepeneur.",
    "Passionate about tech-innovation and start-ups. In search of new experiences in Europe, continue academic studies and my professional career.",
    "Download my resume",
  ],
  Spanish: [
    "Hola, me llamo",
    "Joven emprendedor en tecnología",
    "Apasionado por la innovación tecnológica y las start-ups. En busca de nuevas experiencias en Europa, asi también continuar mis estudios y mi trayectoria profesional.",
    "Descargar mi CV",
  ],
  French: [
    "Salut, mon nom est",
    "Jeune entrepreneur en technologie.",
    "Passionné par l’innovation en technologie, et à la recherche de nouvelles expériences en Europe. Je m'apprête à continuer ma formation universitaire, ainsi que mon parcours professionnel.",
    "Téléchargez mon CV",
  ],
};

export default function Header({ language }) {
  return (
    <div id="green" className="flex flex-col-reverse md:flex-row items-center justify-between md:pt-10">
      <div className="flex-col text-left md:-mr-16 md:mt-12 md:mb-16 space-y-3 md:w-4/5 z-10">
        <div className={styles.outer}>
          <h1>Nicolás Calvelo</h1>
          <div className={styles.name}>
            <h1>Nicolás Calvelo</h1>
          </div>
        </div>
        <div className={styles.outer}>
          <h2>{texts[language][1]}</h2>
          <div className={styles.inner}>
            <h2 className="text-palette-grey-blue">{texts[language][1]}</h2>
          </div>
        </div>
        <div className={styles.fadeIn}>
          <p className="w-full pb-4 pr-5">{texts[language][2]}</p>
          <a
            href="https://drive.google.com/file/d/1WNBlAVMw6DmiBYXgGzJGvRs06Zsiu-v8/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="action-btn"
          >
            {texts[language][3]}
          </a>
        </div>
      </div>
      <div className="relative mb-10 w-5/6 md:mb-0 md:w-4/6">
        <div className={styles.backgroundImg} />
        <Image priority className="rounded" src="/images/header.jpg" width={582} height={436} alt="header_img" />
      </div>
    </div>
  );
}
