'use client';

import { useEffect, useState } from 'react';
import HeroVideo from '@/app/mockup/HeroVideo';
import styles from './css/HeroSection.module.css';

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroVideoWrapper}>
        <HeroVideo />
        <div className={styles.heroOverlay}></div>
      </div>
      
      <div className={styles.heroContent}>
        <div className={`${styles.heroText} ${loaded ? styles.visible : ''}`}>
          <p className={styles.heroTagline}>Welcome to</p>
          <h1 className={styles.heroTitle}>
            St. Aidan's Episcopal Church
          </h1>
          <p className={styles.heroSubtitle}>
            A welcoming community of faith in Malibu, California
          </p>
          <div className={styles.heroButtons}>
            <a href="#about" className={styles.btnPrimary}>
              Learn More
            </a>
            <a href="#contact" className={styles.btnSecondary}>
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <span>Scroll</span>
        <div className={styles.scrollArrow}></div>
      </div>
    </section>
  );
}
