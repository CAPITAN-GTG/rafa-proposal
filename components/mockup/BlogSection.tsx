'use client';

import Image from 'next/image';
import { FileText } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './BlogSection.module.css';

export default function BlogSection() {
  return (
    <div id="blog" className={styles.blogSection}>
      <div className="container">
        <div className="sixteen columns" data-scrollreveal="enter bottom and move 50px over 1s">
          <div className={styles.topText}>
            <h1>from the blog</h1>
            <div className={styles.subline}></div>
            <div className={styles.topSubtext}>Latest news.</div>
          </div>
        </div>
        <div className="clear"></div>
        <div id="blog-mas" className={styles.blogMasonry}>
          <div className={`one-third column item-blog ${styles.blogItem1}`}>
            <div className={styles.blogPost} data-scrollreveal="enter bottom and move 50px over 1s">
              <div className={styles.blogIcon}><FileText size={32} /></div>
              <h6>Join Us for Worship</h6>
              <Image src="/placeholder_1.webp" alt="Blog" width={300} height={200} className={styles.blogImg} loading="lazy" />
              <p><span>Every Sunday</span></p>
              <p>Join us in Malibu at 10 am on Sundays for Holy Eucharist with Music. All are welcome!</p>
              <a href="#"><p>read more</p></a>
            </div>
          </div>
          <div className={`one-third column item-blog ${styles.blogItem2}`}>
            <div className={styles.blogPost} data-scrollreveal="enter bottom and move 50px over 1s">
              <div className={styles.blogIcon}><FileText size={32} /></div>
              <h6>Community Event</h6>
              <Image src="/placeholder_2.webp" alt="Blog" width={300} height={200} className={styles.blogImg} loading="lazy" />
              <p><span>December 15, 2024</span></p>
              <p>Our annual Christmas potluck is coming up! All are welcome to join us for food and fellowship.</p>
              <a href="#"><p>read more</p></a>
            </div>
          </div>
          <div className={`one-third column item-blog ${styles.blogItem3}`}>
            <div className={styles.blogPost} data-scrollreveal="enter bottom and move 50px over 1s">
              <div className={styles.blogIcon}><FileText size={32} /></div>
              <h6>Ministry Spotlight</h6>
              <Image src="/placeholder_3.webp" alt="Blog" width={300} height={200} className={styles.blogImg} loading="lazy" />
              <p><span>December 10, 2024</span></p>
              <p>Learn about our youth ministry and how we're helping the next generation grow in faith.</p>
              <a href="#"><p>read more</p></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

