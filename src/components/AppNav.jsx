import React from 'react'
import { NavLink } from 'react-router-dom'
import   './AppNav.css';

export default function AppNav() {
  return (
    <div className='flex justify-center'>
        <ul className='flex py-2 overflow-hidden rounded-lg app-nav'>
            <li>    
                <NavLink to="cities"  className={`px-4 py-2 bg-slate-500  `}>CITIES</NavLink>
            </li>
            <li>
                <NavLink to="countries"  className={`px-4 py-2 bg-slate-500 `}>COUNTRIES</NavLink>
            </li>
        </ul>
    </div>
  )
}
