import React from 'react';
import img from '../assets/home/img.jpg';

const Header = () => {
  return (
    <div className="hero h-[67vh] relative" style={{backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url(${img})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
      <div className="hero-content text-center text-neutral-content">
        <div className="">
          <h1 className="mb-5 text-white text-5xl font-bold ">Your trusted <span className='text-yellow-400'>partner in cleaning</span> services</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;


