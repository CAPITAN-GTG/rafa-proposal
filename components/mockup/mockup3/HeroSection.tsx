'use client';

import { useEffect, useState } from 'react';
import HeroVideo from '@/app/mockup/HeroVideo';
import { Play, Calendar, MapPin, ArrowDown } from 'lucide-react';
import styles from './css/HeroSection.module.css';

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.videoWrapper}>
        <HeroVideo />
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.heroContent}>
        <div className={`${styles.contentWrapper} ${loaded ? styles.visible : ''}`}>
          <div className={styles.badge}>Welcome to</div>
          <h1 className={styles.title}>
            St. Aidan's Episcopal Church
          </h1>
          <p className={styles.subtitle}>
            A welcoming community of faith in Malibu, California
          </p>
          <p className={styles.description}>
            All are welcome. Come as you are.
          </p>
          
          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <Calendar size={20} />
              <div>
                <div className={styles.infoLabel}>Service Times</div>
                <div className={styles.infoValue}>Sundays 10:00 AM</div>
              </div>
            </div>
            <div className={styles.infoItem}>
              <MapPin size={20} />
              <div>
                <div className={styles.infoLabel}>Location</div>
                <div className={styles.infoValue}>Malibu, California</div>
              </div>
            </div>
          </div>

          <div className={styles.ctaButtons}>
            <a href="#livestream" className={styles.btnPrimary}>
              <Play size={18} />
              Watch Live
            </a>
            <a href="#about" className={styles.btnSecondary}>
              Learn More
            </a>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <span>Scroll</span>
        <ArrowDown size={20} />
      </div>
    </section>
  );
}

