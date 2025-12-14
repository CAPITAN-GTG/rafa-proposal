'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Home, BookOpen, User } from 'lucide-react';
import styles from './css/WelcomeSection.module.css';

const services = [
  {
    icon: Home,
    title: 'Follow with us',
    description: 'We would love to see you and your family & friends this weekend in our church at 10 am.',
    link: '#'
  },
  {
    icon: BookOpen,
    title: 'What We Believe',
    description: 'We believe that the Bible is God\'s Word. It is accurate, authoritative and applicable to our everyday lives.',
    link: '#'
  },
  {
    icon: User,
    title: 'New Here?',
    description: 'Tell us about yourself to begin your journey with connecting to our community.',
    link: '#'
  }
];

export default function WelcomeSection() {
  return (
    <div className={styles.section}>
      <div className={styles.contentWrap}>
        <div className={styles.columns}>
          <div className={styles.column}>
            <figure className={styles.image}>
              <Image
                src="/inside_church.webp"
                alt="Church"
                width={520}
                height={660}
                className={styles.img}
              />
            </figure>
          </div>
          <div className={styles.column}>
            <div className={styles.servicesWrap}>
              <h6 className={styles.subtitle}>Welcome</h6>
              <h2 className={styles.title}>Loving God, Loving Others and Serving the World</h2>
              <div className={styles.description}>
                We\'d love to meet you! Come check us out this SUNDAY where you can meet us and see if New Life Church might be a good fit for you. Our heart and soul is to introduce and connect people with the living and powerful God.
              </div>
              <div className={styles.services}>
                {services.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <div key={index} className={styles.serviceItem}>
                      <div className={styles.icon}>
                        <IconComponent size={48} />
                      </div>
                      <div className={styles.serviceContent}>
                        <h4 className={styles.serviceTitle}>
                          <Link href={service.link}>{service.title}</Link>
                        </h4>
                        <div className={styles.serviceDescription}>
                          <p>{service.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

