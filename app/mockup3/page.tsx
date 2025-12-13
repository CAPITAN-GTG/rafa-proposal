'use client';

import Link from 'next/link';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import Navigation from '@/components/mockup/mockup3/Navigation';
import HeroSection from '@/components/mockup/mockup3/HeroSection';
import AboutSection from '@/components/mockup/mockup3/AboutSection';
import LivestreamSection from '@/components/mockup/mockup3/LivestreamSection';
import ServicesSection from '@/components/mockup/mockup3/ServicesSection';
import EventsSection from '@/components/mockup/mockup3/EventsSection';
import TeamSection from '@/components/mockup/mockup3/TeamSection';
import ContactSection from '@/components/mockup/mockup3/ContactSection';
import Footer from '@/components/mockup/mockup3/Footer';

export default function Mockup3() {
  useSmoothScroll({ duration: 1200 });

  return (
    <div style={{minWidth:'320px'}}>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <LivestreamSection />
      <ServicesSection />
      <EventsSection />
      <TeamSection />
      <ContactSection />
      <Footer />

      <Link href="/" className="fixed-btn">
        Back to Menu
      </Link>
    </div>
  );
}
