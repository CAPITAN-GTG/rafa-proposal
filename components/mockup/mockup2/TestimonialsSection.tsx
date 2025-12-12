'use client';

import ScrollReveal from '@/components/ScrollReveal';
import styles from './css/TestimonialsSection.module.css';

const testimonials = [
  {
    quote: "St. Aidan's has been a welcoming home for our family. The community is warm, inclusive, and truly embodies Christ's love.",
    author: "John & Mary Smith",
    role: "Members since 2015"
  },
  {
    quote: "The worship services are beautiful and meaningful. We feel blessed to be part of this community.",
    author: "Sarah Johnson",
    role: "Member since 2018"
  },
  {
    quote: "St. Aidan's has helped me grow in my faith and find my place in serving others. It's truly a special place.",
    author: "Michael Brown",
    role: "Member since 2020"
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className={styles.container}>
        <ScrollReveal delay="0.1s">
          <div className={styles.testimonialsHeader}>
            <h2 className={styles.sectionTitle}>What People Say</h2>
            <p className={styles.sectionSubtitle}>
              Hear from our community members
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay="0.2s">
          <div className={styles.testimonialsGrid}>
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={index} delay={`${0.3 + index * 0.1}s`}>
                <div className={styles.testimonialCard}>
                  <div className={styles.quoteIcon}>"</div>
                  <p className={styles.quote}>{testimonial.quote}</p>
                  <div className={styles.author}>
                    <strong>{testimonial.author}</strong>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
