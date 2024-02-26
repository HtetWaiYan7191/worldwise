import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Logo() {
  return (
        <NavLink to="/" className='flex items-center logo gap-x-2'>
            <img src="https://plus.unsplash.com/premium_photo-1661914978519-52a11fe159a7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="logo" className='object-cover w-10 h-10 rounded-full' />
            <span>WorldWise</span>
        </NavLink>
  )
}
