import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import styles from "./projectsModal.module.scss";

export function openProjectModal(displayProject) {
  toDisplay = displayProject;
  refresh(toDisplay);
  document.getElementById(displayProject).classList.remove(["hidden"]);
  document.getElementById("projectModal").classList.remove(["hidden"]);
  document.getElementById("main").classList.add(["overflow-y-hidden"]);
}

var toDisplay = "";
var refresh;

export default function ProjectModal({ language }) {
  const [title, setTitle] = useState("");

  refresh = (t) => {
    setTitle(t);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleClose, false);
    return () => {
      document.removeEventListener("keydown", handleClose, false);
    };
  }, []);

  const handleClose = useCallback((e) => {
    if (e == "closeButton" || e.target.id == "projectModal" || e.key === "Escape") {
      document.getElementById(toDisplay).classList.add(["hidden"]);
      document.getElementById("projectModal").classList.add(["hidden"]);
      document.getElementById("main").classList.remove(["overflow-y-hidden"]);
    }
  }, []);

  return (
    <div
      id="projectModal"
      onClick={(e) => handleClose(e)}
      className="fixed top-0 bottom-0 left-0 w-full h-screen px-3 bg-gray-800 bg-opacity-30 text-palette-grey-blue z-50 hidden"
    >
      <div className={styles.modal}>
        <div className="flex flex-row items-center justify-between p-4 border-b border-gray-700 rounded-t-md">
          <h2>{title}</h2>
          <button onClick={() => handleClose("closeButton")}>
            <svg className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <CryptoTowersProject />
        <TradingBotProject />
        <EndeavorProject />
        <TeBuscoProject />
        <div className="w-full h-16 border-t border-gray-700 rounded-b-md" />
      </div>
    </div>
  );
}

export function CryptoTowersProject({}) {
  return (
    <div id="Crypto Towers" className="flex-grow p-4 hidden">
      <div className="flex flex-col items-center space-y-10 mx-auto mt-20">
        <Image src="/images/building.svg" width={400} height={252} />
        <p className="text-center italic font-light">This section is being built</p>
      </div>
    </div>
  );
}
export function TradingBotProject({}) {
  return (
    <div id="Trading Bot" className="flex-grow p-4  hidden">
      <div className="flex flex-col items-center space-y-10 mx-auto mt-20">
        <Image src="/images/building.svg" width={400} height={252} />
        <p className="text-center italic font-light">This section is being built</p>
      </div>
    </div>
  );
}
export function EndeavorProject({}) {
  return (
    <div id="Endeavor Miami" className="flex-grow p-4  hidden">
      <div className="flex flex-col items-center space-y-10 mx-auto mt-20">
        <Image src="/images/building.svg" width={400} height={252} />
        <p className="text-center italic font-light">This section is being built</p>
      </div>
    </div>
  );
}
export function TeBuscoProject({}) {
  return (
    <div id="Te Busco" className="flex-grow p-4 overflow-y-scroll hidden">
      <div className="flex flex-col items-center space-y-10 mx-auto mt-20">
        <Image src="/images/building.svg" width={400} height={252} />
        <p className="text-center italic font-light">This section is being built</p>
      </div>
    </div>
  );
}
