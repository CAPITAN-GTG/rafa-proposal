'use client';

import { Facebook, Instagram, Youtube, Mail } from 'lucide-react';
import styles from './css/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>St. Aidan's Episcopal Church</h3>
            <p className={styles.footerText}>
              A welcoming community of faith in Malibu, California. 
              All are welcome. Come as you are.
            </p>
            <div className={styles.socialLinks}>
              <a href="#" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="YouTube">
                <Youtube size={20} />
              </a>
              <a href="#" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerHeading}>Quick Links</h4>
            <ul className={styles.footerLinks}>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#events">Events</a></li>
              <li><a href="#team">Our Team</a></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerHeading}>Worship</h4>
            <ul className={styles.footerLinks}>
              <li><a href="#livestream">Watch Live</a></li>
              <li><a href="#services">Service Times</a></li>
              <li><a href="#contact">Plan Your Visit</a></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerHeading}>Contact</h4>
            <ul className={styles.footerInfo}>
              <li>28211 Pacific Coast Highway</li>
              <li>Malibu, CA 90265</li>
              <li>(310) 457-7966</li>
              <li>info@staidanschurch.org</li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} St. Aidan's Episcopal Church. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

