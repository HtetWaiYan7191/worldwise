import React from 'react'
import Button from '../components/Button'

export default function Pricing() {
  return (
    <section className='pt-32'>
        <main className='w-[70%] mx-auto flex flex-row-reverse gap-x-8'>
            <img className='w-[500px]' src="https://images.unsplash.com/photo-1603671271394-058198001379?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="about" />
            <div className="flex flex-col about-product-container gap-y-6">
                <h2 className='text-3xl font-semibold'>Simple pricing just $9/month.</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci quis, temporibus necessitatibus exercitationem totam at. Deleniti quaerat, esse, illum ab quis, alias debitis reiciendis beatae illo quam enim nulla nisi!</p>
                <Button link="/app">
                  START TRACKING NOW
                </Button>
            </div>
        </main>
    </section>
  )
}
