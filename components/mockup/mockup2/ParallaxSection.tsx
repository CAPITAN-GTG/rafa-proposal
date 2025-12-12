'use client';

import Image from 'next/image';
import styles from './css/ParallaxSection.module.css';

interface ParallaxSectionProps {
  id: string;
  backgroundImage: string;
  quote: string;
  author?: string;
  pattern?: boolean;
}

export default function ParallaxSection({ id, backgroundImage, quote, author, pattern = true }: ParallaxSectionProps) {
  return (
    <section id={id} className={styles.parallaxSection}>
      <div className={styles.parallaxImage}>
        <Image
          src={backgroundImage}
          alt="Parallax background"
          fill
          className={styles.image}
          sizes="100vw"
        />
        <div className={styles.parallaxOverlay}></div>
      </div>
      <div className={styles.parallaxContent}>
        <blockquote className={styles.quote}>
          {quote}
        </blockquote>
        {author && <cite className={styles.author}>— {author}</cite>}
      </div>
    </section>
  );
}
