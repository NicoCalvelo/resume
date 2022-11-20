import { AppearTitle } from "../texts/Texts.jsx";
import { PrimaryButton } from "../Buttons.jsx";

export default function WebPages() {
  return (
    <div className="flex flex-col max-w-7xl px-16 mx-auto py-32">
      <AppearTitle
        id={"title_1"}
        color={"#EB784B"}
        subtitle="I'm specializing in"
        title={"WEB APPS"}
      />
      <div id="orange" className="flex justify-end">
        <PrimaryButton
          onClick={() => console.log("click")}
          text="looking for a web app"
          color="#EB784B"
        />
      </div>
      <div
        style={{ height: "550px" }}
        className="relative py-10 flex space-x-52 overflow-x-scroll"
      >
        <div></div>
        <div
          style={{
            backgroundImage: 'url("/images/webpages/Desktop_web01.jpeg")',
          }}
          className="rounded-lg w-2/3 h-full bg-cover"
        ></div>
        <div
          style={{
            backgroundImage: 'url("/images/webpages/Desktop_web01.jpeg")',
          }}
          className="rounded-lg w-2/3 h-full bg-cover"
        ></div>
      </div>
    </div>
  );
}
