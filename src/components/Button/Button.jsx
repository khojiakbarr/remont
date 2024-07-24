import React from "react";
import "./style.css";

export default function Button({ text, px = 10, size = 12, py }) {
  return (
    <button
      className={`button text-[${size}] text-[#171b20] font-[700] px-[${px}] rounded-[4px] py-[${py}]`}
    >
      {text}
    </button>
  );
}
