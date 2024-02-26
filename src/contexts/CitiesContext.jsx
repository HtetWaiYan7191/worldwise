import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useReducer,
  useCallback,
} from "react";

const CitiesContext = createContext();

const initialState = {
  cities: [],
  isLoading: false,
  currentCity: {},
  errorMessage: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "fetchLoading":
      return {
        ...state,
        isLoading: true,
      };
    case "loaded":
      return {
        ...state,
        isLoading: false,
      };
    case "fetchCitySuccess":
      return {
        ...state,
        currentCity: action.payload,
      }
    case "fetchSuccess":
      return {
        ...state,
        cities: action.payload,
      };
    case "fetchError":
      return {
        ...state,
        errorMessage: action.payload,
      };
    case 'addCity':
      return {
        ...state,
        cities:[...state.cities, action.payload]
      }
    case 'removeCity':
      return {
        ...state,
        cities: state.cities.filter(city => city.id !== action.payload)
      }
    default:
      throw new Error("default case ");
  }
}
function CitiesProvider({ children }) {
  const [{ cities, isLoading, currentCity, errorMessage }, dispatch] =
    useReducer(reducer, initialState);
  const BASAEURL = "http://localhost:9000";

  useEffect(() => {
    async function fetchCities() {
      try {
        dispatch({ type: "fetchLoading" });
        const response = await fetch(`${BASAEURL}/data`);
        const result = await response.json();
        dispatch({ type: "fetchSuccess", payload: result });
      } catch (err) {
        dispatch({ type: "fetchError", payload: err.message });
      } finally {
        dispatch({ type: "loaded" });
      }
    }
    fetchCities();
  }, []);

 const getCity = useCallback(
  async function getCity(id) {
    if(Number(id) === currentCity.id) return;
    dispatch({ type: "fetchLoading" });
    try {
      const result = await fetch(`${BASAEURL}/data/${id}`);
      const data = await result.json();
      dispatch({ type: "fetchCitySuccess", payload: data });
    } catch (err) {
      dispatch({ type: "fetchError", payload: err.message });
      alert("An error occured while fetching the city");
    } finally {
      dispatch({ type: "loaded" });
    }
  }, [currentCity.id]);

  async function handleAddCity(newCity) {
    try {
      const res = await fetch(`${BASAEURL}/data/`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      dispatch({type: 'addCity', payload: data})
    } catch (err) {
      alert(err);
    }
  }

  async function removeCity(id) {
    try {
      const res = await fetch(`${BASAEURL}/data/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      dispatch({type: 'removeCity', payload: id});
      // setCities((cities) => cities.filter((city) => city.id !== id));
    } catch (err) {
      alert("There was an error deleting city.");
    } finally {
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
        handleAddCity,
        removeCity,
      }}
    >
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
