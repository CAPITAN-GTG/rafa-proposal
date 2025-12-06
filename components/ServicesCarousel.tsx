'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Church, Users, BookOpen, Heart } from 'lucide-react';

const services = [
  {
    icon: Church,
    title: 'Worship',
    description: 'Join us every Sunday for Holy Eucharist with beautiful music. Services are available both in-person and via livestream.'
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Connect with others through our various ministries, fellowship events, and community service opportunities.'
  },
  {
    icon: BookOpen,
    title: 'Education',
    description: 'Grow in faith through Bible study, Sunday school, and educational programs for all ages.'
  },
  {
    icon: Heart,
    title: 'Outreach',
    description: 'Serve our community through various outreach programs and mission work both locally and globally.'
  }
];

export default function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <div className="services-carousel">
      <div 
        className="services-carousel-viewport"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          className="services-carousel-container"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="services-carousel-slide">
                <div className="service-item">
                  <div className="service-icon">
                    <IconComponent size={48} />
                  </div>
                  <h5>{service.title}</h5>
                  <p>{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="services-carousel-controls">
        <button
          className="services-carousel-button services-carousel-button-prev"
          onClick={prevSlide}
          aria-label="Previous service"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          className="services-carousel-button services-carousel-button-next"
          onClick={nextSlide}
          aria-label="Next service"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="services-carousel-dots">
        {services.map((_, index) => (
          <button
            key={index}
            className={`services-carousel-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to service ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
