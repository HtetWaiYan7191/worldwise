import React, {useState} from "react";
import Button from "../components/Button";
import { useAuth } from "../contexts/AuthContext";
import {useNavigate} from 'react-router-dom';

export default function Login() {
  const { login, errorMessage, signupUsers} = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log(signupUsers);
  
  async function handleSubmit(e) {
    e.preventDefault();
   const res = await login(email, password)
   console.log(res);
    setEmail('')
    setPassword('')
    if(res) {
      navigate('/app')
    }
    setEmail('')
    setPassword('')
  }

  function handleSignUpBtn(e) {
    e.preventDefault();
    navigate('/signup')
  }
  return (
    <section className="pt-32 login-container">
      <div className="flex items-center justify-center login-form">
        <form action="" onSubmit={handleSubmit} className=" bg-gray-700 w-[45%] rounded-md py-12 px-8">
          <div className="flex flex-col mb-4 gap-y-2">
            <label htmlFor="email">Email address</label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required className="p-2 text-black bg-gray-300 rounded-md outline-none active:outline-2" placeholder="Email Address" />
          </div>

          <div className="flex flex-col mb-6 gap-y-2">
            <label htmlFor="password">Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="p-2 text-black bg-gray-300 rounded-md outline-none active:outline-2" placeholder=" Password " />
          </div>

          <div className="flex items-center justify-between btn-container">
            <button type='submit' className="px-4 py-2 font-semibold transition-all bg-green-500 rounded-lg decoration-none w-fit " >
              Login
            </button>
            <button onClick={handleSignUpBtn} className="underline text-white/90">Don't have an account ? Sign up Now 🥳!</button>
          </div>

          <p className="mt-4 error-message">
            {errorMessage}
          </p>
        </form>
      </div>
    </section>
  );
}
