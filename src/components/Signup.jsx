import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { useAuth } from "../contexts/AuthContext";

export default function Signup() {
  const { signup, signupUsers, errorMessage } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  console.log(signupUsers);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await signup(email, password);
    if(res) {
      navigate('/login')
    }
    setEmail('');
    setPassword('');
  };
  return (
    <section className="pt-32 sign-up-container">
      <div className="flex items-center justify-center sign-up-form">
        <form
          action=""
          onSubmit={handleSubmit}
          className=" bg-gray-700 w-[40%] rounded-md py-12 px-8"
        >
          <div className="flex flex-col mb-4 gap-y-2">
            <label htmlFor="email">Email address</label>
            <input
              type="text" required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 text-black bg-gray-300 rounded-md outline-none active:outline-2"
              placeholder="Email Address"
            />
          </div>

          <div className="flex flex-col mb-6 gap-y-2">
            <label htmlFor="password">Password</label>
            <input
              type="password" required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 text-black bg-gray-300 rounded-md outline-none active:outline-2"
              placeholder=" Password "
            />
          </div>

          <div className="flex items-center justify-between btn-container">
            <button
              type="submit"
              className="px-4 py-2 font-semibold transition-all bg-green-500 rounded-lg decoration-none w-fit "
            >
              Sign Up
            </button>
            <button onClick={() => navigate('/login')} className="underline text-white/90">
              Already have an account ? Log In🥳!
            </button>
          </div>
          {errorMessage && <p className="mt-4 error-message">{errorMessage}</p>}
        </form>
      </div>
    </section>
  );
}
