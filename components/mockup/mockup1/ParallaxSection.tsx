'use client';

import ScrollReveal from '@/components/ScrollReveal';
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
    <div id={id} className={styles.parallaxSection}>
      <div className={styles.parallax} style={{ backgroundImage: `url('${backgroundImage}')` }}></div>
      {pattern && <div className={styles.justPattern}></div>}
      <div className="container">
        <div className="sixteen columns">
          <h4 data-scrollreveal="enter top and move 50px over 1s">
            {quote}
          </h4>
          {author && (
            <h6 data-scrollreveal="enter right and move 50px over 1s">{author}</h6>
          )}
        </div>
      </div>
    </div>
  );
}

