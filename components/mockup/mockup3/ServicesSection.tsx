'use client';

import { Calendar, Clock, Music, BookOpen } from 'lucide-react';
import styles from './css/ServicesSection.module.css';

const services = [
  {
    icon: Calendar,
    title: 'Sunday Service',
    time: '10:00 AM',
    description: 'Holy Eucharist with Music - Our main weekly worship service',
  },
  {
    icon: Clock,
    title: 'Evening Prayer',
    time: '6:00 PM',
    description: 'Contemplative evening worship service',
  },
  {
    icon: Music,
    title: 'Choir Practice',
    time: '7:00 PM',
    description: 'Weekly choir rehearsal (Thursdays)',
  },
  {
    icon: BookOpen,
    title: 'Bible Study',
    time: '7:00 PM',
    description: 'Midweek Bible study and fellowship (Wednesdays)',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Worship & Services</h2>
          <p className={styles.subtitle}>
            Join us for worship, fellowship, and spiritual growth
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className={styles.serviceCard}>
                <div className={styles.iconWrapper}>
                  <Icon size={28} />
                </div>
                <div className={styles.serviceContent}>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <div className={styles.serviceTime}>{service.time}</div>
                  <p className={styles.serviceDescription}>{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

