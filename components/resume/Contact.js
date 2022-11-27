import { useEffect } from "react";
import { AppearTitle } from "../texts/Titles";

const texts = {
  English: ["Contact", "Designed & Built by Nicolás Calvelo"],
  Spanish: ["Contacto", "Diseñado y Construido por Nicolás Calvelo"],
  French: ["Contact", "Conçu et construit par Nicolás Calvelo"],
};

export default function Contact({ language = "English" }) {
  return (
    <>
      <div className="h-16 md:h-64 w-full"></div>
      <div className="flex flex-col max-w-7xl px-10 mx-auto py-20 space-y-10">
        <AppearTitle
          id={"title_contact"}
          color={"#DFDFDF"}
          title={"CONTACT"}
          rigthLine={false}
          leftLine={true}
        />
        <div id="grey" className="flex flex-col md:flex-row md:px-10 h-48">
          <div className="flex flex-col m-2 space-y-5 justify-center items-center flex-grow border px-2.5 pt-5 pb-4 border-palette-grey rounded hover:pb-6 md:hover:-mb-4 hover:mt-0 hover:shadow-2xl transition-all duration-300">
            <svg
              width="36"
              height="30"
              viewBox="0 0 26 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.125 5.16699L11.6595 11.5233C12.4712 12.0645 13.5288 12.0645 14.3405 11.5233L23.875 5.16699M4.54167 18.4587H21.4583C22.793 18.4587 23.875 17.3767 23.875 16.042V3.95866C23.875 2.62397 22.793 1.54199 21.4583 1.54199H4.54167C3.20698 1.54199 2.125 2.62397 2.125 3.95866V16.042C2.125 17.3767 3.20698 18.4587 4.54167 18.4587Z"
                stroke="#DFDFDF"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="text-sm text-center text-palette-grey">
              dia.calvelo.nicolas@gmail.com
            </div>
          </div>
          <div className="flex flex-col m-2 space-y-5 justify-center items-center flex-grow border px-2.5 pt-5 pb-4 border-palette-grey rounded hover:pb-6 md:hover:-mb-4 hover:mt-4 md:hover:mt-0 hover:shadow-2xl transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill="#DFDFDF"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
            </svg>
            <div className="text-sm text-center text-palette-grey">
              t.me/nicocalvelo
            </div>
          </div>
        </div>
        <div className="mx-auto pt-14 pb-4 text-center text-xs text-palette-grey text-opacity-50">
          {texts[language][1]}
        </div>
      </div>
    </>
  );
}
