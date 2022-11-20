import Image from "next/image";
import Link from "next/link";
import styles from "./navBar.module.scss";
import { useEffect, useState } from "react";
//
export default function NavBar({ color }) {
  return (
    <div className="max-w-6xl mx-auto">
      <nav
        style={{ border: "1px solid " + color }}
        className={
          "fixed shadow-xl backdrop-blur-lg top-4 z-50 transition-all ease-in-out duration-500 delay-300 py-3 rounded-full flex flex-row space-x-20 px-6"
        }
      >
        <Link href="/" passHref>
          <svg
            className="cursor-pointer"
            width="23.06"
            height="30"
            viewBox="0 0 56 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="transition-all duration-500"
              d="M52.8184 69.785H35.0374L21.4353 53.9519V0.143459L52.8184 69.785Z"
              fill={color}
              opacity={0.5}
            />
            <path
              className="transition-all duration-500"
              d="M0.736328 0H21.4353V67.4194H16.7678V58.5634H13.7239V67.4194H0.736328V0Z"
              fill={color}
            />
            <path
              className="transition-all duration-500"
              d="M55.7363 71.5592H35.0374L35.0374 3.54839L39.7048 3.54839V24.8387H42.7488V3.54839L55.7363 3.54839L55.7363 71.5592Z"
              fill={color}
            />
          </svg>
        </Link>
        <div className="flex flex-row text-xs justify-evenly items-center space-x-4">
          <textbtn
            onClick={() => {
              scrollTo("orange");
            }}
          >
            About me
          </textbtn>
          <div
            className={
              "w-1 h-1 transition-all duration-500 rounded-full " +
              (color == "#2FEB98"
                ? "bg-palette-green"
                : color == "#EB784B"
                ? "bg-palette-orange"
                : color == "#FFEC40"
                ? "bg-palette-yellow"
                : color == "#EB2FA0"
                ? "bg-palette-purple"
                : "bg-palette-grey")
            }
          />
          <textbtn
            onClick={() => {
              scrollTo("yellow");
            }}
          >
            Projects
          </textbtn>
          <div
            className={
              "w-1 h-1 transition-all duration-500 rounded-full " +
              (color == "#2FEB98"
                ? "bg-palette-green"
                : color == "#EB784B"
                ? "bg-palette-orange"
                : color == "#FFEC40"
                ? "bg-palette-yellow"
                : color == "#EB2FA0"
                ? "bg-palette-purple"
                : "bg-palette-grey")
            }
          />
          <textbtn
            onClick={() => {
              scrollTo("purple");
            }}
          >
            Contact me
          </textbtn>
        </div>
      </nav>
    </div>
  );
}
