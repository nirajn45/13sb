import React from 'react';
import img1 from '../../Assets/images.png';

const Hero = () => {
  const backgroundStyle = {
    backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 60%), url(${img1})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    textAlign: 'start',
    minHeight: '60vh', // Adjust minimum height as needed
    padding: '60px',
    color: 'white',
  };

  const titleStyle = {
    fontSize: '8vw', // Responsive font size for large screens
    marginBottom: '5px',
  };

  const contentStyle = {
    fontSize: '1.5rem', // Responsive font size for large screens
  };

  return (
    <div style={backgroundStyle}>
      <p className="section-title cera-med text-yellow-400 mb-5" style={titleStyle}>
        OUR SERVICES
      </p>
      <p className="section-content cera-light" style={contentStyle}>
        lorem ipsum dolor sit amet, con lorem ipsum dolor sit amet lorem
      </p>
    </div>
  );
}

export default Hero;
