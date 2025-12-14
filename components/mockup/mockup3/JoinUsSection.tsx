'use client';

import Link from 'next/link';
import styles from './css/JoinUsSection.module.css';

export default function JoinUsSection() {
  return (
    <div className={styles.section}>
      <div className={styles.contentWrap}>
        <div className={styles.columns}>
          <div className={styles.column}>
            <h2 className={styles.title}>
              If you are interested in joining a small group please fill out the Small Group form, or email us directly »
            </h2>
          </div>
          <div className={styles.column}>
            <div className={styles.sectionInner}>
              <h6 className={styles.subtitle}>Email Us</h6>
              <h4 className={styles.email}>
                <a href="mailto:info@yoursite.com">info@yoursite.com</a>
              </h4>
            </div>
          </div>
          <div className={styles.column}>
            <Link href="/proposal" className={styles.button}>
              JOIN GROUP
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

