import React from "react";
import style from "./HomePage.module.css";
import Button from "../components/Button";

export default function HomePage() {
  return (
    <main className={style.main}>
      <section className="h-[100%] w-[75%] mx-auto gap-y-8 flex justify-center flex-col">
        <h1 className="text-6xl font-semibold text-center  leading-[4.5rem] ">
          You travel the world. WorldWise keeps track of your adventures.
        </h1>

        <p className="text-white/80 text-xl text-center leading-9">
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </p>

        <div className="btn-container flex justify-center">
          <Button link="app" text="Start Tracking Now" />
        </div>
      </section>
    </main>
  );
}