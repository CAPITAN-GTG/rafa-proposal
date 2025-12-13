'use client';

import Image from 'next/image';
import { Calendar } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './css/BlogSection.module.css';

const blogPosts = [
  {
    title: 'Join Us for Worship',
    date: 'Every Sunday',
    image: '/priests.webp',
    excerpt: 'Join us in Malibu at 10 am on Sundays for Holy Eucharist with Music. All are welcome!'
  },
  {
    title: 'Harvest Celebration',
    date: 'December 15, 2024',
    image: '/flower_harvest.webp',
    excerpt: 'Our annual harvest celebration is coming up! All are welcome to join us for food and fellowship.'
  },
  {
    title: 'Church Community',
    date: 'December 10, 2024',
    image: '/inside_church.webp',
    excerpt: "Experience the warmth and fellowship of our church community as we gather together in faith."
  }
];

export default function BlogSection() {
  return (
    <section id="blog" className={styles.blog}>
      <div className={styles.container}>
        <ScrollReveal delay="0.1s">
          <div className={styles.blogHeader}>
            <h2 className={styles.sectionTitle}>Latest News</h2>
            <p className={styles.sectionSubtitle}>
              Stay updated with our community events and announcements
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay="0.2s">
          <div className={styles.blogGrid}>
            {blogPosts.map((post, index) => (
              <ScrollReveal key={index} delay={`${0.3 + index * 0.1}s`}>
                <article className={styles.blogCard}>
                  <div className={styles.blogImage}>
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={400}
                      height={250}
                      className={styles.image}
                    />
                    <div className={styles.blogDate}>
                      <Calendar size={16} />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <div className={styles.blogContent}>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <a href="#" className={styles.readMore}>Read More</a>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
