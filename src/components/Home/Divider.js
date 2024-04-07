import React from 'react';
import { NavLink } from 'react-router-dom';

function Divider() {
  return (
    <div className="flex flex-col md:flex-row glass items-center">
      <div className="w-full md:w-1/2 mt-8 md:mt-0 mx-4 md:mx-8 lg:mx-24 py-6 md:py-10 ">
        <h1 className='text-2xl md:text-4xl font-black text-white mt-14 mb-8 '><span className="text-yellow-400">Experience the Power of Clean:</span> Unveiling Our Signature Cleaning Offerings</h1>
        <p className='mt-2 md:mt-4 text-gray-300 text-sm md:text-base '>
          From meticulous attention to detail to eco-friendly practices, we're dedicated to transforming your space into a pristine sanctuary. With our expert team and innovative techniques, discover unparalleled cleanliness that exceeds expectations. Trust us to unveil a new standard of cleanliness tailored to your needs.
        </p>
        <div className="flex flex-col md:flex-row mt-6 md:mt-9">
        <NavLink to="/contacts">
              <button className=" bg-yellow-400 text-white p-2 rounded-sm">
                <span className='text-black'>Book Now</span>
              </button>
            </NavLink>
        </div>
      </div>
      <div className="w-full md:w-1/2 mt-8 md:mt-0 mx-4 md:mx-8 lg:mx-14">
        <img src='https://images.squarespace-cdn.com/content/v1/552c09e0e4b04e8c94c1739c/1568749203614-LT3KAFWM3TZ5EGRFF1CF/IMG_3212.jpg?format=1500w' alt='' className='w-full h-auto'/>
      </div>
    </div>
  );
}

export default Divider;
