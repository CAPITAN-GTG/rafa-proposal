'use client';

import { Clock, Calendar, ExternalLink } from 'lucide-react';
import styles from './css/LivestreamSection.module.css';

export default function LivestreamSection() {
  return (
    <section id="livestream" className={styles.livestreamSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Watch Live</h2>
          <p className={styles.subtitle}>Join us for worship online every Sunday at 10:00 AM</p>
        </div>

        <div className={styles.streamGrid}>
          <div className={styles.mainStream}>
            <div className={styles.videoContainer}>
              <iframe
                src="https://www.youtube.com/embed/0uaZ30NEHLU?rel=0&modestbranding=1"
                title="Live Stream"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className={styles.videoFrame}
              ></iframe>
            </div>
            <div className={styles.streamInfo}>
              <div className={styles.infoCard}>
                <Clock size={18} />
                <span>Sundays at 10:00 AM</span>
              </div>
              <div className={styles.infoCard}>
                <Calendar size={18} />
                <span>Holy Eucharist with Music</span>
              </div>
              <a 
                href="/mockup/live" 
                className={styles.watchFullButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={16} />
                View All Services
              </a>
            </div>
          </div>

          <div className={styles.sidebar}>
            <h3 className={styles.sidebarTitle}>Upcoming Services</h3>
            <div className={styles.serviceList}>
              <div className={styles.serviceCard}>
                <div className={styles.serviceTime}>10:00 AM</div>
                <div className={styles.serviceTitle}>Sunday Morning Service</div>
                <div className={styles.serviceDate}>Every Sunday</div>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceTime}>6:00 PM</div>
                <div className={styles.serviceTitle}>Evening Prayer</div>
                <div className={styles.serviceDate}>Select Sundays</div>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceTime}>12:00 PM</div>
                <div className={styles.serviceTitle}>Midweek Service</div>
                <div className={styles.serviceDate}>Wednesdays</div>
              </div>
            </div>
            <a href="/mockup/live" className={styles.viewAllButton}>
              View All Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

