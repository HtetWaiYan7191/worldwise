import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from './Button'

export default function Navbar() {
  return (
    <div className='navbar-container flex justify-between *:text-lg px-12 py-6 fixed top-0 left-0 w-full z-50'>
        <div>
            <NavLink to="/">Home</NavLink>
        </div>
        <ul className='flex items-center gap-x-5  *:font-semibold'>
            <li> <NavLink to="/pricing">Price</NavLink></li>
            <li><NavLink to="/product">Product</NavLink></li>
            <li><Button link="/login" text="Login"/></li>
        </ul>
    </div>
  )
}
