'use client';

import Image from 'next/image';
import { Heart, Users, Sparkles } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './css/AboutSection.module.css';

export default function AboutSection() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <ScrollReveal delay="0.1s">
          <div className={styles.aboutHeader}>
            <h2 className={styles.sectionTitle}>About Our Church</h2>
            <p className={styles.sectionSubtitle}>
              Building community, sharing faith, serving others
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay="0.2s">
          <div className={styles.aboutContent}>
            <div className={styles.aboutImage}>
              <Image
                src="/aboutus_4.webp"
                alt="Church community"
                width={600}
                height={400}
                className={styles.image}
              />
            </div>
            
            <div className={styles.aboutText}>
              <h3>Our Story</h3>
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
        </ScrollReveal>

        <ScrollReveal delay="0.3s">
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <Heart size={36} strokeWidth={1.5} />
              </div>
              <h4>Compassion</h4>
              <p>We show love and care for all members of our community</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <Users size={36} strokeWidth={1.5} />
              </div>
              <h4>Inclusivity</h4>
              <p>Everyone is welcome regardless of background or beliefs</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <Sparkles size={36} strokeWidth={1.5} />
              </div>
              <h4>Service</h4>
              <p>We serve our community with dedication and purpose</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
