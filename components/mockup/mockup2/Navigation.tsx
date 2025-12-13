'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Home, Info, Calendar, Users, Gift, Video } from 'lucide-react';
import Link from 'next/link';
import styles from './css/Navigation.module.css';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home', icon: Home },
    { href: '#about', label: 'About', icon: Info },
    { href: '#services', label: 'Services', icon: Calendar },
    { href: '#team', label: 'Team', icon: Users },
    { href: '#contact', label: 'Contact', icon: Gift },
    { href: '#', label: 'Livestream', icon: Video },
  ];

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <Link href="#home" className={styles.logo}>
          <div className={styles.logoIcon}>SA</div>
          <div className={styles.logoText}>
            <span className={styles.logoTitle}>St. Aidan's</span>
            <span className={styles.logoSubtitle}>Episcopal Church</span>
          </div>
        </Link>

        <button 
          className={styles.mobileMenuButton}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isMobileMenuOpen && (
          <div 
            className={styles.mobileMenuOverlay}
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        <div className={`${styles.navLinks} ${isMobileMenuOpen ? styles.open : ''}`}>
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.href}
                href={link.href}
                className={styles.navLink}
                onClick={(e) => {
                  if (link.href === '#') {
                    e.preventDefault();
                  }
                  setIsMobileMenuOpen(false);
                }}
              >
                <Icon size={16} />
                <span>{link.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
