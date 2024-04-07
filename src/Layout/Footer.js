import React from 'react';

const Footer = () => {
  return (
    <div className='bg-base-200'>
      <footer className="footer p-10 bg-base-200 text-gray-400">
        <aside>
          <img src="https://techlearnsacademy.com/static/media/TechLearns.b6ba781c0c679d609b3e.png" alt="TechLearns Logo" className="nav-logo" width={150} />
        </aside> 
        <nav>
          <h6 className="footer-title text-yellow-500">Services</h6> 
          <p className="link link-hover">Residential Cleaning</p>
          <p className="link link-hover">Commercial Cleaning</p>
          <p className="link link-hover">Deep Cleaning</p>
          <p className="link link-hover">Carpet Cleaning</p>
        </nav> 
        <nav>
          <h6 className="footer-title text-yellow-500">Company</h6> 
          <p className="link link-hover">About Us</p>
          <p className="link link-hover">Contact</p>
          <p className="link link-hover">FAQ</p>
          <p className="link link-hover">Blog</p>
        </nav> 
        <nav>
          <h6 className="footer-title text-yellow-500">Legal</h6> 
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
