import React from "react";
import { Link } from "react-router-dom";

export default function Button({ link, text }) {
  return (
    <Link to={link} className="bg-green-500 text-black/90 transition-all w-fit px-4 py-2 rounded-lg">
      <button>{text}</button>
    </Link>
  );
}
