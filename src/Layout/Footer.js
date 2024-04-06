import React from 'react'

const Footer = () => {
  return (
    <div className='bg-white'>
      <footer className="footer p-10 bg-white text-black">
  <aside>
  <img src="https://techlearnsacademy.com/static/media/TechLearns.b6ba781c0c679d609b3e.png" alt="TechLearns Logo" className="nav-logo" width ={150} />
  </aside> 
  <nav>
    <h6 className="footer-title">Services</h6> 
    <p className="link link-hover">Branding</p>
    <p className="link link-hover">Design</p>
    <p className="link link-hover">Marketing</p>
    <p className="link link-hover">Advertisement</p>
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <p className="link link-hover">About us</p>
    <p className="link link-hover">Contact</p>
    <p className="link link-hover">Jobs</p>
    <p className="link link-hover">Press kit</p>
  </nav> 
  <nav>
    <h6 className="footer-title">Legal</h6> 
    <p className="link link-hover">Terms of use</p>
    <p className="link link-hover">Privacy policy</p>
    <p className="link link-hover">Cookie policy</p>
  </nav>
</footer>
    </div>
  )
}

export default Footer
