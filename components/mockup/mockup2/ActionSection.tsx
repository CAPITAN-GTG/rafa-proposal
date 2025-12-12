'use client';

import ScrollReveal from '@/components/ScrollReveal';
import styles from './css/ActionSection.module.css';

export default function ActionSection() {
  return (
    <section className={styles.action}>
      <div className={styles.container}>
        <ScrollReveal delay="0.2s">
          <div className={styles.actionContent}>
            <h2>Ready to Join Us?</h2>
            <p>We welcome you to be part of our community</p>
            <a href="#contact" className={styles.actionButton}>
              Get In Touch
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
