
import React from 'react'
import img from '../assets/home/homeheader.jpg'
const Header = () => {
    return (
      <>
      <div className="hero h-[57vh] "  style={{backgroundImage: 'linear-gradient(to left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 60%),url(https://img.freepik.com/free-photo/person-taking-care-office-cleaning_23-2149374423.jpg?w=996)'} }>
      <div className="hero-overlay "></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-white text-5xl font-bold">Your trusted partner in cleaning services</h1>
        </div>
      </div>
    </div>
    </>
    )
}

export default Header