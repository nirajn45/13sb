import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logoBlack from '../Assets/Brand/LogoBlack.png'
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-white p-2">
        <div className="container mx-auto flex justify-between items-center lg:px-11">
          <div>
            <Link to="/" className="text-black text-lg font-semibold ">
              <img src={logoBlack} alt="TechLearns Logo" className="nav-logo w-11  " />
            </Link>
          </div>

          <div className="hidden md:flex space-x-9 items-center">
            <NavLink to="/about" className="text-black menu-link " activeClassName="font-bold  ">
              About Us
            </NavLink>
            <NavLink to="/why-us" className="text-black menu-link " activeClassName="font-bold">
              Why Us
            </NavLink>
            <NavLink to="/contribute-with-us" className="text-black menu-link " activeClassName="font-bold">
              Contribute With Us
            </NavLink>
            
            
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-black focus:outline-none duration-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-gray-800 bg-opacity-100 z-50 duration-500">
          <div className="flex justify-between p-4">
            <img src={logoBlack} alt="" srcset="" className='nav-logo w-10' />
            <button onClick={toggleMenu} className="text-white duration-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div className="flex p-4 h-fit">
            <div className="flex flex-col space-y-4 text-white">
              <NavLink
                to="/"
                onClick={toggleMenu}
                className="text-xl font-bold"
                activeClassName="underline"
              >
                Home
              </NavLink>
              <NavLink
                to="/about-us"
                onClick={toggleMenu}
                activeClassName="underline"
              >
                About Us
              </NavLink>
              <NavLink
                to="/students"
                onClick={toggleMenu}
                activeClassName="underline"
              >
                Students
              </NavLink>
              
             
             
              <NavLink
                to="/contact"
                onClick={toggleMenu}
                activeClassName="underline"
              >
                Contact Us
              </NavLink>
            </div>
          </div>
        </div>
      )}

    </>
  );
}

export default Navbar