'use client';

import { useEffect } from 'react';
import styles from './FactsSection.module.css';

export default function FactsSection() {
  useEffect(() => {
    // Count up animation for fun facts
    const counters = document.querySelectorAll(`.${styles.counter}`);
    const observerOptions = {
      threshold: 0.5,
      rootMargin: '0px'
    };

    const animateCounter = (counter: Element) => {
      const target = parseInt(counter.textContent || '0');
      const duration = 2000; // 2 seconds
      const increment = target / (duration / 16); // 60fps
      let current = 0;

      const updateCounter = () => {
        current += increment;
        if (current < target) {
          counter.textContent = Math.floor(current).toString();
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target.toString();
        }
      };

      updateCounter();
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.hasAttribute('data-animated')) {
          entry.target.setAttribute('data-animated', 'true');
          animateCounter(entry.target);
        }
      });
    }, observerOptions);

    counters.forEach(counter => {
      observer.observe(counter);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div id="sep1" className={styles.factsWrapper}>
      <div className={styles.parallax} style={{ backgroundImage: "url('/placeholder_2.webp')" }}></div>
      <div className={styles.backgroundGrid}></div>
      <div className={styles.justPattern}></div>
      <div id="facts" className={styles.factsSection}>
        <div className="container">
          <div className="sixteen columns" data-scrollreveal="enter bottom and move 50px over 1s">
            <div className={styles.topText}>
              <h3>SOME FUN FACTS</h3>
              <div className={styles.subline}></div>
            </div>
          </div>
          <div className="four columns" data-scrollreveal="enter left and move 50px over 1s">
            <div className={styles.factsWrap}>
              <div className={styles.factsLine}></div>
              <div className={styles.factsWrapNum}><span className={styles.counter}>150</span></div>
              <h6>Members</h6>
            </div>
          </div>
          <div className="four columns" data-scrollreveal="enter bottom and move 50px over 1s">
            <div className={styles.factsWrap}>
              <div className={styles.factsLine}></div>
              <div className={styles.factsWrapNum}><span className={styles.counter}>12</span></div>
              <h6>Ministries</h6>
            </div>
          </div>
          <div className="four columns" data-scrollreveal="enter bottom and move 50px over 1s">
            <div className={styles.factsWrap}>
              <div className={styles.factsLine}></div>
              <div className={styles.factsWrapNum}><span className={styles.counter}>52</span></div>
              <h6>Services</h6>
            </div>
          </div>
          <div className="four columns" data-scrollreveal="enter right and move 50px over 1s">
            <div className={styles.factsWrap}>
              <div className={styles.factsWrapNum}><span className={styles.counter}>25</span></div>
              <h6>Years</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

