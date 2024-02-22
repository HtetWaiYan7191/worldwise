import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import CityList from "./components/CityList";
import CityDetail from "./components/CityDetail";
import CountryList from "./components/CountryList";
import Form from "./components/Form";

export default function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const BASAEURL = 'http://localhost:9000';

  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const response = await fetch(`${BASAEURL}/data`);
        const result = await response.json();
        console.log(result);
        setCities(result)
      } catch(err) {
        alert(err)
      } finally {
        setIsLoading(false);
      }

    }
    fetchCities();
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/app" element={<AppLayout />} >
          <Route index element={<CityList cities={cities} isLoading={isLoading}/>}/>
          <Route path="cities" element={<CityList cities={cities} isLoading={isLoading}/>}/>
          <Route path="cities/:id" element={<CityDetail/>} />
          <Route path="countries" element={<CountryList cities={cities} isLoading={isLoading}/>}/>
          <Route path="form" element={<Form/>}/>
        </Route>
        <Route path="/product" element={<WithNavbar><Product /></WithNavbar>} />
        <Route path="/pricing" element={<WithNavbar><Pricing /></WithNavbar>} />
        <Route path="/" element={<WithNavbar><HomePage /></WithNavbar>} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/login" element={<WithNavbar><Login /></WithNavbar>} />
      </Routes>
    </BrowserRouter>
  );
}

function WithNavbar({children}) {
  return (
    <>
      <Navbar/>
      {children}
    </>
  )
}
