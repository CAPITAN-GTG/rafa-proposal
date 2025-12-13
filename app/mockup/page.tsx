'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import Navigation from '@/components/mockup/mockup1/Navigation';
import HeroSection from '@/components/mockup/mockup1/HeroSection';
import AboutSection from '@/components/mockup/mockup1/AboutSection';
import TeamSection from '@/components/mockup/mockup1/TeamSection';
import ParallaxSection from '@/components/mockup/mockup1/ParallaxSection';
import WorksSection from '@/components/mockup/mockup1/WorksSection';
import ActionSection from '@/components/mockup/mockup1/ActionSection';
import ServicesSection from '@/components/mockup/mockup1/ServicesSection';
import TestimonialsSection from '@/components/mockup/mockup1/TestimonialsSection';
import BlogSection from '@/components/mockup/mockup1/BlogSection';
import ContactSection from '@/components/mockup/mockup1/ContactSection';
import Footer from '@/components/mockup/mockup1/Footer';
import LivestreamPopup from '@/components/mockup/mockup1/LivestreamPopup';

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
