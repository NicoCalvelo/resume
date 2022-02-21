//Language selected could be English, Spanish or French
export default function Language({ language, onSelect }) {
  const classSelected = "p-2 font-semibold";
  const classDefault = "p-2 font-light";

  return (
    <div className="flex flex-row items-center justify-center text-xs md:text-sm space-x-2 pt-10 h-4 md:h-6">
      <textbtn
        onClick={() => {
          if (language != "English") onSelect("English");
        }}
        className={language == "English" ? classSelected : classDefault}
      >
        English
      </textbtn>
      <div className="bg-palette-grey-blue w-0.25 h-4 md:h-6" />
      <textbtn
        onClick={() => {
          if (language != "Spanish") onSelect("Spanish");
        }}
        className={language == "Spanish" ? classSelected : classDefault}
      >
        Español
      </textbtn>
      <div className="bg-palette-grey-blue w-0.25 h-4 md:h-6" />
      <textbtn
        onClick={() => {
          if (language != "French") onSelect("French");
        }}
        className={language == "French" ? classSelected : classDefault}
      >
        Français
      </textbtn>
    </div>
  );
}
