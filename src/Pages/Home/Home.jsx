import React from 'react'
import Hero from './Components/Hero'
import Bio from './Components/Bio'
import BriefServices from './Components/BriefServices'
import Slider from '../../Components/Slider/Slider'
import ContactCard from '../../Components/ContactCard/ContactCard'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Hero />
      <Bio />
      <BriefServices />
      <Slider/>
      <ContactCard/>
      <Footer/>
    </div>
  )
}

export default Home