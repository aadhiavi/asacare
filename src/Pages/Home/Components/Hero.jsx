import React from 'react';
import bgm from '../../../assets/asavd.mp4';
import '../Home.css'

const Hero = () => {
  return (
    <div className='hero'>
      <video src={bgm} autoPlay muted loop />
      <div className="hero-container">
        <h1>Compassionate Care, Right at Home.</h1>
        <p>ASA Home Health Care delivers quality care with compassion. We bring quality medical care into our patients’ homes and aim to make primary healthcare not only more accessible, but also more affordable and accountable to our patients’ needs.</p>
        <button>Contact</button>
      </div>
    </div>
  )
}

export default Hero;