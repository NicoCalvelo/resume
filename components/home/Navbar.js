import Image from "next/image";

const texts = {
    English: [
      "About me",
      "Experience",
      "Now",
      "Contact",
    ],
    Spanish: [
        "Sobre mi",
        "Experiencia",
        "Ahora",
        "Contacto",
    ],
    French: [
        "Sur mon",
        "Expérience",
        "Maintenant",
        "Contact",
    ],
  };

export default function NavBar({ language }) {
  return (
    <div className="flex flex-row justify-between p-4">
      <Image src="/images/logo.svg" width={32} height={32} alt="logo" />
      <div className="flex flex-row text-xs justify-evenly items-center space-x-4">
        <textbtn onClick={() => {}}>{texts[language][0]}</textbtn>
        <div className="w-1 h-1 rounded-full bg-palette-green" />
        <textbtn onClick={() => {}}>{texts[language][1]}</textbtn>
        <div className="w-1 h-1 rounded-full bg-palette-green" />
        <textbtn onClick={() => {}}>{texts[language][2]}</textbtn>
        <div className="w-1 h-1 rounded-full bg-palette-green" />
        <textbtn onClick={() => {}}>{texts[language][3]}</textbtn>
      </div>
    </div>
  );
}
