import React from "react";
import img1 from '../assets/home/card1.jpg';
import img2 from '../assets/home/card2.jpg';
import img3 from '../assets/home/card3.jpg';

const Cards = () => {
  return (
    <div className="text-center">
      <div className="mt-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-200">Discover Our <span className="text-yellow-400">Cleaning Hacks</span></h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mt-12 mx-auto p-6 ">
        <div className="w-full md:w-1/3 lg:w-1/4 mx-4 mb-8 md:mx-6">
          <div className="card glass">
            <figure style={{ height: '200px', overflow: 'hidden' }}>
              <img src={img1} alt="Effective Stain Removal" className="w-full h-full object-cover" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-xl md:text-2xl font-semibold text-white">Effective Stain Removal</h2>
              <p className="text-sm md:text-base">Learn how to efficiently remove tough stains and keep your surfaces spotless.</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/4 mx-4 mb-8 md:mx-6">
          <div className="card glass">
            <figure style={{ height: '200px', overflow: 'hidden' }}>
              <img src={img2} alt="Organized Cleaning Schedule" className="w-full h-full object-cover" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-xl md:text-2xl font-semibold text-white">Organized Cleaning Schedule</h2>
              <p className="text-sm md:text-base">Discover how to create a cleaning schedule that fits your lifestyle and ensures your home stays tidy.</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/4 mx-4 mb-8 md:mx-6">
          <div className="card glass">
            <figure style={{ height: '200px', overflow: 'hidden' }}>
              <img src={img3} alt="Green Cleaning Solutions" className="w-full h-full object-cover" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-xl md:text-2xl font-semibold text-white">Green Cleaning Solutions</h2>
              <p className="text-sm md:text-base">Explore eco-friendly cleaning solutions to protect your family and the environment.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
