'use client';

import { useState, useEffect } from 'react';
import { X, Video } from 'lucide-react';
import styles from './css/LivestreamPopup.module.css';

export default function LivestreamPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    const hasClosed = localStorage.getItem('livestream-popup-closed');
    if (!hasClosed) {
      setTimeout(() => {
        setIsVisible(true);
      }, 2000);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setIsClosed(true);
    localStorage.setItem('livestream-popup-closed', 'true');
  };

  if (isClosed || !isVisible) {
    return null;
  }

  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popup}>
        <button className={styles.closeButton} onClick={handleClose} aria-label="Close">
          <X size={18} />
        </button>
        <div className={styles.popupContent}>
          <div className={styles.popupIcon}>
            <Video size={28} />
          </div>
          <div className={styles.popupText}>
            <h3>Watch Live</h3>
            <p>Join us for worship online</p>
          </div>
        </div>
      </div>
    </div>
  );
}
