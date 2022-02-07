//Language selected could be English, Spanish or French
export default function Language({ selected, onSelect }) {
  const classSelected = "p-2 font-semibold";
  const classDefault = "p-2 font-light";

  return (
    <div className="flex flex-row items-center justify-center text-sm space-x-2 h-6 my-8">
      <textbtn
        onClick={() => {
          if (selected != "English") onSelect("English");
        }}
        className={selected == "English" ? classSelected : classDefault}
      >
        English
      </textbtn>
      <div className="bg-palette-grey-blue w-0.25 h-full" />
      <textbtn
        onClick={() => {
          if (selected != "Spanish") onSelect("Spanish");
        }}
        className={selected == "Spanish" ? classSelected : classDefault}
      >
        Español
      </textbtn>
      <div className="bg-palette-grey-blue w-0.25 h-full" />
      <textbtn
        onClick={() => {
          if (selected != "French") onSelect("French");
        }}
        className={selected == "French" ? classSelected : classDefault}
      >
        Français
      </textbtn>
    </div>
  );
}
