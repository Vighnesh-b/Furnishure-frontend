import React, { useState, useEffect } from 'react';
import './ImageSlider.css';
import { slides } from './slides';

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="image-slider">
      <button className="slider-button left-button" onClick={prevSlide}>
        <span className="arrow">&#10094;</span>
      </button>
      <img
        className={`slider-image ${currentIndex === 0 ? 'fade-in' : 'fade-out'}`}
        src={slides[currentIndex]}
        alt={`slide ${currentIndex + 1}`}
      />
      <button className="slider-button right-button" onClick={nextSlide}>
        <span className="arrow">&#10095;</span>
      </button>
      <div className="dots-container">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;