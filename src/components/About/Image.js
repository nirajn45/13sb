import React from "react";
import image1 from '../assets/About/image.png';
import image2 from '../assets/About/kitchen-corner.jpg';
import image3 from '../assets/About/unmade-bed.jpg';
import image4 from '../assets/About/image4.jpg';
import image5 from '../assets/About/image5.jpg';
import image6 from '../assets/About/image6.jpg';
import image8 from '../assets/About/images8.jpeg';


const Image = () => {
  return (
    <div>
      <div className="carousel rounded-box">
        <div className="carousel-item">
          <img
            src={image1}
            width="300px"
            alt="image1"
          />
        </div>
        <div className="carousel-item">
          <img
            src={image6}
            width="300px"
            alt="image2"
          />
        </div>
        <div className="carousel-item">
          <img
            src={image3}
            width="300px"
            alt="image3"
          />
        </div>
        <div className="carousel-item">
          <img
            src={image4}
            width="300px"
            alt="image4"
          />
          
        </div>
        <div className="carousel-item">
          <img
            src={image5}
            width="300px"
            alt="image5"
          
          />
        </div>
        <div className="carousel-item">
          <img
            src={image2}
            width="300px"
            alt="image6"
          />
         
        </div>
        <div className="carousel-item">
          <img
            src={image8}
            width="300px"
            alt="image8"
          />
        </div>
      </div>
    </div>
  );
};

export default Image;
