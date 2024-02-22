import React from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'

export default function Map() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get('lat')
  const lng = searchParams.get('lng')
  return (
    <div className='flex-1 bg-gray-600 map-container'>
        <h1>{lat} {lng}</h1>
        <button className='p-4 m-5 bg-blue-600' onClick={() => navigate('form')}>
          show form
        </button>

        <button className='p-4 m-5 bg-blue-600' onClick={() => setSearchParams({lat: 123, lng: 345})}>
          change position
        </button>
    </div>
  )
}
