import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance sequence matching 0.9-1.2s timing
      const tl = gsap.timeline({ delay: 0.2 });

      tl.fromTo(
        '[data-hero-title]',
        { yPercent: 100, clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' },
        {
          yPercent: 0,
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          duration: 1.1,
          ease: 'power3.out'
        }
      )
      .fromTo(
        '[data-hero-subtitle]',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' },
        '-=0.6'
      )
      .fromTo(
        '[data-hero-text]',
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' },
        '-=0.5'
      )
      .fromTo(
        '.hero_social_links, .hero_stat',
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out' },
        '-=0.5'
      )
      .fromTo(
        '[data-hero-image]',
        { scale: 1.12, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.3, ease: 'power3.out' },
        '-=0.9'
      );

      // Subtle parallax on scroll (5-12% relative to scroll)
      gsap.to('[data-hero-image]', {
        yPercent: 10,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        }
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="hero_section">
      <div className="hero_heading">
        <h1 data-hero-title="">NANDAN GAIKWAD</h1>
      </div>

      <div className="hero_wrapper">
        <div className="container">
          <div className="hero_content_wrapper">
            <h2 data-hero-subtitle="" className="hero_sub_title">
              COMPUTER SCIENCE &amp; ENGINEERING • FULL-STACK DEVELOPER
            </h2>
            <p data-hero-text="" className="hero_info">
              I build software, AI systems, and technology experiences at the intersection of engineering and innovation.
            </p>
          </div>

          <div className="hero_proof_area">
            <div className="hero_social_links">
              <p className="text-weight-medium color-white">Connect</p>
              <div className="hero_social_line"></div>
              <div className="hero_social_icon_wrapper">
                <a aria-label="GitHub" href="https://github.com/Nandangaikwad1710" target="_blank" rel="noreferrer" className="hero_social_icon_link w-inline-block">
                  <div className="hero_social_icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fill="white"/>
                    </svg>
                  </div>
                </a>

                <a aria-label="LinkedIn" href="https://www.linkedin.com/in/nandan-gaikwad-157a4a245" target="_blank" rel="noreferrer" className="hero_social_icon_link w-inline-block">
                  <div className="hero_social_icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.2a1.66 1.66 0 0 0-1.66 1.66 1.66 1.66 0 0 0 1.66 1.66 1.66 1.66 0 0 0 1.66-1.66A1.66 1.66 0 0 0 7.83 6.2z" fill="white"/>
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            <div className="hero_stat">
              <div className="hero_stat_icon">
                <svg width="100%" height="100%" viewBox="0 0 51 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.8571 0H30.1429V6.28571H23.8571V0Z" fill="white"/>
                  <path d="M0 0H6.28571V6.28571H0V0Z" fill="white"/>
                  <path d="M35.7857 13.9286H42.0714V20.2143H35.7857V13.9286Z" fill="white"/>
                  <path d="M13.9286 13.9286H20.2143V20.2143H13.9286V13.9286Z" fill="white"/>
                  <path d="M44.7143 27.8571H51V34.1429H44.7143V27.8571Z" fill="white"/>
                  <path d="M27.8571 27.8571H34.1429V34.1429H27.8571V27.8571Z" fill="white"/>
                  <path d="M35.7857 41.7857H42.0714V48.0714H35.7857V41.7857Z" fill="white"/>
                  <path d="M13.9286 41.7857H20.2143V48.0714H13.9286V41.7857Z" fill="white"/>
                  <path d="M23.8571 55.7143H30.1429V62H23.8571V55.7143Z" fill="white"/>
                  <path d="M0 55.7143H6.28571V62H0V55.7143Z" fill="white"/>
                </svg>
              </div>
              <div className="hero_stat_content">
                <p className="hero_stat_title">400+</p>
                <p className="hero_stat_info">Customers Served</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero background artwork layer */}
      <div
        data-hero-image=""
        className="hero_image"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url('/images/ref_hero.webp')`
        }}
      ></div>
    </section>
  );
}
