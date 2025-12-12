'use client';

import ServicesCarousel from '@/components/ServicesCarousel';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './css/ServicesSection.module.css';

export default function ServicesSection() {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <ScrollReveal delay="0.1s">
          <div className={styles.servicesHeader}>
            <h2 className={styles.sectionTitle}>Our Services</h2>
            <p className={styles.sectionSubtitle}>
              Our services offering ranges from worship to community outreach.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay="0.2s">
          <div className={styles.carouselWrapper}>
            <ServicesCarousel />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
