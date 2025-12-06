'use client';

import ElastiStack from '@/components/ElastiStack';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  return (
    <div id="about" className={styles.aboutSection}>
      <div className="container">
        <div className="sixteen columns" data-scrollreveal="enter bottom and move 50px over 1s">
          <div className={styles.topText}>
            <h1>ST. AIDAN'S EPISCOPAL CHURCH</h1>
            <div className={styles.subline}></div>
          </div>
        </div>
        <div className="six columns" data-scrollreveal="enter left and move 50px over 1s">
          <ElastiStack 
            images={[
              '/placeholder_1.webp',
              '/placeholder_2.webp',
              '/placeholder_3.webp',
              '/placeholder_4.webp',
              '/placeholder_5.webp'
            ]}
            altText="Drag Me"
          />
        </div>
        <div className="ten columns" data-scrollreveal="enter right and move 50px over 1s">
          <h5>ABOUT US.</h5>
          <p className={styles.subtext}>
            Are you looking for an inclusive church in which people from many backgrounds have found common ground?
          </p>
          <p>
            St. Aidan's seeks to be the welcoming heart, hands, and voice of Christ in Malibu. We respect and honor past, present, and future generations of Chumash and their continued connection to this land. All are welcomed at St. Aidan's. Come as you are.
          </p>
        </div>
        <div className="sixteen columns">
          <div className={styles.lineSeparator}></div>
        </div>
        <div className="one-third column" data-scrollreveal="enter left and move 50px over 1s">
          <h5>OUR MISSION.</h5>
          <p>To be the welcoming heart, hands, and voice of Christ in Malibu, serving our community with love and grace.</p>
        </div>
        <div className="one-third column" data-scrollreveal="enter bottom and move 50px over 1s">
          <h5>OUR VALUES.</h5>
          <p>Inclusivity, compassion, and service guide everything we do. All are welcome, no exceptions.</p>
        </div>
        <div className="one-third column" data-scrollreveal="enter right and move 50px over 1s">
          <h5>OUR COMMUNITY.</h5>
          <p>Join us for worship, fellowship, and meaningful connections that strengthen our faith and community.</p>
        </div>
      </div>
    </div>
  );
}

