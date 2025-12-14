'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './css/TestimonialsSection.module.css';

const testimonials = [
  {
    id: 1,
    content: "I have two great passions: one is to build the Church of Jesus Christ and the other is to lift the lives of people and help them fulfil their potential in life",
    avatar: '/Joyce.webp',
    name: 'Hovard Gray',
    position: 'Pastor'
  },
  {
    id: 2,
    content: "I have been going to this church my whole life and it is such a blessing to me! I am so blessed to be able to attend Grace and be a part of the amazing things that God is doing.",
    avatar: '/greg.webp',
    name: 'Herbert Wright',
    position: 'Executive Pastor'
  },
  {
    id: 3,
    content: "Me and my partners have found our relationship with this team to be a very satisfying and mutually beneficial experience.",
    avatar: '/cora.webp',
    name: 'Elmer Black',
    position: 'Lead Teaching Pastor'
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.section}>
      <div className={styles.contentWrap}>
        <div className={styles.testimonials}>
          <div className={styles.testimonialItem}>
            <div className={styles.testimonialContent}>
              <p>{testimonials[currentIndex].content}</p>
            </div>
            <div className={styles.testimonialAvatar}>
              <Image
                src={testimonials[currentIndex].avatar}
                alt={testimonials[currentIndex].name}
                width={56}
                height={56}
                className={styles.avatar}
              />
            </div>
            <div className={styles.testimonialAuthor}>
              <span className={styles.authorName}>{testimonials[currentIndex].name}</span>
              <span className={styles.authorPosition}>{testimonials[currentIndex].position}</span>
            </div>
          </div>
          <div className={styles.testimonialDots}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

