import React from 'react'

export default function Country({countryData}) {
    const {country, emoji} = countryData;

  return (
    <li className='flex flex-col py-3 border-l-sky-700 border-l-[8px] px-12 my-3 *:text-center rounded-md y-4 gap- bg-slate-900'>
        <span>{emoji}</span>
        <span className='font-semibold'>{country}</span>
    </li>
  )
}
