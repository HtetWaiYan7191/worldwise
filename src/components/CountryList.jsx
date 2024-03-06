import React from "react";
import Country from "./Country";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";

export default function CountryList() {
  const {cities, isLoading} = useCities();
  if (isLoading) return <p>Loading...</p>;

  if (!cities?.length)
    return (
      <Message message=" Add your first city by clicking on a city on the map " />
    );

    const countries = cities.reduce((arr, city) => {
      // Check if the current city's country is not already present in the accumulator array
      if (!arr.some((el) => el.country === city.country)) {
          // If not present, add a new object representing the country to the accumulator array
          return [...arr, { country: city.country, emoji: city.emoji }];
      } else {
          // If already present, do not modify the accumulator array
          return arr;
      }
  }, []);
  return (
    <ul className="grid grid-cols-2 gap-6 max-h-[500px] overflow-auto">
      {countries?.map((country) => (
        <Country countryData={country} key={country.id} />
      ))}
    </ul>
  );
}
