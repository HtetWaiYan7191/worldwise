import React from 'react'
import City from './City'
import Message from './Message'

export default function CityList({cities, isLoading}) {
    if(isLoading) return <p>Loading...</p>

    if(!cities?.length) return<Message message=" Add your first city by clicking on a city on the map "/>
  return (
    <ul className='w-[80%]'>
        {
            cities?.map((city) => (
                <City city={city} key={city.id}/>
            ))
        }
    </ul>
  )
}
