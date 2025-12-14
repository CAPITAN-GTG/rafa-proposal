'use client';

import Link from 'next/link';
import styles from './css/InfoSection.module.css';

export default function InfoSection() {
  return (
    <div className={styles.section}>
      <div className={styles.sectionInner}>
        <h1 className={styles.title}>
          Get Connected. What's Your Next Step?<br />
          Follow. Connect. Go.
        </h1>
        <div className={styles.subtitle}>
          Following Jesus as disciples and connecting with others as part of a spiritual family
        </div>
        <div className={styles.buttons}>
          <Link href="/schedule" className={styles.button}>
            small groups &<br />
            BIBLE STUDIES
          </Link>
          <Link href="/proposal" className={styles.button}>
            MISSIONS<br />
            & donation
          </Link>
          <Link href="/proposal" className={styles.button}>
            Musical<br />
            Worship Team
          </Link>
        </div>
      </div>
    </div>
  );
}

