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
import { Navigate } from "react-router-dom";
import { CitiesProvider } from "./contexts/CitiesContext";
export default function App() {
  return (
    <CitiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/app" element={<AppLayout />}>
            <Route index element={<Navigate replace to="cities" />} />
            <Route path="cities" element={<CityList />} />
            <Route path="cities/:id" element={<CityDetail />} />
            <Route path="countries" element={<CountryList />} />
            <Route path="form" element={<Form />} />
          </Route>
          <Route
            path="/product"
            element={
              <WithNavbar>
                <Product />
              </WithNavbar>
            }
          />
          <Route
            path="/pricing"
            element={
              <WithNavbar>
                <Pricing />
              </WithNavbar>
            }
          />
          <Route
            path="/"
            element={
              <WithNavbar>
                <HomePage />
              </WithNavbar>
            }
          />
          <Route path="*" element={<PageNotFound />} />
          <Route
            path="/login"
            element={
              <WithNavbar>
                <Login />
              </WithNavbar>
            }
          />
        </Routes>
      </BrowserRouter>
    </CitiesProvider>
  );
}

function WithNavbar({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
