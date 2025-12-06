'use client';

import ServicesCarousel from '@/components/ServicesCarousel';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './css/ServicesSection.module.css';

export default function ServicesSection() {
  return (
    <div id="services" className={styles.servicesSection}>
      <div className="container">
        <div className="sixteen columns">
          <div className={styles.topText} data-scrollreveal="enter bottom and move 50px over 1s">
            <h1>services</h1>
            <div className={styles.subline}></div>
            <div className={styles.topSubtext}>Our services offering ranges from worship to community outreach.</div>
          </div>
          <div className="sixteen columns" data-scrollreveal="enter bottom and move 50px over 1s">
            <ServicesCarousel />
          </div>
        </div>
      </div>
    </div>
  );
}

