import React from "react";
import Button from "../components/Button";

export default function Login() {
  return (
    <section className="pt-32 login-container">
      <div className="flex items-center justify-center login-form">
        <form action="" className=" bg-gray-800 w-[30%] rounded-md p-8">
          <div className="flex flex-col mb-4 gap-y-2">
            <label htmlFor="email">Email address</label>
            <input type="text" className="p-2 bg-gray-500 rounded-md outline-none active:outline-2" placeholder="Email Address" />
          </div>

          <div className="flex flex-col mb-6 gap-y-2">
            <label htmlFor="password">Password</label>
            <input type="password" className="p-2 bg-gray-500 rounded-md outline-none active:outline-2" placeholder=" Password " />
          </div>

          <div className="btn-container">
            <Button>
              Login
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
