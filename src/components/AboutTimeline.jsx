import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { timelineData } from '../data/siteData';

gsap.registerPlugin(ScrollTrigger);

export default function AboutTimeline({ onOpenAboutModal }) {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const wrapperRef = useRef(null);
  const [activeYearIndex, setActiveYearIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header text reveal
      gsap.fromTo(
        '.about_section_title',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about_header_area',
            start: 'top 80%',
          }
        }
      );

      // Horizontal Pinned Timeline for Desktop
      const mm = gsap.matchMedia();

      mm.add('(min-width: 992px)', () => {
        const wrapper = wrapperRef.current;
        const track = trackRef.current;
        if (!wrapper || !track) return;

        const maxScroll = () => wrapper.scrollWidth - window.innerWidth + window.innerWidth * 0.15;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: track,
            start: 'top top',
            end: () => `+=${Math.max(window.innerHeight * 2.5, wrapper.scrollWidth)}`,
            pin: true,
            pinSpacing: true,
            scrub: 0.8,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const idx = Math.min(
                timelineData.length - 1,
                Math.floor(self.progress * timelineData.length)
              );
              setActiveYearIndex(idx);
            }
          }
        });

        tl.fromTo(
          wrapper,
          { x: () => `${window.innerWidth * 0.1}px` },
          { x: () => `-${maxScroll()}px`, ease: 'none' }
        );

        // Animate individual card images on scrub
        gsap.utils.toArray('.year_item').forEach((item) => {
          const img = item.querySelector('.year_image img');
          if (img) {
            gsap.fromTo(
              img,
              { scale: 1.15 },
              {
                scale: 1,
                ease: 'power1.out',
                scrollTrigger: {
                  trigger: item,
                  containerAnimation: tl,
                  start: 'left center',
                  end: 'right center',
                  scrub: true,
                }
              }
            );
          }
        });
      });

      // Tablet and Mobile fallback
      mm.add('(max-width: 991px)', () => {
        gsap.utils.toArray('.year_item').forEach((item) => {
          gsap.fromTo(
            item,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: item,
                start: 'top 85%',
              }
            }
          );
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="about_section">
      <div className="padding_global">
        <div className="container">
          <div className="about_header_area">
            <div className="about_left_area">
              <div className="section_caption">
                <div className="section_caption_circle"></div>
                <p className="section_caption_text">
                  Inside <span className="text-italic">(the)</span> Journey
                </p>
              </div>

              <h2 data-text-reveal="" className="heading_style_h4 about_section_title">
                COMPUTER SCIENCE &amp; ENGINEERING UNDERGRADUATE, FULL-STACK DEVELOPER &amp; CO-FOUNDER OF FLYFOUR INFOTECH
              </h2>

              <button
                type="button"
                onClick={onOpenAboutModal}
                className="button_primary w-inline-block"
                style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
              >
                <div className="button_line_mask_wrapper">
                  <div className="button_line_mask"></div>
                  <div className="button_line_mask _2"></div>
                  <div className="button_line_mask _3"></div>
                </div>
                <div className="button_line"></div>
                <div className="button_text_wrapper">
                  <p className="button_text">Learn More</p>
                  <p className="button_text second_text">Learn More</p>
                </div>
              </button>
            </div>

            <div className="about_section_pattern">
              <img
                src="/images/hero.jpg"
                loading="lazy"
                alt="Abstract geometric design"
                className="image-cover"
                style={{ borderRadius: '24px', aspectRatio: '1/1', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* History Sequence (2020 - 2025) */}
      <div ref={trackRef} className="about_track">
        <div className="about_sticky">
          <div className="about_year_item_frame">
            <div ref={wrapperRef} className="year_wrapper">
              {timelineData.map((item, index) => {
                const isActive = index === activeYearIndex;
                return (
                  <div
                    key={item.year}
                    className={`year_item ${isActive ? 'is-active-year' : 'is-inactive-year'}`}
                    style={{
                      transition: 'opacity 0.4s ease, transform 0.4s ease',
                      opacity: isActive ? 1 : 0.45,
                      transform: isActive ? 'scale(1)' : 'scale(0.96)'
                    }}
                  >
                    <div className="year_text_wrapper">
                      <div
                        className="floating_text is-about"
                        style={{ backgroundColor: item.badgeBg }}
                      >
                        {item.badge}
                      </div>
                      <h2 className="year_text">{item.year}</h2>
                      <div className="year_text_line"></div>
                    </div>

                    <div className="year_content">
                      <div className="year_divider"></div>
                      <p className="year_info_text">{item.text}</p>
                      <div className="year_image">
                        <img
                          src={item.image}
                          loading="lazy"
                          alt={`Nandan Gaikwad ${item.year} - ${item.badge}`}
                          className="image-cover"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
