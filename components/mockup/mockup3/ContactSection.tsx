'use client';

import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import styles from './css/ContactSection.module.css';

export default function ContactSection() {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Get In Touch</h2>
          <p className={styles.subtitle}>
            We'd love to hear from you. Visit us or reach out!
          </p>
        </div>

        <div className={styles.contactGrid}>
          <div className={styles.contactInfo}>
            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <MapPin size={24} />
              </div>
              <h3>Location</h3>
              <p>28211 Pacific Coast Highway<br />Malibu, CA 90265</p>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <Phone size={24} />
              </div>
              <h3>Phone</h3>
              <p>(310) 457-7966</p>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <Mail size={24} />
              </div>
              <h3>Email</h3>
              <p>info@staidanschurch.org</p>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <Clock size={24} />
              </div>
              <h3>Service Times</h3>
              <p>Sundays at 10:00 AM<br />Holy Eucharist with Music</p>
            </div>
          </div>

          <div className={styles.contactForm}>
            <form className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} required></textarea>
              </div>
              <button type="submit" className={styles.submitButton}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

