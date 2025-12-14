'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Search, Link as LinkIcon } from 'lucide-react';
import styles from './css/GallerySection.module.css';

const galleryItems = [
  { id: 1, image: '/aboutus_1.webp', title: 'Truth Does Not Hurt' },
  { id: 2, image: '/aboutus_2.webp', title: 'We Give Hope' },
  { id: 3, image: '/aboutus_3.webp', title: 'Through the Never' },
  { id: 4, image: '/aboutus_4.webp', title: 'Forgiveness & Acceptance' },
  { id: 5, image: '/aboutus_5.webp', title: 'The Answer Is God' },
  { id: 6, image: '/aboutus_6.webp', title: 'Find Love Inside Yourself' },
  { id: 7, image: '/choir.webp', title: 'The Power of Words Not Spoken' },
  { id: 8, image: '/worship_services.webp', title: 'Basic Points of Belief' },
  { id: 9, image: '/inside_church.webp', title: '5 Questions for Decision Makers' },
  { id: 10, image: '/outside_church.webp', title: '5 Reasons to Love Churches in 2016' },
  { id: 11, image: '/prayer.webp', title: 'Community Prayer' },
  { id: 12, image: '/communion.webp', title: 'Communion Service' }
];

export default function GallerySection() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  return (
    <div className={styles.section}>
      <div className={styles.galleryGrid}>
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className={styles.galleryItem}
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div className={styles.galleryImage}>
              <Image
                src={item.image}
                alt={item.title}
                fill
                className={styles.image}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className={`${styles.galleryOverlay} ${hoveredItem === item.id ? styles.active : ''}`}>
              <h3 className={styles.galleryTitle}>{item.title}</h3>
              <div className={styles.galleryActions}>
                <button className={styles.actionButton} aria-label="View">
                  <Search size={20} />
                </button>
                <button className={styles.actionButton} aria-label="Link">
                  <LinkIcon size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

