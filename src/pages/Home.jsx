import React from 'react'
import Hero from '../components/Hero'
import LatestCollections from '../components/LatestCollections'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import Newsletter from '../components/NewLetter'
import Footer from '../components/Footer'

const Home = () => {
  return (

    <div>
      <Hero/>
      <LatestCollections/>
      <BestSeller/>
      <OurPolicy/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home
