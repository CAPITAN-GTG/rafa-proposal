'use client';

import { useState, useEffect } from 'react';
import styles from './css/HeroSlider.module.css';

const slides = [
  {
    id: 1,
    image: '/worship_services.webp',
    title: 'Welcome',
    subtitle: 'We are NewLife church',
    description: 'NewLife is a church that believes in Jesus, a church that loves God and people. Loving God, Loving People & Serving the World.',
    buttons: [
      { text: 'ABOUT US', href: '#', style: 'filled' },
      { text: 'VISIT US', href: '#', style: 'border' }
    ]
  },
  {
    id: 2,
    image: '/choir.webp',
    title: 'Conference',
    description: 'New Life Conference is about championing the church of Jesus Christ. And together, WE are the church. It is for people of all ages who are passionate about the local church and the call of the Kingdom of God.',
    countdown: {
      date: '2025-12-31',
      time: '12:00:00'
    }
  },
  {
    id: 3,
    image: '/inside_church.webp',
    title: 'Join Us',
    description: 'Experience the love and community of NewLife Church'
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const targetDate = new Date('2025-12-31T12:00:00').getTime();
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.sliderWrap}>
      <div className={styles.sliderContainer}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className={styles.slideContent}>
              {slide.title && (
                <h1 className={styles.slideTitle}>{slide.title}</h1>
              )}
              {slide.subtitle && (
                <h2 className={styles.slideSubtitle}>{slide.subtitle}</h2>
              )}
              {slide.description && (
                <p className={styles.slideDescription}>{slide.description}</p>
              )}
              {slide.countdown && (
                <div className={styles.countdown}>
                  <div className={styles.countdownItem}>
                    <span className={styles.countdownDigits}>
                      {String(countdown.days).padStart(3, '0').split('').map((digit, i) => (
                        <span key={i}>{digit}</span>
                      ))}
                    </span>
                    <span className={styles.countdownLabel}>Days</span>
                  </div>
                  <span className={styles.countdownSeparator}>:</span>
                  <div className={styles.countdownItem}>
                    <span className={styles.countdownDigits}>
                      {String(countdown.hours).padStart(2, '0').split('').map((digit, i) => (
                        <span key={i}>{digit}</span>
                      ))}
                    </span>
                    <span className={styles.countdownLabel}>Hours</span>
                  </div>
                  <span className={styles.countdownSeparator}>:</span>
                  <div className={styles.countdownItem}>
                    <span className={styles.countdownDigits}>
                      {String(countdown.minutes).padStart(2, '0').split('').map((digit, i) => (
                        <span key={i}>{digit}</span>
                      ))}
                    </span>
                    <span className={styles.countdownLabel}>Minutes</span>
                  </div>
                  <span className={styles.countdownSeparator}>:</span>
                  <div className={styles.countdownItem}>
                    <span className={styles.countdownDigits}>
                      {String(countdown.seconds).padStart(2, '0').split('').map((digit, i) => (
                        <span key={i}>{digit}</span>
                      ))}
                    </span>
                    <span className={styles.countdownLabel}>Seconds</span>
                  </div>
                </div>
              )}
              {slide.buttons && (
                <div className={styles.slideButtons}>
                  {slide.buttons.map((button, i) => (
                    <a
                      key={i}
                      href={button.href}
                      className={`${styles.slideButton} ${button.style === 'filled' ? styles.filled : styles.border}`}
                    >
                      {button.text}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className={styles.sliderDots}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === currentSlide ? styles.active : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

