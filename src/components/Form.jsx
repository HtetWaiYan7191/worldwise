import React, { useEffect, useReducer, useState } from "react";
import Button from "./Button";
import BackButton from "./BackButton";
import useSearchUrl from "../hooks/useSearchUrl";
import Message from "../components/Message";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useCities } from "../contexts/CitiesContext";
import { data } from "autoprefixer";
import {useNavigate} from 'react-router-dom'

function countryCodeToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());

  return String.fromCodePoint(...codePoints);
}

const initialState = {
  isLoading: false,
  errorMessage: null,
  cityName: null,
  countryName: null,
  countryCode: "",
};

const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

function reducer(state, action) {
  switch (action.type) {
    case "fetchingData":
      return {
        ...state,
        isLoading: true,
      };
    case "fetchSuccess":
      return {
        ...state,
        isLoading: true,
        cityName: action.payload.city,
        countryName: action.payload.countryName,
        countryCode: action.payload.countryCode,
        errorMessage: null,
      };
    case "noCityFound":
      return {
        ...state,
        cityName: "No City Found",
        errorMessage: action.payload,
      };
    case "loadingFalse":
      return {
        ...state,
        isLoading: false,
      };
    default:
      throw new Error("Invalid Action Type");
  }
}
export default function Form() {
  const { lat, lng } = useSearchUrl();
  const {handleAddCity} = useCities();
  const [state, dispatch] = useReducer(reducer, initialState);
  const { isLoading, errorMessage, cityName, countryName, countryCode } = state;
  const [startDate, setStartDate] = useState(new Date());
  const navigate = useNavigate();
  const [notes, setNotes] = useState("");
  useEffect(() => {
    async function fetchData() {
      try {
        dispatch({ type: "fetchingData" });
        const res = await fetch(`${BASE_URL}?latitude=${lat}&longitude=${lng}`);
        const data = await res.json();
        if (!data.city) {
          throw new Error(
            " It doesn't seem to be a city. Pleaae click somewhere else 🥲"
          );
        } else {
          dispatch({ type: "fetchSuccess", payload: data });
        }
      } catch (err) {
        dispatch({ type: "noCityFound", payload: err.message });
      } finally {
        dispatch({ type: "loadingFalse" });
      }
    }
    fetchData();
  }, [lat, lng]);

  async function createCity(e) {
    e.preventDefault();
    if(!cityName || !startDate || !notes) return

    const newCity = {
      cityName,
      country:countryName,
      emoji:countryCode,
      date:startDate,
      notes,
      position: {lat, lng}
    }
   await handleAddCity(newCity);
   navigate('/app/cities')
   
  }
  if(!lat && !lng) return <Message message="Start By Clicking somewhere on the map 🥳"/>

  if (isLoading) return <p>Loading...</p>;

  if (errorMessage) return <Message message={errorMessage} />;
  return (
    <div className="form-container w-[80%]">
      <form action="" onSubmit={createCity} className="p-8 bg-gray-700 rounded-md ">
        <div className="flex flex-col mb-4 gap-y-2">
          <label htmlFor="cityname">City Name</label>
          <div className="flex justify-between px-3 py-2 bg-gray-300 rounded-md outline-none py-2text-black">
          <input
            type="text"
            className="text-black bg-transparent active:outline-none focus-within:outline-none"
            readOnly
            value={cityName || ""}
          />
          <span className="text-black">{countryCodeToEmoji(countryCode)}</span>
          </div>
        </div>

        <div className="flex flex-col mb-6 gap-y-2">
          <label htmlFor="time">when did you go to ?</label>
          <DatePicker dateFormat="dd/MM/yyyy" className="w-full px-3 py-2 text-black rounded-md" selected={startDate} onChange={(date) => setStartDate(date) }/>
        </div>

        <div className="flex flex-col mb-6 gap-y-2">
          <label htmlFor="time">Notes about your trip</label>
          <textarea
            name=""
            id=""
            cols="10"
            rows="5"
            className="p-3 text-black bg-gray-300"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          ></textarea>
        </div>

        <div className="flex justify-between btn-container">
         <button type="submit" className="px-4 py-2 font-semibold text-black transition-all bg-green-500 rounded-lg decoration-none w-fit">
            {isLoading ? 'Loading...' : 'Add'}
         </button>
          <BackButton />
        </div>
      </form>
    </div>
  );
}
