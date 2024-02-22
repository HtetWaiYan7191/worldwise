import React from "react";
import { Link } from "react-router-dom";

export default function Button({ link, children, onClick }) {
  return (
    <Link to={link}  className="px-4 py-2 font-semibold transition-all bg-green-500 rounded-lg text-black/90 w-fit">
      <button onClick={onClick}>{children}</button>
    </Link>
  );
}
