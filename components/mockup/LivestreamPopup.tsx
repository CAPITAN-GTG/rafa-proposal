'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, Video } from 'lucide-react';
import styles from './css/LivestreamPopup.module.css';

export default function LivestreamPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    // Check if user has closed the popup before
    const hasClosed = localStorage.getItem('livestream-popup-closed');
    if (!hasClosed) {
      // Show popup after a short delay
      setTimeout(() => {
        setIsVisible(true);
      }, 2000);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setIsClosed(true);
    // Remember that user closed it
    localStorage.setItem('livestream-popup-closed', 'true');
  };

  if (isClosed || !isVisible) {
    return null;
  }

  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popup}>
        <button className={styles.closeButton} onClick={handleClose} aria-label="Close">
          <X size={16} />
        </button>
        <div className={styles.popupContent}>
          <div className={styles.popupInner}>
            <div className={styles.iconWrapper}>
              <Video size={24} />
            </div>
            <div className={styles.textWrapper}>
              <span className={styles.popupTitle}>Watch the Livestream</span>
              <span className={styles.popupSubtitle}>Join us for worship online</span>
            </div>
          </div>
          <Link href="/mockup/live" className={styles.watchButton}>
            Watch Now
          </Link>
        </div>
      </div>
    </div>
  );
}

