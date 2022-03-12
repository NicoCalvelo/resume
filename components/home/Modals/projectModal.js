import { useEffect, useState, useCallback } from "react";
import styles from "./projectsModal.module.scss";

export function openProjectModal(displayProject) {
  toDisplay = displayProject;
  refresh(toDisplay);
  document.getElementById(displayProject).classList.remove(["hidden"]);
  document.getElementById("projectModal").classList.remove(["hidden"]);
  document.getElementById("mainDiv").classList.add(["overflow-y-hidden"]);
}

var toDisplay = "";
var refresh;

export default function ProjectModal({ language }) {
  const [title, setTitle] = useState('');

  refresh = (t) =>{
    setTitle(t);
  }

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
      document.getElementById("mainDiv").classList.remove(["overflow-y-hidden"]);
    }
  }, []);

  return (
    <div
      id="projectModal"
      onClick={(e) => handleClose(e)}
      className="fixed top-0 bottom-0 left-0 w-full h-screen bg-gray-800 bg-opacity-30 text-palette-grey-blue z-50 hidden"
    >
      <div className={styles.modal}>
        <div className="flex flex-row items-center justify-between p-4 border-b border-gray-700 rounded-t-md">
          <h2>{title}</h2>
          <button onClick={() => handleClose('closeButton')}>
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
    <div id="Crypto Towers" className="p-4 overflow-y-scroll hidden">
      <p>
        This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to
        demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes
        longer than the predefined max-height of modal, content will be cropped and scrollable within the modal.
      </p>
      <br />
      <p>
        This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to
        demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes
        longer than the predefined max-height of modal, content will be cropped and scrollable within the modal.
      </p>
      <br />
      <p>
        This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to
        demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes
        longer than the predefined max-height of modal, content will be cropped and scrollable within the modal.
      </p>
      <br />
      <p>
        This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to
        demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes
        longer than the predefined max-height of modal, content will be cropped and scrollable within the modal.
      </p>
      <br />
      <p>
        This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to
        demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes
        longer than the predefined max-height of modal, content will be cropped and scrollable within the modal.
      </p>
      <br />
      <p>
        This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to
        demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes
        longer than the predefined max-height of modal, content will be cropped and scrollable within the modal.
      </p>
      <br />
      <p>This content should appear at the bottom after you scroll.</p>
    </div>
  );
}
export function TradingBotProject({}) {
  return (
    <div id="Trading Bot" className="flex-grow p-4  hidden">
      <p>This content should appear at the bottom after you scroll.</p>
    </div>
  );
}
export function EndeavorProject({}) {
  return (
    <div id="Endeavor Miami" className="flex-grow p-4  hidden">
      <p>This content should appear at the bottom after you scroll.</p>
    </div>
  );
}
export function TeBuscoProject({}) {
  return (
    <div id="Te Busco" className="flex-grow p-4  hidden">
      <p>This content should appear at the bottom after you scroll.</p>
    </div>
  );
}