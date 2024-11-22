import React from 'react';
import './Hero.css';
import sliderImages from '../Data/SliderData';

const Hero = () => {
  return (
    <div className='hero-section'>
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          {sliderImages.map((image, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {sliderImages.map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              {/* Image */}
              <img src={image.src} className="d-block w-100" alt={image.alt} />
              
              {/* Black overlay */}
              <div className="overlay">
                {/* Dynamic Text */}
                <div className="carousel-text">
                  <h2>{image.title}</h2>
                  <p>{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <i className="bi bi-arrow-left icon"></i>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
           <i class="bi bi-arrow-right icon"></i>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
