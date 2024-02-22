import React from 'react'
import Sidebar from '../components/Sidebar'
import Map from '../components/Map'

export default function AppLayout() {
  return (
    <section className='flex app-layout'>
      <Sidebar/>
      <Map/>
    </section>
  )
}
