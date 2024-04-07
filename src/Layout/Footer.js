import React from 'react';
import logoBlack from '../Assets/Brand/LogoBlack.png'

const Footer = () => {
  return (
    <div className='bg-base-200'>
      <footer className="footer p-10 bg-base-200 text-gray-400">
        <aside>
          <img src={logoBlack} alt="13Sb Logo" className="nav-logo px-5" width={150} />
        </aside> 
        <nav>
          <h6 className="footer-title text-yellow-400">Services</h6> 
          <p className="link link-hover">Residential Cleaning</p>
          <p className="link link-hover">Commercial Cleaning</p>
          <p className="link link-hover">Deep Cleaning</p>
          <p className="link link-hover">Carpet Cleaning</p>
        </nav> 
        <nav>
          <h6 className="footer-title text-yellow-400">Company</h6> 
          <p className="link link-hover">About Us</p>
          <p className="link link-hover">Contact</p>
          <p className="link link-hover">FAQ</p>
          <p className="link link-hover">Blog</p>
        </nav> 
        <nav>
          <h6 className="footer-title text-yellow-400">Legal</h6> 
          <p className="link link-hover">Terms of Service</p>
          <p className="link link-hover">Privacy Policy</p>
          <p className="link link-hover">Refund Policy</p>
        </nav>
      </footer>
      <div className="footer footer-center p-4 bg-base-300 text-gray-400 border-0 shadow-lg">
        <aside>
          <p>Copyright © 2024 - All rights reserved by Your Cleaning Company</p>
        </aside>
      </div>
    </div>
  );
}

export default Footer;