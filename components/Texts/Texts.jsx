import React, { useEffect } from "react";
import styles from "./texts.module.scss";

export function AppearTitle({
  id,
  color,
  subtitle,
  title,
  leftLine = false,
  rigthLine = true,
}) {
  useEffect(() => {
    // title animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.reveal);
          setTimeout(() => {
            entry.target.classList.remove(styles.reveal);
            observer.unobserve(document.getElementById(id))
          }, 1000);
        }
      });
    });
    observer.observe(document.getElementById(id));
  }, []);

  return (
    <>
      {subtitle && (
        <h3
          style={{ color: color }}
          className="uppercase font-bold text-lg px-4"
        >
          {subtitle}
        </h3>
      )}
      <div
        style={{ color: color }}
        id={id}
        className="flex flex-row items-center space-x-4"
      >
        {leftLine && (
          <div
            style={{ backgroundColor: color }}
            className="h-0.25 flex-grow"
          />
        )}
        <h1
          style={{
            textShadow:
              "-1px -1px 0 " +
              color +
              ", 1px -1px 0 " +
              color +
              ", -1px 1px 0 " +
              color +
              ", 1px 1px 0 " +
              color +
              "",
          }}
          className="text-palette-black text-7xl"
        >
          {title}
        </h1>
        {rigthLine && (
          <div
            style={{ backgroundColor: color }}
            className="h-0.25 flex-grow"
          />
        )}
      </div>
    </>
  );
}
