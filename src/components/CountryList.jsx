import React from "react";
import Country from "./Country";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";

export default function CountryList() {
  const {cities, isLoading} = useCities();
  console.log(cities);
  if (isLoading) return <p>Loading...</p>;

  if (!cities?.length)
    return (
      <Message message=" Add your first city by clicking on a city on the map " />
    );

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.city).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);
  return (
    <ul className="grid grid-cols-2 gap-6 max-h-[500px] overflow-auto">
      {countries?.map((country) => (
        <Country countryData={country} key={country.country} />
      ))}
    </ul>
  );
}
