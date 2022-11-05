import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./header.module.scss";

export default function Header({}) {
  useEffect(() => {
    setTimeout(() => {
      document.getElementById("inner_title").classList = "text-palette-green";
      document.getElementById("inner_subtitle").classList = "text-palette-cyan";
      if (document.getElementById("outer_title") !== undefined) document.getElementById("outer_title").remove();
      if (document.getElementById("outer_subtitle") !== undefined) document.getElementById("outer_subtitle").remove();
    }, 8000);
  }, []);
  return (
    <div className="h-screen w-full">
      <div
        id="green"
        style={{ height: "700px" }}
        className=" mx-auto max-w-6xl flex flex-row items-center py-24 justify-between px-20 w-full"
      >
        <div className=" flex-col justify-between h-3/5 w-3/5 space-y-10">
          <div className="flex-col h-2/4 text-left space-y-3">
            <p className="text-palette-green">Hi, my name is</p>
            <div className={styles.outer}>
              <h1 id="outer_title" className="leading-9">
                Nicolás Calvelo
              </h1>
              <div id="inner_title" className={styles.name}>
                <h1 className="leading-9">Nicolás Calvelo</h1>
              </div>
            </div>
            <div className={styles.outer}>
              <h3 id="outer_subtitle" className="leading-9">
                I build things on the web
              </h3>
              <div id="inner_subtitle" className={styles.inner}>
                <h3 className="text-palette-grey-blue leading-9">I build things on the web</h3>
              </div>
            </div>
          </div>
          <MoveButtonAround />
        </div>
        <div style={{ width: "300px", height: "300px" }} className="relative mb-10">
          <div style={{ backgroundImage: `url("/images/header.jpg")` }} className={styles.image} />
          <div className={styles.backgroundImg} />
        </div>
      </div>
    </div>
  );
}

function MoveButtonAround() {
  const [position, setPosition] = useState(0);
  const cells = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

  useEffect(() => {
    for (let index = 0; index < cells.length; index++) {
      document.getElementById("cell-" + index).addEventListener("mouseenter", onHover, false);
    }
    return () => {
      for (let index = 0; index < cells.length; index++) {
        document.getElementById("cell-" + index).removeEventListener("mouseenter", onHover, false);
      }
    };
  }, []);

  useEffect(() => {
    let element = document.getElementById("button-" + position);
    element.addEventListener("mouseenter", onHover, false);
    setTimeout(() => {
      let e = document.getElementById("button-" + position);
      if (e == element) setPosition(0);
    }, 3000);
    return () => {
      element.removeEventListener("mouseenter", onHover, false);
    };
  }, [position]);

  function onHover(e) {
    let id = parseInt(e.target.id.split("-")[1]);
    if (
      id === position ||
      id === position + 1 ||
      id === position - 1 ||
      id === position + 5 ||
      id === position - 5 ||
      id === position + 6 ||
      id === position - 6 ||
      id === position + 4 ||
      id === position - 4
    ) {
      let random = Math.floor(Math.random() * (cells.length + 1));
      if (
        random === id ||
        random === id + 1 ||
        random === id - 1 ||
        random === id + 5 ||
        random === id - 5 ||
        random === id + 6 ||
        random === id - 6 ||
        random === id + 4 ||
        random === id - 4
      )
        return onHover(e);
      else {
        setPosition(random);
      }
    }
  }
  return (
    <div className={styles.fadeInButton}>
      <a
        href="/about"
        id={"button-" + position}
        style={{ top: Math.floor(position / 5) * 40 + "px", left: Math.round(position % 5) * 110 + "px" }}
        className={"action-btn-green m-0 absolute transition-all duration-300 ease-in-out z-10"}
      >
        About me
      </a>
      <div className="grid grid-cols-5 gap-0 relative">
        {cells.map((e) => (
          <div key={"cell_" + e} id={"cell-" + e} className=" w-full h-10"></div>
        ))}
      </div>
    </div>
  );
}
