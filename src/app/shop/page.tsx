import React from 'react'
import Navbar from './navbar'
import Hero from './hero'
import Filter from './filter'
import Delivery from './delivery'
import FilteredProducts from './products'

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Filter />
      <FilteredProducts />
      <Delivery/>
    </div>
  )
}

export default page
