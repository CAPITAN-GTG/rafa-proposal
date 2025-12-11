'use client';

import ScrollReveal from '@/components/ScrollReveal';
import styles from './css/ActionSection.module.css';

export default function ActionSection() {
  return (
    <div id="action" className={styles.actionSection}>
      <div className="container">
        <div className="sixteen columns" data-scrollreveal="enter bottom and move 50px over 1s">
          <h6>ARE YOU READY TO START A CONVERSATION?</h6>
          <p><small><span>Get In Touch!</span></small></p>
        </div>
      </div>
    </div>
  );
}

