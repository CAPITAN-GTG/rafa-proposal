'use client';

import Image from 'next/image';
import { Calendar, MapPin, Clock } from 'lucide-react';
import styles from './css/EventsSection.module.css';

const events = [
  {
    image: '/event.webp',
    title: 'Christmas Eve Service',
    date: 'December 24, 2024',
    time: '7:00 PM',
    location: 'Main Sanctuary',
    description: 'Join us for a special Christmas Eve celebration',
  },
  {
    image: '/community_outreach.webp',
    title: 'Community Outreach',
    date: 'December 15, 2024',
    time: '2:00 PM',
    location: 'Community Center',
    description: 'Serving our local community together',
  },
  {
    image: '/choir.webp',
    title: 'Choir Concert',
    date: 'December 20, 2024',
    time: '7:30 PM',
    location: 'Main Sanctuary',
    description: 'Annual Christmas choir performance',
  },
];

export default function EventsSection() {
  return (
    <section id="events" className={styles.eventsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Upcoming Events</h2>
          <p className={styles.subtitle}>
            Join us for worship, fellowship, and community events
          </p>
        </div>

        <div className={styles.eventsGrid}>
          {events.map((event, index) => (
            <div key={index} className={styles.eventCard}>
              <div className={styles.imageWrapper}>
                <Image
                  src={event.image}
                  alt={event.title}
                  width={400}
                  height={250}
                  className={styles.image}
                />
                <div className={styles.dateBadge}>
                  <Calendar size={18} />
                  <span>{event.date}</span>
                </div>
              </div>
              <div className={styles.eventContent}>
                <h3 className={styles.eventTitle}>{event.title}</h3>
                <p className={styles.eventDescription}>{event.description}</p>
                <div className={styles.eventInfo}>
                  <div className={styles.infoItem}>
                    <Clock size={16} />
                    <span>{event.time}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <MapPin size={16} />
                    <span>{event.location}</span>
                  </div>
                </div>
                <a href="#contact" className={styles.eventButton}>
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

