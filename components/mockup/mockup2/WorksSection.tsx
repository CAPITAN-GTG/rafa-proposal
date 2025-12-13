'use client';

import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './css/WorksSection.module.css';

const works = [
  {
    title: 'Communion Services',
    image: '/communion.webp',
    category: 'Worship'
  },
  {
    title: 'Church Entrance',
    image: '/door.webp',
    category: 'Welcome'
  },
  {
    title: 'Harvest Celebration',
    image: '/flower_harvest.webp',
    category: 'Events'
  },
  {
    title: 'Indoor Gatherings',
    image: '/indoor_harvest.webp',
    category: 'Fellowship'
  },
  {
    title: 'Inside Our Church',
    image: '/inside_church.webp',
    category: 'Worship'
  },
  {
    title: 'Church Exterior',
    image: '/outside_church.webp',
    category: 'Community'
  }
];

export default function WorksSection() {
  return (
    <section id="works" className={styles.works}>
      <div className={styles.container}>
        <ScrollReveal delay="0.1s">
          <div className={styles.worksHeader}>
            <h2 className={styles.sectionTitle}>Our Community in Action</h2>
            <p className={styles.sectionSubtitle}>
              See how we serve, worship, and grow together
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay="0.2s">
          <div className={styles.worksGrid}>
            {works.map((work, index) => (
              <ScrollReveal key={index} delay={`${0.3 + index * 0.05}s`}>
                <div className={styles.workCard}>
                  <div className={styles.workImageWrapper}>
                    <Image
                      src={work.image}
                      alt={work.title}
                      width={400}
                      height={300}
                      className={styles.workImage}
                    />
                    <div className={styles.workOverlay}>
                      <span className={styles.workCategory}>{work.category}</span>
                      <h3 className={styles.workTitle}>{work.title}</h3>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
