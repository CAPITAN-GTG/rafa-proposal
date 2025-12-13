'use client';

import Link from 'next/link';
import { Facebook, Mail, Youtube } from 'lucide-react';
import styles from './css/Footer.module.css';

export default function Footer() {
  return (
    <div id="footer" className={styles.footer}>
      <div className="container">
        <div className="sixteen columns">
          <a className="scroll" href="#home">
            <div className={styles.churchLogo} style={{justifyContent: 'center', marginBottom: '20px'}}>
              <div className={styles.churchLogoIcon}>SA</div>
              <div>
                <div className={styles.churchLogoText}>St. Aidan's Episcopal Church</div>
              </div>
            </div>
          </a>
          <p>Copyright © 2017 St. Aidan's Episcopal Church. All rights reserved.</p>
          <div className={styles.socialFooter}>
            <ul className={styles.footerSocial}>
              <li className={styles.iconFooter}><a href="#"><Facebook size={20} /></a></li>
              <li className={styles.iconFooter}><a href="#"><Mail size={20} /></a></li>
              <li className={styles.iconFooter}><a href="#"><Youtube size={20} /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

