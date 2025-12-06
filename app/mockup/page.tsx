'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import Navigation from '@/components/mockup/Navigation';
import HeroSection from '@/components/mockup/HeroSection';
import AboutSection from '@/components/mockup/AboutSection';
import TeamSection from '@/components/mockup/TeamSection';
import ParallaxSection from '@/components/mockup/ParallaxSection';
import WorksSection from '@/components/mockup/WorksSection';
import ActionSection from '@/components/mockup/ActionSection';
import ServicesSection from '@/components/mockup/ServicesSection';
import TestimonialsSection from '@/components/mockup/TestimonialsSection';
import BlogSection from '@/components/mockup/BlogSection';
import ContactSection from '@/components/mockup/ContactSection';
import Footer from '@/components/mockup/Footer';
import LivestreamPopup from '@/components/mockup/LivestreamPopup';

export default function Mockup() {
  useSmoothScroll({ duration: 1200 });

  return (
    <div style={{minWidth:'320px'}}>
      <Script src="/js/scrollReveal.js" strategy="afterInteractive" />
      <LivestreamPopup />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <TeamSection />
      <ParallaxSection
        id="sep"
        backgroundImage="/prayer_2.webp"
        quote="All are welcomed at St. Aidan's! Come as you are!"
        pattern={true}
      />
      <WorksSection />
      <ActionSection />
      <ServicesSection />
      <TestimonialsSection />
      <BlogSection />
      <ContactSection />
      <Footer />

      <Link href="/" className="fixed-btn">
        Back to Menu
      </Link>
    </div>
  );
}
