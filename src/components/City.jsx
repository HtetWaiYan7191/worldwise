import React from "react";
import { Link } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext";
export const formatDate = (date) => {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
};
export default function City({ city }) {
  const {removeCity} = useCities();
  const { emoji, date, cityName, id, position } = city;
  const { currentCity, isLoading } = useCities();
  const isActive = currentCity.id === id;

  return (
    <li>
      <Link
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
        className={`flex justify-between p-5 my-3 rounded-md border-l-sky-700  border-l-[8px] ${
          isActive && "border-sky-700 border-[4px]"
        }  bg-slate-900 ite ms-center`}
      >
        <div className="flex items-center gap-x-4">
          <span>{emoji}</span>
          <h2>{cityName}</h2>
        </div>

        <div className="flex items-center text-sm font-medium gap-x-4">
          <span>{formatDate(date)}</span>
          <button onClick={(e) => {removeCity(city.id); e.preventDefault(); }} className="w-6 h-6 text-white rounded-full hover:bg-yellow-700 bg-slate-800/90">
            {isLoading ? '...' : 'x'}
          </button>
        </div>
      </Link>
    </li>
  );
}
