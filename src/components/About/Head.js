
import React from 'react'
import backdrop from '../assets/About/backdrop.jpg'
const Head = () => {
    return (
      <>
      <div className="hero h-[67vh] "  style={{backgroundImage: `url(${backdrop})`} }>
      <div className="hero-overlay "></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-white text-5xl font-bold">About <span className='text-yellow-400'>Us</span></h1>
        </div>
      </div>
    </div>
    </>
    )
}

export default Head