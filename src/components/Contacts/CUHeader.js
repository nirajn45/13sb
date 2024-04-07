import React from 'react'
import backdrop from '../assets/Contacts/backdrop.jpg'
const CUHeader = () => {
  return (
    <>
      <div className="hero h-[67vh] " style={{backgroundImage:`url(${backdrop})`, backgroundSize:"cover", backgroundRepeat:"no-repeat", backgroundPosition:"center center"}}  >
      <div className="hero-overlay "></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-white text-5xl font-bold">Contact <span className='text-yellow-400'>Us</span></h1>
        </div>
      </div>
    </div>
    </>
  )
}

export default CUHeader