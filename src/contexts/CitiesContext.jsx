import React, { createContext, useContext, useState, useEffect } from "react";

const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  const BASAEURL = "http://localhost:9000";

  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const response = await fetch(`${BASAEURL}/data`);
        const result = await response.json();
        console.log(result);
        setCities(result);
      } catch (err) {
        alert(err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

   async function getCity(id) {
    setIsLoading(true);
    try {
      const result = await fetch(`${BASAEURL}/data/${id}`);
      const data = await result.json();
      setCurrentCity(data);
    } catch {
      alert("An error occured while fetching the city");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CitiesContext.Provider value={{ cities, isLoading, currentCity, getCity }}>
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("CitiesContext was used outside the Cities Provider");
  return context;
}

export { CitiesProvider, useCities };
