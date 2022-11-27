import { AppearTitle } from "../texts/Titles.jsx";
import { PrimaryButton } from "../Buttons.jsx";
import { useEffect, useReducer } from "react";

function calculateScroll(scrollPositon, event) {
  return event.target.scrollLeft - event.target.scrollLeft * 0.2;
}

export default function WebPages() {
  const [scrollPositon, dispatchScroll] = useReducer(calculateScroll, 0);

  useEffect(() => {
    document.getElementById("slider").addEventListener("scroll", dispatchScroll, true);
    return () => {
      document.getElementById("slider").removeEventListener("scroll", dispatchScroll, true);
    };
  }, []);

  return (
    <>
      <div className="flex flex-col max-w-6xl px-16 mx-auto pt-32">
        <AppearTitle id={"title_1"} color={"#EB784B"} subtitle="I'm specializing in" title={"WEB APPS"} />
        <div id="orange" className="flex justify-end">
          <PrimaryButton onClick={() => console.log("click")} text="looking for a web app" color="#EB784B" />
        </div>
      </div>
      <div id="slider" style={{ height: "550px" }} className="relative overflow-auto w-full">
        <div
          style={{ zIndex: "40" }}
          className="absolute h-full w-full pointer-events-none uppercase "
        >
          <p
            style={{ left: 80 + scrollPositon + "px" }}
            className=" text-palette-orange text-opacity-20 relative top-20 text-5xl font-bold w-min"
          >
            Personalized
          </p>
          <p
            style={{ left: 640 + scrollPositon * 0.8 + "px" }}
            className="text-palette-orange text-opacity-40 relative top-36 text-7xl font-bold w-min"
          >
            Optimazed
          </p>
          <p
            style={{ left: 1120 + scrollPositon * 0.9 + "px" }}
            className="text-palette-orange text-opacity-30 relative top-52 text-6xl font-bold w-min"
          >
            Proactive
          </p>
          <p
            style={{top: "280px", left: 390 + scrollPositon + "px" }}
            className=" text-palette-orange text-opacity-20 relative text-5xl font-bold w-min"
          >
            Smooth
          </p>
        </div>
        <div style={{ width: "180%", zIndex: "41" }} className="relative h-full py-10 flex overflow-x-scroll">
          <div style={{ width: "10%" }} />
          <div
            style={{
              width: "30%",
              backgroundImage: 'url("/images/webpages/Desktop_web01.jpeg")',
            }}
            className="rounded-lg h-full bg-cover shadow-xl"
          ></div>
          <div style={{ width: "10%" }} />
          <div
            style={{
              width: "30%",
              backgroundImage: 'url("/images/webpages/Desktop_web01.jpeg")',
            }}
            className="rounded-lg h-full bg-cover shadow-xl"
          ></div>
          <div style={{ width: "10%" }} />
        </div>
      </div>
    </>
  );
}
