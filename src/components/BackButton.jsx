import React from 'react'
import {useNavigate} from 'react-router-dom';
export default function BackButton() {
    const navigate = useNavigate()
  return (
        <button className='px-3 py-1 border rounded-md w-fit' onClick={() =>  navigate(-1)}>
            &larr; Back
        </button>
  )
}
