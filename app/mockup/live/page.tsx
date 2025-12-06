'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Calendar, MapPin, Clock } from 'lucide-react';
import styles from './page.module.css';

const livestreams = [
  {
    id: '0uaZ30NEHLU',
    url: 'https://www.youtube.com/watch?v=0uaZ30NEHLU',
    title: 'Sunday Morning Service',
    time: '10:00 AM',
    date: 'December 7, 2025',
    location: 'Main Sanctuary',
    description: 'Holy Eucharist with Music'
  },
  {
    id: 'h6afE0Au3-0',
    url: 'https://www.youtube.com/watch?v=h6afE0Au3-0',
    title: 'Evening Prayer Service',
    time: '6:00 PM',
    date: 'December 7, 2025',
    location: 'Chapel',
    description: 'Contemplative Evening Worship'
  },
  {
    id: 'h6afE0Au3-0',
    url: 'https://www.youtube.com/watch?v=h6afE0Au3-0',
    title: 'Midweek Service',
    time: '12:00 PM',
    date: 'December 10, 2025',
    location: 'Main Sanctuary',
    description: 'Wednesday Noon Service'
  },
  {
    id: 'h6afE0Au3-0',
    url: 'https://www.youtube.com/watch?v=h6afE0Au3-0',
    title: 'Youth Service',
    time: '5:00 PM',
    date: 'December 8, 2025',
    location: 'Youth Hall',
    description: 'Contemporary Worship for Youth'
  },
  {
    id: 'mCcXuR84Tt8',
    url: 'https://www.youtube.com/watch?v=mCcXuR84Tt8',
    title: 'Special Christmas Service',
    time: '7:00 PM',
    date: 'December 24, 2025',
    location: 'Main Sanctuary',
    description: 'Christmas Eve Celebration'
  },
  {
    id: 'd9e-Lu2laYM',
    url: 'https://www.youtube.com/watch?v=d9e-Lu2laYM',
    title: 'Sunday Afternoon Service',
    time: '2:00 PM',
    date: 'December 7, 2025',
    location: 'Main Sanctuary',
    description: 'Family-Friendly Worship'
  }
];

export default function Live() {
  return (
    <div className={styles.livePage}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.headerTitle}>
            St. Aidan's Live Streams
          </div>
          <Link href="/mockup" className={styles.backButton}>
            Back to Home
          </Link>
        </div>
      </header>

      {/* Live Stream Container */}
      <main className={styles.main}>
        <div className={styles.introCard}>
          <h1 className={styles.pageTitle}>Watch Our Services</h1>
          <div className={styles.subline}></div>
          <p className={styles.pageSubtitle}>
            Join us for worship in-person or online. All services are livestreamed and available for viewing.
          </p>
        </div>

        <div className={styles.streamsGrid}>
          {livestreams.map((stream, index) => (
            <div key={index} className={styles.streamCard}>
              <div className={styles.videoWrapper}>
                <iframe
                  src={`https://www.youtube.com/embed/${stream.id}?rel=0&modestbranding=1`}
                  title={stream.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className={styles.youtubeEmbed}
                ></iframe>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{stream.title}</h3>
                <p className={styles.cardDescription}>{stream.description}</p>
                <div className={styles.cardInfo}>
                  <div className={styles.infoItem}>
                    <Clock size={16} />
                    <span>{stream.time}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <Calendar size={16} />
                    <span>{stream.date}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <MapPin size={16} />
                    <span>{stream.location}</span>
                  </div>
                </div>
                <a 
                  href={stream.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.watchButton}
                >
                  Go Watch on YouTube
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Service Info */}
        <div className={styles.serviceCard}>
          <h2 className={styles.serviceTitle}>Join Us for Worship</h2>
          <div className={styles.serviceTimeTitle}>
            Sundays at 10:00 AM
          </div>
          <p className={styles.serviceDescription}>
            Holy Eucharist with Music - In-Person & Livestreamed
          </p>
          <div className={styles.buttonGroup}>
            <Link href="/mockup" className={styles.primaryButton}>
              Visit Our Homepage
            </Link>
            <a href="/mockup#contact" className={styles.outlineButton}>
              Plan Your Visit
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}