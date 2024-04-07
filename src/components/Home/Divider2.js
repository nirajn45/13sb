import React from "react";
import { NavLink } from 'react-router-dom';
const Divider2 = () => {
  return (
    <div className="flex flex-col md:flex-row glass items-center">
      <div className="w-full md:w-1/2 mt-8 md:mt-0 mx-4 md:mx-8 lg:mx-14 ">
        <img
          src='https://plus.unsplash.com/premium_photo-1661690569941-e87b71d91dda?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2xlYW5pbmclMjBzZXJ2aWNlc3xlbnwwfHwwfHx8MA%3D%3D'
          alt=''
          className='w-full h-auto'
        />
      </div>
      <div className="w-full md:w-1/2 mt-8 md:mt-0 px-4 md:px-8 lg:px-24 py-6 md:py-10">
        <h1 className='text-2xl md:text-4xl font-black text-white mb-8'>Experience the Power of Clean: Unveiling Our Signature Cleaning Offerings</h1>
        <p className='mt-2 md:mt-4 text-white text-sm md:text-base'>
          From meticulous attention to detail to eco-friendly practices, we're dedicated to transforming your space into a pristine sanctuary. With our expert team and innovative techniques, discover unparalleled cleanliness that exceeds expectations. Trust us to unveil a new standard of cleanliness tailored to your needs.
        </p>
        <div className="flex flex-col md:flex-row mt-6 md:mt-9">
        <NavLink to="/contacts">
              <button className=" bg-yellow-600 text-white p-2 rounded-sm">
                Book Now
              </button>
            </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Divider2;
