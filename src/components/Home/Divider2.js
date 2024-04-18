import React from "react";
import { NavLink } from 'react-router-dom';
import img10 from "../assets/home/img10.jpg"
const Divider2 = () => {
  return (
    <div className="flex flex-col md:flex-row glass items-center">
      <div className="w-full md:w-1/2 mt-8 md:mt-0 mx-4 md:mx-8 lg:mx-14 ">
        <img
          src= {img10}
          alt=''
          className='w-full h-auto'
        />
      </div>
      <div className="w-full md:w-1/2 mt-8 md:mt-0 px-4 md:px-8 lg:px-24 py-6 md:py-10">
        <h1 className='text-2xl md:text-4xl font-black text-white mb-8'><span className="text-yellow-400">Unlock a Fresher Home:</span> Explore Our Premium Cleaning Solutions</h1>
        <p className='mt-2 md:mt-4 text-white text-sm md:text-base'>
        Dive into our range of cleaning services designed to give your home a pristine, refreshing ambiance. From deep cleaning to eco-friendly options, discover how we make every corner spotless.Let your space sparkle like never before with our professional cleaning services.
        </p>
        <div className="flex flex-col md:flex-row mt-6 md:mt-9">
        <NavLink to="/contacts">
              <button className=" bg-yellow-400 text-white p-2 rounded-sm">
                <span className="text-black">Book Now</span>
              </button>
            </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Divider2;
