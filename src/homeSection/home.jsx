import React from 'react'
import Hero from './hero'
import AdvertSection from './advertSection'
import AvengersSection from './avengersSection'
import Latest from './latest'

const Home = () => {
  return (
    <div>
    <Hero/>
    <AdvertSection/>
    <AvengersSection/>
    <Latest/>
    </div>
  )
}

export default Home