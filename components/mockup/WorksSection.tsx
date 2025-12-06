'use client';

import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './css/WorksSection.module.css';

export default function WorksSection() {
  return (
    <div id="works" className={styles.worksSection}>
      <div className="container">
        <div className="sixteen columns" data-scrollreveal="enter bottom and move 50px over 1s">
          <div className={styles.topText}>
            <h1>our work</h1>
            <div className={styles.subline}></div>
            <div className={styles.topSubtext}>We craft beautiful digital solutions for awesome clients across all the platforms.</div>
          </div>
        </div>
      </div>
      <div className={styles.worksGallery}>
        <div className={styles.worksGrid}>
          <div className={styles.workItem} data-scrollreveal="enter left and move 50px over 1s">
            <Image src="/choir.webp" alt="Work" width={320} height={360} className={styles.workImg} loading="lazy" />
            <div className={styles.workCaption}>
              <h2 className={styles.workTitle}>Ministry Programs</h2>
            </div>
          </div>
          <div className={styles.workItem} data-scrollreveal="enter bottom and move 50px over 1s">
            <Image src="/choir_violin.webp" alt="Work" width={320} height={360} className={styles.workImg} loading="lazy" />
            <div className={styles.workCaption}>
              <h2 className={styles.workTitle}>Community Outreach</h2>
            </div>
          </div>
          <div className={styles.workItem} data-scrollreveal="enter right and move 50px over 1s">
            <Image src="/choir_vertical.webp" alt="Work" width={320} height={360} className={styles.workImg} loading="lazy" />
            <div className={styles.workCaption}>
              <h2 className={styles.workTitle}>Worship Services</h2>
            </div>
          </div>
          <div className={styles.workItem} data-scrollreveal="enter left and move 50px over 1s">
            <Image src="/christmas_tree.webp" alt="Work" width={320} height={360} className={styles.workImg} loading="lazy" />
            <div className={styles.workCaption}>
              <h2 className={styles.workTitle}>Youth Programs</h2>
            </div>
          </div>
          <div className={styles.workItem} data-scrollreveal="enter bottom and move 50px over 1s">
            <Image src="/manger.webp" alt="Work" width={320} height={360} className={styles.workImg} loading="lazy" />
            <div className={styles.workCaption}>
              <h2 className={styles.workTitle}>Fellowship Events</h2>
            </div>
          </div>
          <div className={styles.workItem} data-scrollreveal="enter right and move 50px over 1s">
            <Image src="/prayer.webp" alt="Work" width={320} height={360} className={styles.workImg} loading="lazy" />
            <div className={styles.workCaption}>
              <h2 className={styles.workTitle}>Community Service</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

