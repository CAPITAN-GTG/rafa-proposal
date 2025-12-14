'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './css/CallToActionSection.module.css';

export default function CallToActionSection() {
  return (
    <div className={styles.section}>
      <div className={styles.contentWrap}>
        <div className={styles.columns}>
          <div className={styles.column}>
            <div className={styles.image}>
              <Image
                src="/choir_vertical.webp"
                alt="Worship Team"
                width={520}
                height={320}
                className={styles.img}
                onError={(e) => {
                  e.currentTarget.src = '/choir.webp';
                }}
              />
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.info}>
              <h6 className={styles.subtitle}>Lyrics, Chords & Translations</h6>
              <h2 className={styles.title}>Worship Team Resources</h2>
              <div className={styles.description}>
                We\'re passionate about Jesus and leading others to worship Him! We hope these resources help equip you and your team as you lead worship.
              </div>
              <div className={styles.buttonWrap}>
                <Link href="/proposal" className={styles.button}>
                  view more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

