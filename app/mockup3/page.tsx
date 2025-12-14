'use client';

import Link from 'next/link';
import Header from '@/components/mockup/mockup3/Header';
import HeroSlider from '@/components/mockup/mockup3/HeroSlider';
import NextEventSection from '@/components/mockup/mockup3/NextEventSection';
import WelcomeSection from '@/components/mockup/mockup3/WelcomeSection';
import MissionSection from '@/components/mockup/mockup3/MissionSection';
import InfoSection from '@/components/mockup/mockup3/InfoSection';
import EventsSection from '@/components/mockup/mockup3/EventsSection';
import GallerySection from '@/components/mockup/mockup3/GallerySection';
import CallToActionSection from '@/components/mockup/mockup3/CallToActionSection';
import DonationSection from '@/components/mockup/mockup3/DonationSection';
import BlogSection from '@/components/mockup/mockup3/BlogSection';
import TestimonialsSection from '@/components/mockup/mockup3/TestimonialsSection';
import JoinUsSection from '@/components/mockup/mockup3/JoinUsSection';
import Footer from '@/components/mockup/mockup3/Footer';
import ScrollToTop from '@/components/mockup/mockup3/ScrollToTop';

export default function Mockup3() {
  return (
    <div style={{ minWidth: '320px' }}>
      <Header />
      <HeroSlider />
      <div className="page_content_wrap">
        <div className="content">
          <section className="post_content">
            <NextEventSection />
            <WelcomeSection />
            <MissionSection />
            <InfoSection />
            <EventsSection />
            <GallerySection />
            <CallToActionSection />
            <DonationSection />
            <BlogSection />
            <TestimonialsSection />
            <JoinUsSection />
          </section>
        </div>
      </div>
      <Footer />
      <ScrollToTop />
      
      <Link href="/" className="fixed-btn">
        Back to Menu
      </Link>
    </div>
  );
}
