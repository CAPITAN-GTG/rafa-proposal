'use client';

import Image from 'next/image';
import { Mail } from 'lucide-react';
import styles from './css/TeamSection.module.css';

const teamMembers = [
  {
    name: 'Rev. Dr. Joyce Stickney',
    role: 'Rector',
    image: '/aboutus_1.webp'
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
    name: 'Greg Whitmore',
    role: 'Music Director',
    image: '/greg.webp'
  }
];

export default function TeamSection() {
  return (
    <section id="team" className={styles.teamSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Meet Our Team</h2>
          <p className={styles.subtitle}>
            Dedicated leaders serving our community
          </p>
        </div>

        <div className={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <div key={index} className={styles.teamCard}>
              <div className={styles.imageWrapper}>
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={300}
                  className={styles.image}
                />
              </div>
              <div className={styles.teamInfo}>
                <h3 className={styles.teamName}>{member.name}</h3>
                <p className={styles.teamRole}>{member.role}</p>
                <a href="#contact" className={styles.contactLink}>
                  <Mail size={16} />
                  <span>Contact</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

