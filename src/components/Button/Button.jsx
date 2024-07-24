import React from "react";
import "./style.css";

export default function Button({ text }) {
  return (
    <button className="button text-[12px] text-[#171b20] font-[700] px-[10px] rounded-[4px]">
      {text}
    </button>
  );
}
