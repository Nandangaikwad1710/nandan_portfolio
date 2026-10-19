import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { leaderBadges } from '../data/siteData';

gsap.registerPlugin(ScrollTrigger);

export default function LeadersSection({ onOpenContact }) {
  const sectionRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Rotate circular orbit on scroll progress
      gsap.to(circleRef.current, {
        rotation: 360,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        }
      });

      // Keep child images upright as parent rotates, or subtle counter-rotation
      gsap.to('.leader_circle_image', {
        rotation: -360,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="leader_section">
      <div className="leader_section_content">
        <div className="leader_section_badge">400+ CUSTOMERS SERVED</div>
        <h3 className="leader_section_title">
          Impact, Leadership &amp; <span className="text_gradiant">Delivery</span>
        </h3>

        <button
          type="button"
          onClick={onOpenContact}
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

      <div ref={circleRef} className="leader_circle_wrapper">
        {leaderBadges.map((badge, idx) => (
          <div
            key={idx}
            className={`leader_circle_item ${idx > 0 ? `_${idx + 1}` : ''}`}
          >
            <img
              src={badge.src}
              loading="eager"
              alt={badge.alt}
              className="leader_circle_image"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
