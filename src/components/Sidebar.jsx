import React from "react";
import Logo from "./Logo";
import AppNav from "./AppNav";
import {Outlet} from 'react-router-dom'
export default function Sidebar() {
  return (
    <section className="flex-1 h-[100vh] flex flex-col justify-between py-10 px-5 bg-gray-800 side-bar">
      <div className="flex flex-col items-center gap-10">
        <Logo />
        <AppNav />
        <Outlet/>
      </div>
      <footer className="">
        <p>&copy; CopyRight {new Date().getFullYear()} by WorldWise Inc.</p>
      </footer>
    </section>
  );
}
