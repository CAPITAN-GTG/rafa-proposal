'use client';

import Image from 'next/image';
import { Mail } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './css/TeamSection.module.css';

const teamMembers = [
  {
    name: 'Rev. Dr. Joyce Stickney',
    role: 'Rector',
    image: '/Joyce.webp'
  },
  {
    name: 'Ed Milkovitch',
    role: 'Associate Priest',
    image: '/aboutus_2.webp'
  },
  {
    name: 'Lauren Begert',
    role: 'Director of Campus and Community Engagement',
    image: '/aboutus_3.webp'
  },
  {
    name: 'Greg',
    role: 'Church Staff',
    image: '/greg.webp'
  }
];

export default function TeamSection() {
  return (
    <section id="team" className={styles.team}>
      <div className={styles.container}>
        <ScrollReveal delay="0.1s">
          <div className={styles.teamHeader}>
            <h2 className={styles.sectionTitle}>Meet Our Team</h2>
            <p className={styles.sectionSubtitle}>
              Dedicated leaders serving our community
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay="0.2s">
          <div className={styles.teamGrid}>
            {teamMembers.map((member, index) => (
              <ScrollReveal key={index} delay={`${0.3 + index * 0.1}s`}>
                <div className={styles.teamCard}>
                  <div className={styles.teamImageWrapper}>
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={280}
                      height={280}
                      className={styles.teamImage}
                    />
                  </div>
                  <div className={styles.teamInfo}>
                    <h3>{member.name}</h3>
                    <p className={styles.teamRole}>{member.role}</p>
                    <a href="#contact" className={styles.contactLink}>
                      <Mail size={16} />
                      <span>Contact</span>
                    </a>
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
