import Image from "next/image";

const texts = {
  English: [
    "Hi, my name is",
    "I’m developing as a product manager.",
    "An app for a local gym. A mobile game based in my hometown. A web app to change how we communicate and some crypto experiences.",
  ],
  Spanish: [
    "Hola, me llamo",
    "Me estoy desarrollando como gerente de producto.",
    "Una aplicación para un gimnasio local. Un juego móvil basado en mi ciudad natal. Una aplicación web para cambiar la forma en que nos comunicamos y algunas experiencias crypto.",
  ],
  French: [
    "Salut, mon nom est",
    "Je me développe en tant que responsable produit.",
    "Une application pour un gymnase local. Un jeu mobile basé dans ma ville natale. Une application web pour changer la façon dont nous communiquons et certaines expériences crypto.",
  ],
};

export default function Header({ language }) {
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex-col mb-20 space-y-3 w-3/5 z-10 -mr-20">
        <div className="leading-none text-palette-green">
          <div className="font-medium text-sm">{texts[language][0]}</div>
          <h1>Nicolás Calvelo</h1>
        </div>
        <div className="leading-snug">
          <h2>{texts[language][1]}</h2>
          <p className="text-sm">{texts[language][2]}</p>
        </div>
      
      </div>
      <div className="relative w-3/6">
        <div className="mt-8 ml-4 absolute border-2 rounded border-palette-green w-full h-full" />
        <Image priority className="rounded" src="/images/header.jpg" width={582} height={436} alt="header_img" />
      </div>
    </div>
  );
}
