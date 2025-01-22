'use client'
import React from 'react'
import Navbar from './navbar'
import Hero from './hero'
import Delivery from './delivery'
import FilteredProducts from './products'

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FilteredProducts />
      <Delivery/>
    </div>
  )
}

export default page
