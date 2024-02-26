import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/AuthContext";
import CityList from "./components/CityList";
import CityDetail from "./components/CityDetail";
import CountryList from "./components/CountryList";
import Form from "./components/Form";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import SpinnerFullPage from "./components/SpinnerFullPage";

const Product = lazy(() => import("./pages/Product"));
const Pricing = lazy(() => import("./pages/Pricing"));
const HomePage = lazy(() => import("./pages/HomePage"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const Login = lazy(() => import("./pages/Login"));
const AppLayout = lazy(() => import("./pages/AppLayout"));

// import Product from "./pages/Product";
// import Pricing from "./pages/Pricing";
// import HomePage from "./pages/HomePage";
// import PageNotFound from "./pages/PageNotFound";
// import Login from "./pages/Login";
// import AppLayout from "./pages/AppLayout";


export default function App() {
  return (
    <AuthProvider>
    <CitiesProvider>
      <BrowserRouter>
      <Suspense fallback={<SpinnerFullPage/>}>
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
        </Suspense>
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
