import React from "react";
import { Link } from "react-router-dom";

export default function Button({ link, children, onClick, customStyle }) {
  return (
    <Link to={link}  className={`px-4 py-2 decoration-none font-semibold transition-all bg-green-500 rounded-lg  w-fit ${customStyle}`}>
      <button className="text-black/90" onClick={onClick}>{children}</button>
    </Link>
  );
}
