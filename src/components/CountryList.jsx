import React from "react";
import Country from "./Country";
import Message from "./Message";

export default function CountryList({ cities, isLoading }) {
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
    <ul className="grid grid-cols-2 gap-6">
      {countries?.map((country) => (
        <Country countryData={country} key={country.country} />
      ))}
    </ul>
  );
}
