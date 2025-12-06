'use client';

import { useState } from 'react';
import { Menu, X, Home, Info, Calendar, Users, Gift, Phone, Video } from 'lucide-react';
import Link from 'next/link';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mobile-menu-btn"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} color="#000" /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <>
          <div 
            className="mobile-menu-overlay"
            onClick={() => setIsOpen(false)}
          />
          <nav className="mobile-menu glass-menu">
            <Link href="#home" onClick={() => setIsOpen(false)} className="mobile-nav-item">
              <Home size={20} />
              <span>Home</span>
            </Link>
            <Link href="#about" onClick={() => setIsOpen(false)} className="mobile-nav-item">
              <Info size={20} />
              <span>About</span>
            </Link>
            <Link href="#worship" onClick={() => setIsOpen(false)} className="mobile-nav-item">
              <Calendar size={20} />
              <span>Worship</span>
            </Link>
            <Link href="#ministries" onClick={() => setIsOpen(false)} className="mobile-nav-item">
              <Users size={20} />
              <span>Ministries</span>
            </Link>
            <Link href="#events" onClick={() => setIsOpen(false)} className="mobile-nav-item">
              <Calendar size={20} />
              <span>Events</span>
            </Link>
            <Link href="#contact" onClick={() => setIsOpen(false)} className="mobile-nav-item">
              <Phone size={20} />
              <span>Contact</span>
            </Link>
            <Link href="/mockup/live" onClick={() => setIsOpen(false)} className="mobile-nav-item mobile-nav-cta">
              <Video size={20} />
              <span>Watch Live</span>
            </Link>
            <Link href="/#" onClick={() => setIsOpen(false)} className="mobile-nav-item mobile-nav-cta">
              <Gift size={20} />
              <span>Give</span>
            </Link>
          </nav>
        </>
      )}
    </>
  );
}

