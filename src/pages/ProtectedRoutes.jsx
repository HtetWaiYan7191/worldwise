import React, { useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import {useNavigate} from 'react-router-dom'

export default function ProtectedRoutes({children}) {
    const {isLogIn} = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        if(!isLogIn) navigate('/')
    }, [isLogIn, navigate])
  return (
    isLogIn ? children : null
  )
}
