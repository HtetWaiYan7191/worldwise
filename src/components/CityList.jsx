import React from 'react'
import City from './City'
import Message from './Message'
import { useCities } from '../contexts/CitiesContext';

export default function CityList() {
  const {cities, isLoading} = useCities();
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
