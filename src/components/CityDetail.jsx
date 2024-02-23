import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext";
export default function CityDetail() {
  const { getCity, isLoading, currentCity } = useCities();
  const { id } = useParams();
  const { cityName, country, emoji, date, notes, position } = currentCity;
  useEffect(() => {
    getCity(id);
  }, [id]);
  if (isLoading) return <p>Loading...</p>;
  return (
    <div className="flex flex-col px-6 py-4 w-[100%] md:w-[85%] rounded-md bg-slate-700 gap-y-6 city-detail-container">
      <div className="">
        <h2 className="text-[14px] font-semibold ">CITY NAME</h2>
        <h3 className="text-[18px]">
          {emoji} {cityName}
        </h3>
      </div>

      <div className="text-[13px] font-semibold ">
        <h2>YOU WENT TO BERLIN ON</h2>
        <h3 className="text-[20px]">{date}</h3>
      </div>

      <div className="">
        <h2 className="text-[13px] font-semibold ">YOUR NOTES</h2>
        <h3 className="text-[20px]">{notes}</h3>
        </div>

      <div className="">
        <h2 className="text-[14px] font-semibold "> LEARN MORE</h2>{" "}
        <a href="" className="text-yellow-500">{`Check out ${cityName} on Wikipedia`}</a>
      </div>
    </div>
  );
}
