import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import AboutTimeline from '../components/AboutTimeline';
import Process from '../components/Process';
import ProjectsSection from '../components/ProjectsSection';
import ClientMarquee from '../components/ClientMarquee';
import ServicesSection from '../components/ServicesSection';
import Showreel from '../components/Showreel';
import LeadersSection from '../components/LeadersSection';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function HomePage({ onScrollToContact }) {
  useEffect(() => {
    // Refresh ScrollTrigger when homepage mounts to ensure pinning and parallax are accurate
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  const handleScrollToContact = () => {
    if (onScrollToContact) {
      onScrollToContact();
    } else {
      const footerEl = document.querySelector('.footer');
      if (footerEl) footerEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main id="main-content">
      <Hero />
      <AboutTimeline onOpenAboutModal={handleScrollToContact} />
      <Process />
      <ProjectsSection />
      <ClientMarquee />
      <ServicesSection />
      <Showreel />
      <LeadersSection onOpenContact={handleScrollToContact} />
      <Testimonials />
      <CTASection onContactClick={handleScrollToContact} />
    </main>
  );
}
