'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './css/ContactSection.module.css';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.contactBackground}>
        <Image
          src="/priests.webp"
          alt="Church background"
          fill
          className={styles.backgroundImage}
          sizes="100vw"
        />
        <div className={styles.contactOverlay}></div>
        <div className={styles.justPattern}></div>
      </div>
      <div className={styles.container}>
        <ScrollReveal delay="0.1s">
          <div className={styles.contactHeader}>
            <h2 className={styles.sectionTitle}>Get In Touch</h2>
            <p className={styles.sectionSubtitle}>
              We'd love to hear from you. Reach out to us!
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay="0.2s">
          <div className={styles.contactContent}>
            <ScrollReveal delay="0.3s">
              <div className={styles.contactInfo}>
                <ScrollReveal delay="0.4s">
                  <div className={styles.infoCard}>
                    <MapPin className={styles.infoIcon} />
                    <h3>Address</h3>
                    <p>
                      28211 Pacific Coast Highway<br />
                      Malibu, CA 90265<br />
                      (opposite Paradise Cove)
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay="0.5s">
                  <div className={styles.infoCard}>
                    <Phone className={styles.infoIcon} />
                    <h3>Phone</h3>
                    <p>
                      <a href="tel:310-457-7966">(310) 457-7966</a>
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay="0.6s">
                  <div className={styles.infoCard}>
                    <Mail className={styles.infoIcon} />
                    <h3>Email</h3>
                    <p>
                      <a href="mailto:office@staidanschurch.org">office@staidanschurch.org</a>
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay="0.7s">
                  <div className={styles.infoCard}>
                    <Clock className={styles.infoIcon} />
                    <h3>Office Hours</h3>
                    <p>
                      Monday - Friday<br />
                      9:00 AM - 5:00 PM
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </ScrollReveal>

            <ScrollReveal delay="0.4s">
              <form className={styles.contactForm} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className={styles.submitButton}>
                  Send Message
                </button>
              </form>
            </ScrollReveal>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
