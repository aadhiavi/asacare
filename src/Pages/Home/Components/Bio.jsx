import React from 'react'
import '../Home.css'

const Bio = () => {
  return (
    <div className='main-bio'>
      <div className="bio-info">
        <h2>Multi Disciplinary Team</h2>
        <p>A comprehensive team of healthcare professionals to ensure exceptional care</p>
      </div>
      <div className='bio'>
        <div className="circle">
          <div className='slice1'></div>
          <div className='slice2'></div>
          <div className='slice3'></div>
          <div className='slice4'></div>
          <div className="mini-circle">
            <div className="center">
              <div className="center-circle">
                Your Trusted <br />Home <br /> Healthcare <br />Partner
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bio