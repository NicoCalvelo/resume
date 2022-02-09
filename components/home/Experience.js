import { useEffect } from "react";
import styles from './experience.module.scss';


export default function Experience({ language }) {
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
      observer.observe(document.getElementById("h3yellow"));
    }, []);
  
    return (
      <>
        <div className="h-36" />
        <div className="flex-col space-y-10 my-36">
          <div id="h3yellow" className="flex flex-row items-center space-x-4 px-4">
            <div className="h-0.25 flex-grow bg-palette-yellow" />
            <h3>Experience</h3>
          </div>
        </div>
      </>
    );
  }