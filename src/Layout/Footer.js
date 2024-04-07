import React from 'react'

const Footer = () => {
  return (
    <div className='bg-base-200 '>
      <footer className="footer p-10 bg-base-200 text-gray-400  ">
  <aside>
  <img src="https://techlearnsacademy.com/static/media/TechLearns.b6ba781c0c679d609b3e.png" alt="TechLearns Logo" className="nav-logo" width ={150} />
  </aside> 
  <nav>
    <h6 className="footer-title text-yellow-500 ">Services</h6> 
    <p className="link link-hover">Branding</p>
    <p className="link link-hover">Design</p>
    <p className="link link-hover">Marketing</p>
    <p className="link link-hover">Advertisement</p>
  </nav> 
  <nav>
    <h6 className="footer-title text-yellow-500">Company</h6> 
    <p className="link link-hover">About us</p>
    <p className="link link-hover">Contact</p>
    <p className="link link-hover">Jobs</p>
    <p className="link link-hover">Press kit</p>
  </nav> 
  <nav>
    <h6 className="footer-title text-yellow-500">Legal</h6> 
    <p className="link link-hover">Terms of use</p>
    <p className="link link-hover">Privacy policy</p>
    <p className="link link-hover">Cookie policy</p>
  </nav>
</footer>
<div className="footer footer-center p-4 bg-base-300 text-gray-400  border-0 shadow-lg">
  <aside>
    <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
  </aside>
</div>
    </div>
  )
}

export default Footer
