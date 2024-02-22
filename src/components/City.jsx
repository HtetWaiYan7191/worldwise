import React from "react";
import { Link } from "react-router-dom";

export default function City({ city }) {
  const { emoji, date, cityName, id, position } = city;

  const formatDate = (date) => {
    return new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(date));
  };
  return (
    <li>
      <Link to={`${id}?lat=${position.lat}&lng=${position.lng}`} className="flex justify-between p-5 my-3 rounded-md border-l-sky-700 border-l-[8px]  bg-slate-900 ite ms-center"> 
        <div className="flex items-center gap-x-4">
          <span>{emoji}</span>
          <h2>{cityName}</h2>
        </div>

        <div className="flex items-center text-sm font-medium gap-x-4">
          <span>{formatDate(date)}</span>
          <button className="w-6 h-6 text-white rounded-full bg-slate-800/90">
            x
          </button>
        </div>
      </Link>
    </li>
  );
}