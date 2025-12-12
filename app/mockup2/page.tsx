'use client';

import Link from 'next/link';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import Navigation from '@/components/mockup/mockup2/Navigation';
import HeroSection from '@/components/mockup/mockup2/HeroSection';
import AboutSection from '@/components/mockup/mockup2/AboutSection';
import ServicesSection from '@/components/mockup/mockup2/ServicesSection';
import TeamSection from '@/components/mockup/mockup2/TeamSection';
import WorksSection from '@/components/mockup/mockup2/WorksSection';
import TestimonialsSection from '@/components/mockup/mockup2/TestimonialsSection';
import BlogSection from '@/components/mockup/mockup2/BlogSection';
import ParallaxSection from '@/components/mockup/mockup2/ParallaxSection';
import ActionSection from '@/components/mockup/mockup2/ActionSection';
import ContactSection from '@/components/mockup/mockup2/ContactSection';
import Footer from '@/components/mockup/mockup2/Footer';
import LivestreamPopup from '@/components/mockup/mockup2/LivestreamPopup';

export default function Mockup2() {
  useSmoothScroll({ duration: 1200 });

  return (
    <div style={{minWidth:'320px'}}>
      <LivestreamPopup />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <WorksSection />
      <TestimonialsSection />
      <BlogSection />
      <ParallaxSection
        id="parallax"
        backgroundImage="/prayer.webp"
        quote="All are welcomed at St. Aidan's! Come as you are!"
      />
      <ActionSection />
      <ContactSection />
      <Footer />

      <Link href="/" className="fixed-btn">
        Back to Menu
      </Link>
    </div>
  );
}
