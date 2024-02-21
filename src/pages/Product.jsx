import React from 'react'

export default function Product() {
  return (
    <section className='pt-32'>
        <main className='w-[70%] mx-auto flex gap-x-8'>
            <img className='w-[500px]' src="https://images.unsplash.com/photo-1555760588-58fbd2daf943?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="about" />
            <div className="about-product-container flex flex-col gap-y-6">
                <h2 className='text-3xl font-semibold'>About WorldWide</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci quis, temporibus necessitatibus exercitationem totam at. Deleniti quaerat, esse, illum ab quis, alias debitis reiciendis beatae illo quam enim nulla nisi!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis reprehenderit dolorem odit, consequuntur maiores suscipit?</p>
            </div>
        </main>
    </section>
  )
}
