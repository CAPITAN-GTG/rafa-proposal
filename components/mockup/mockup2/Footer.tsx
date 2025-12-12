'use client';

import Link from 'next/link';
import { Facebook, Mail, Youtube } from 'lucide-react';
import styles from './css/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <div className={styles.footerLogo}>
              <div className={styles.logoIcon}>SA</div>
              <div className={styles.logoText}>
                <span className={styles.logoTitle}>St. Aidan's</span>
                <span className={styles.logoSubtitle}>Episcopal Church</span>
              </div>
            </div>
            <p className={styles.footerDescription}>
              A welcoming community of faith in Malibu, California. 
              All are welcome, come as you are.
            </p>
          </div>

          <div className={styles.footerSection}>
            <h3>Quick Links</h3>
            <ul className={styles.footerLinks}>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h3>Connect</h3>
            <div className={styles.socialLinks}>
              <a href="#" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Email">
                <Mail size={20} />
              </a>
              <a href="#" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
            <p className={styles.footerAddress}>
              28211 Pacific Coast Highway<br />
              Malibu, CA 90265
            </p>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} St. Aidan's Episcopal Church. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
