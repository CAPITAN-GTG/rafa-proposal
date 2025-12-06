'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ministries = [
  {
    title: 'Music Ministry',
    description: 'Join our vibrant music program! Our choir brings beautiful harmonies to our worship services, creating an atmosphere of spiritual reflection and joy.',
    details: 'All voices are welcome - no audition required. We rehearse Thursday evenings at 7:00 PM.',
  },
  {
    title: 'Outreach',
    description: 'Serve our community through various outreach programs and volunteer opportunities.',
  },
  {
    title: 'Children & Youth',
    description: 'Programs for all ages to help children and youth grow in faith and community.',
  },
  {
    title: 'Bible Study',
    description: 'Weekly study groups for deepening your understanding of Scripture and faith.',
  },
];

export default function MinistriesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % ministries.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + ministries.length) % ministries.length);
  };

  return (
    <div className="ministries-carousel">
      <div className="ministries-carousel-container">
        <button
          onClick={prevSlide}
          className="ministries-carousel-btn ministries-carousel-btn-prev"
          aria-label="Previous ministry"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="ministries-carousel-wrapper">
          <div
            className="ministries-carousel-track"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {ministries.map((ministry, index) => (
              <div key={index} className="ministries-carousel-slide">
                <div className="card ministries-card">
                  <h3 className="heading-3 mb-1">{ministry.title}</h3>
                  <div className="ministries-card-content">
                    <p className="text-medium text-medium-color mb-1">
                      {ministry.description}
                    </p>
                    {ministry.details && (
                      <p className="text-small text-light-color mb-2">
                        {ministry.details}
                      </p>
                    )}
                  </div>
                  <a href="/#" className="text-primary ministries-card-link">Learn More →</a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="ministries-carousel-btn ministries-carousel-btn-next"
          aria-label="Next ministry"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="ministries-carousel-dots">
        {ministries.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`ministries-carousel-dot ${
              index === currentIndex ? 'active' : ''
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

