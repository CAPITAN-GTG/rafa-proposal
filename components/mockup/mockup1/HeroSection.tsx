'use client';

import { useEffect } from 'react';
import HeroVideo from '@/app/mockup/HeroVideo';
import styles from './css/HeroSection.module.css';

export default function HeroSection() {
  useEffect(() => {
    // Set home section height to viewport
    const home = document.getElementById('home');
    if (home) {
      const setHeight = () => {
        home.style.height = `${window.innerHeight}px`;
      };
      setHeight();
      window.addEventListener('resize', setHeight);
      return () => window.removeEventListener('resize', setHeight);
    }
  }, []);

  useEffect(() => {
    // Hero content starting animation
    const slidecontent = document.querySelector(`.${styles.slidecontent}`);
    if (slidecontent) {
      (slidecontent as HTMLElement).style.opacity = '0';
      (slidecontent as HTMLElement).style.transform = 'perspective(200px) rotateY(90deg)';
      (slidecontent as HTMLElement).style.transformOrigin = '50% 0%';
      
      setTimeout(() => {
        (slidecontent as HTMLElement).style.transition = 'all 1s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        (slidecontent as HTMLElement).style.opacity = '1';
        (slidecontent as HTMLElement).style.transform = 'perspective(200px) rotateY(0deg)';
      }, 500);
    }
  }, []);

  return (
    <div id="home" className={styles.heroSection}>
      <div style={{position: 'relative', width: '100%', height: '100%'}}>
        <HeroVideo />
        <div className={styles.justPattern}></div>
        <div className={styles.slidecontent}>
          <span className={styles.headersur}>Welcome to St. Aidan's Episcopal Church</span>
          <h1>
            <span>
              <span>Welcome Home</span>
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}

