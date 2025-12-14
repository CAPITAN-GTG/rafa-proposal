'use client';

import Link from 'next/link';
import styles from './css/DonationSection.module.css';

export default function DonationSection() {
  return (
    <div className={styles.section}>
      <div className={styles.contentWrap}>
        <div className={styles.sectionInner}>
          <h1 className={styles.title}>
            Giving is an action of worship,<br />
            affection & love for Jesus.
          </h1>
          <h2 className={styles.subtitle}>Making a difference</h2>
          <div className={styles.buttons}>
            <Link href="/proposal" className={styles.buttonPrimary}>
              GIVE NOW
            </Link>
            <Link href="/proposal" className={styles.buttonSecondary}>
              WAYS TO GIVE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

