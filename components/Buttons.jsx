import React from "react";

export function PrimaryButton({ color = "green", onClick, text }) {
  return (
    <button
      onClick={onClick}
      style={{ color: color, borderColor: color }}
      className="border text-sm shadow-lg text-center hover:font-medium rounded py-1.5 px-6 cursor-pointer focus:outline-none uppercase tracking-wide appearance-none"
    >
      {text}
    </button>
  );
}
