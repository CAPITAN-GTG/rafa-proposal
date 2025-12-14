'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './css/EventsSection.module.css';

const events = [
  {
    month: 'Apr',
    day: '24',
    title: 'Church Leaders meeting',
    time: '1:00 pm - 7:00 pm',
    link: '#'
  },
  {
    month: 'Apr',
    day: '09',
    title: 'Prayer Day',
    time: '6:00 pm - 8:00 pm',
    link: '#'
  },
  {
    month: 'Mar',
    day: '02',
    title: 'Monthly Band Tryouts',
    time: '3:00 pm - 7:00 pm',
    link: '#'
  },
  {
    month: 'Jan',
    day: '31',
    title: 'WOW Conference',
    time: '10:00 am - 2:00 pm',
    link: '#'
  },
  {
    month: 'Jun',
    day: '24',
    title: 'Seniors Bible Study',
    time: '4:00 pm - 6:00 pm',
    link: '#'
  }
];

export default function EventsSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className={styles.section}>
      <div className={styles.contentWrap}>
        <div className={styles.columns}>
          <div className={styles.column}>
            <div className={styles.sectionInner}>
              <h6 className={styles.subtitle}>Worship</h6>
              <h2 className={styles.title}>The sound of our worship</h2>
              <div className={styles.audioPlayer}>
                <div className={styles.playerControls}>
                  <button
                    className={styles.playButton}
                    onClick={() => setIsPlaying(!isPlaying)}
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                  >
                    {isPlaying ? '⏸' : '▶'}
                  </button>
                  <div className={styles.trackInfo}>
                    <p className={styles.trackTitle}>Energy</p>
                    <p className={styles.trackArtist}>By Young & Free</p>
                  </div>
                </div>
                <div className={styles.progressBar}>
                  <div className={styles.progress} style={{ width: '30%' }}></div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.sectionInner}>
              <h6 className={styles.subtitle}>Upcoming Events</h6>
              <h2 className={styles.title}>Conferences & Events</h2>
              <div className={styles.eventsWrap}>
                {events.map((event, index) => (
                  <div key={index} className={styles.eventItem}>
                    <span className={styles.eventDate}>
                      <span className={styles.eventMonth}>{event.month}</span>
                      <span className={styles.eventDay}>{event.day}</span>
                    </span>
                    <h6 className={styles.eventTitle}>
                      <Link href={event.link}>{event.title}</Link>
                    </h6>
                    <span className={styles.eventTime}>{event.time}</span>
                    <span className={styles.eventDetails}>
                      <Link href={event.link}>Details</Link>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

