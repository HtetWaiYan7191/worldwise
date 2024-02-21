import React from "react";
import Button from "../components/Button";

export default function Login() {
  return (
    <section className="login-container pt-32">
      <div className="login-form flex justify-center items-center">
        <form action="" className=" bg-gray-800 w-[30%] rounded-md p-8">
          <div className=" mb-4 flex flex-col gap-y-2">
            <label htmlFor="email">Email address</label>
            <input type="text" className="p-2 bg-gray-500 rounded-md outline-none  active:outline-2" placeholder="Email Address" />
          </div>

          <div className=" flex flex-col gap-y-2 mb-6">
            <label htmlFor="password">Password</label>
            <input type="password" className="p-2 bg-gray-500 rounded-md  outline-none active:outline-2" placeholder=" Password " />
          </div>

          <div className="btn-container">
            <Button text="login"/>
          </div>
        </form>
      </div>
    </section>
  );
}
