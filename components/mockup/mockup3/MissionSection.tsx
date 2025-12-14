'use client';

import styles from './css/MissionSection.module.css';

export default function MissionSection() {
  return (
    <div className={styles.section}>
      <div className={styles.contentWrap}>
        <div className={styles.columns}>
          <div className={styles.column}>
            <h2 className={styles.title}>Our church mission is to ignite a passion to follow Jesus.</h2>
          </div>
          <div className={styles.column}>
            <div className={styles.sectionInner}>
              <p className={styles.text}>
                "The church is the body of Christ on earth, empowered by the Holy Spirit to continue the task of reaching the lost and discipling the saved, helping them become fully devoted followers of Christ."
              </p>
              <p className={styles.verse}>Ephesians 4:1-16</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

