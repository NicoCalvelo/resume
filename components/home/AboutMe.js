import Image from "next/image";
import { useEffect } from "react";
import styles from "./about.module.scss";

const frameworks = ["Javascript", "React", "Next.js", "Flutter", "Unity3D", "C#", "CSS", "Tailwind"];

export default function AboutMe({ language }) {
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
    observer.observe(document.getElementById("h3"));
  }, []);

  return (
    <>
      <div className="h-36" />
      <div className="flex-col space-y-10 my-36">
        <div id="h3" className="flex flex-row items-center space-x-4 px-4">
          <h3>About me</h3>
          <div className="h-0.25 flex-grow bg-palette-orange" />
        </div>
        <div className="flex flex-row px-6 items-center justify-evenly">
          <div className="flex px-16 relative justify-end w-2/4">
            <div className="absolute max-w-xs hover:scale-110 hover:bg-palette-orange hover:bg-opacity-20 transition duration-500 ease-in-out bottom-6 top-8 right-20 left-8 border border-palette-orange rounded" />
            <Image
              priority
              className="rounded max-w-xs hover:scale-110 transition duration-500 ease-in-out"
              src={"/images/fotixo.jpg"}
              width={375}
              height={500}
              alt="fotixo"
            />
          </div>
          <div className="flex w-2/4 flex-col space-y-4 ">
            <div className="leading-snug space-y-4">
              <h2>I’m developing as a product manager.</h2>
              <p>
                An app for a local gym. A mobile game based in my hometown. A web app to change how we communicate and
                An app for a local gym. A mobile game based in my hometown. A web app to change how we communicate and
                some An app for a local gym. A mobile game based in my hometown. A web app to change how we communicate
                and some
              </p>
              <p>
                An app for a local gym. A mobile game based in my hometown. A web app to change how we communicate and
                some An app for a local gym. A mobile game based in my hometown. A web app to change how we communicate
                and some
              </p>
              <p>
                crypto experiences.An app for a local gym. A mobile game based in my hometown. A web app to change how
                we communicate and some crypto experiences. An app for a local gym. A mobile game based in my hometown.
                A web app to change how we communicate and some crypto experiences.
              </p>
              <ul className="grid leading-snug text-sm font-bold tracking-wider gap-2 grid-cols-3">
                {frameworks.map((e) => {
                  return (
                    <li id={frameworks.indexOf(e).toString()} className="flex flex-row items-center space-x-2">
                      <svg width="7" height="9" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.375 11.5L0.624999 22.3253L0.625 0.674682L19.375 11.5Z" fill="#EB784B" />
                      </svg>
                      <div>{e}</div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


