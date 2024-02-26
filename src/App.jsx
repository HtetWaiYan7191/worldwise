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
import { AuthProvider } from "./contexts/AuthContext";
import Signup from "./components/Signup";
import ProtectedRoutes from "./pages/ProtectedRoutes";

export default function App() {
  return (
    <AuthProvider>
    <CitiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/app" element={<ProtectedRoutes><AppLayout /></ProtectedRoutes>}>
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
          <Route
            path="/signup"
            element={
              <WithNavbar>
                <Signup />
              </WithNavbar>
            }
          />
        </Routes>
      </BrowserRouter>
    </CitiesProvider>
    </AuthProvider>
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
