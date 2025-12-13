'use client';

import Image from 'next/image';
import { Heart, Users, HandHeart } from 'lucide-react';
import styles from './css/AboutSection.module.css';

export default function AboutSection() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>About Our Church</h2>
          <p className={styles.subtitle}>
            Building community, sharing faith, serving others
          </p>
        </div>

        <div className={styles.contentGrid}>
          <div className={styles.imageCard}>
            <Image
              src="/inside_church.webp"
              alt="St. Aidan's Church Interior"
              width={600}
              height={400}
              className={styles.image}
            />
          </div>

          <div className={styles.textCard}>
            <h3 className={styles.cardTitle}>Our Story</h3>
            <p>
              St. Aidan's seeks to be the welcoming heart, hands, and voice of Christ in Malibu. 
              We respect and honor past, present, and future generations of Chumash and their 
              continued connection to this land.
            </p>
            <p>
              All are welcomed at St. Aidan's. Come as you are. We are an inclusive church where 
              people from many backgrounds have found common ground in faith, fellowship, and service.
            </p>
            <a href="#contact" className={styles.learnMoreBtn}>
              Join Our Community
            </a>
          </div>
        </div>

        <div className={styles.valuesGrid}>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>
              <Heart size={32} />
            </div>
            <h4>Compassion</h4>
            <p>We show love and care for all members of our community</p>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>
              <Users size={32} />
            </div>
            <h4>Inclusivity</h4>
            <p>Everyone is welcome regardless of background or beliefs</p>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>
              <HandHeart size={32} />
            </div>
            <h4>Service</h4>
            <p>We serve our community with dedication and purpose</p>
          </div>
        </div>
      </div>
    </section>
  );
}

