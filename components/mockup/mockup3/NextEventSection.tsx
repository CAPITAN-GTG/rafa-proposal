'use client';

import { useState, useEffect } from 'react';
import styles from './css/NextEventSection.module.css';

export default function NextEventSection() {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2025-06-08T12:00:00').getTime();
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.section}>
      <div className={styles.contentWrap}>
        <div className={styles.columns}>
          <div className={styles.column}>
            <div className={styles.sectionInner}>
              <h3 className={styles.title}>Next event in:</h3>
              <h6 className={styles.subtitle}>Heart For The House Sunday</h6>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.countdown}>
              <div className={styles.countdownInner}>
                <div className={styles.countdownItem}>
                  <span className={styles.countdownDigits}>
                    {String(countdown.days).padStart(3, '0').split('').map((digit, i) => (
                      <span key={i}>{digit}</span>
                    ))}
                  </span>
                  <span className={styles.countdownLabel}>Days</span>
                </div>
                <div className={styles.countdownSeparator}>:</div>
                <div className={styles.countdownItem}>
                  <span className={styles.countdownDigits}>
                    {String(countdown.hours).padStart(2, '0').split('').map((digit, i) => (
                      <span key={i}>{digit}</span>
                    ))}
                  </span>
                  <span className={styles.countdownLabel}>Hours</span>
                </div>
                <div className={styles.countdownSeparator}>:</div>
                <div className={styles.countdownItem}>
                  <span className={styles.countdownDigits}>
                    {String(countdown.minutes).padStart(2, '0').split('').map((digit, i) => (
                      <span key={i}>{digit}</span>
                    ))}
                  </span>
                  <span className={styles.countdownLabel}>Minutes</span>
                </div>
                <div className={styles.countdownSeparator}>:</div>
                <div className={styles.countdownItem}>
                  <span className={styles.countdownDigits}>
                    {String(countdown.seconds).padStart(2, '0').split('').map((digit, i) => (
                      <span key={i}>{digit}</span>
                    ))}
                  </span>
                  <span className={styles.countdownLabel}>Seconds</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.sectionInner}>
              <a href="#" className={styles.button}>EVENT DETAIL</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

