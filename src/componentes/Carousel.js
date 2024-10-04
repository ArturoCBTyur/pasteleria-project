import React, { useState, useEffect, useCallback } from "react";
import '../estilos/Carousel.css';
import BANNER1 from '../img/BANNER1.png';
import BANNER2 from '../img/BANNER2.png';
import BANNER3 from '../img/BANNER3.png';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [BANNER1, BANNER2, BANNER3];
  const totalSlides = slides.length;

  const showSlide = (index) => {
    if (index >= totalSlides) {
      setCurrentIndex(0);
    } else if (index < 0) {
      setCurrentIndex(totalSlides - 1);
    } else {
      setCurrentIndex(index);
    }
  };

  const moveSlide = useCallback(
    (direction) => {
      showSlide(currentIndex + direction);
    },
    [currentIndex]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      moveSlide(1);
    }, 3000);
    return () => clearInterval(interval);
  }, [moveSlide]);

  return (
    <div className="carousel">
      <div className="carousel-container">
        <img
          className="carousel-slide"
          src={slides[currentIndex]}
          alt={`Postre ${currentIndex + 1}`}
        />
      </div>
      <button className="prev" onClick={() => moveSlide(-1)}>
        &#10094;
      </button>
      <button className="next" onClick={() => moveSlide(1)}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
