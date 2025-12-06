'use client';

import ScrollReveal from '@/components/ScrollReveal';
import styles from './css/TestimonialsSection.module.css';

export default function TestimonialsSection() {
  return (
    <div id="sep2" className={styles.testimonialsWrapper}>
      <div className={styles.parallax} style={{ backgroundImage: "url('/placeholder_3.webp')" }}></div>
      <div className={styles.justPattern}></div>
      <div className="container" data-scrollreveal="enter bottom and move 50px over 1s">
        <div className="sixteen columns">
          <div className={styles.topText}>
            <h3>TESTIMONIALS</h3>
            <div className={styles.subline}></div>
          </div>
        </div>
        <div className="clear"></div>
        <div className="sixteen columns">
          <div className={styles.testimonialItem}>
            <h4>"St. Aidan's has been a welcoming home for our family. The community is warm, inclusive, and truly embodies Christ's love."</h4>
            <h6>John & Mary Smith, <span>Members since 2015</span></h6>
          </div>
          <div className={styles.testimonialItem}>
            <h4>"The worship services are beautiful and meaningful. We feel blessed to be part of this community."</h4>
            <h6>Sarah Johnson, <span>Member since 2018</span></h6>
          </div>
          <div className={styles.testimonialItem}>
            <h4>"St. Aidan's has helped me grow in my faith and find my place in serving others. It's truly a special place."</h4>
            <h6>Michael Brown, <span>Member since 2020</span></h6>
          </div>
        </div>
      </div>
    </div>
  );
}

