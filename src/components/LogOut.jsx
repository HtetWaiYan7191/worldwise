import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import {useNavigate} from 'react-router-dom'

export default function LogOut() {
    const {currentUser, logout} = useAuth();
    const navigate = useNavigate();
    const handleLogOut = async (e) => {
        e.preventDefault();
        const res =await logout();
        if(res) {
            navigate('/')
        }
    }
  return (
    <div className='absolute flex items-center  top-10 right-5 z-[1000] bg-gray-700 px-6 py-3 rounded-md logout-container'>
        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='object-cover w-10 h-10 rounded-full me-4' alt="" /> 
        Welcome,
        <span className='capitalize me-4'>{currentUser?.email.split('@')[0]}</span>
        <button onClick={handleLogOut} className='px-3 py-1 bg-gray-600 text-white/90'>LOGOUT</button>
    </div>
  )
}
