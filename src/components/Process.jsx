import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { processSteps } from '../data/siteData';

gsap.registerPlugin(ScrollTrigger);

export default function Process() {
  const containerRef = useRef(null);
  const [hoveredStep, setHoveredStep] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header entrance
      gsap.fromTo(
        '.step_section_title, .step_section_info',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.section_header.is_step',
            start: 'top 85%',
          }
        }
      );

      // Connecting line reveal
      gsap.fromTo(
        '.steps_line',
        { scaleX: 0 },
        {
          scaleX: 1,
          transformOrigin: 'left center',
          duration: 1.2,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: '.steps_wrapper',
            start: 'top 80%',
          }
        }
      );

      // Step items staggered entrance
      gsap.fromTo(
        '.step_item',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.steps_wrapper',
            start: 'top 75%',
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="step_section">
      <div className="padding_global">
        <div className="container">
          <div className="section_header is_step">
            <h2 data-title-anim="" className="heading_style_h4 step_section_title">
              DISCOVER, ARCHITECT, BUILD, DEPLOY
            </h2>
            <p data-text-anim="" className="step_section_info">
              A disciplined engineering workflow from requirements to reliable production release.
            </p>
          </div>

          <div className="steps_wrapper">
            <div className="steps_line"></div>

            {processSteps.map((step, index) => {
              const isHovered = hoveredStep === index;
              return (
                <div
                  key={step.number}
                  className={`step_item ${isHovered ? 'is-hovered' : ''}`}
                  onMouseEnter={() => setHoveredStep(index)}
                  onMouseLeave={() => setHoveredStep(null)}
                >
                  <div className="step_line_icon">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.33333 31.6686L0 11.6686L15.8333 0.00195312L31.6667 11.6686L25.3333 31.6686H6.33333Z" fill="currentColor" />
                    </svg>
                  </div>

                  <div className="step_item_inner">
                    <p className="step_count">{step.number}</p>
                    <div className="step_title_wrapper">
                      <h3 className="step_title">{step.title}</h3>
                      <h3 className={`step_title is_gradiant ${isHovered ? 'active' : ''}`}>
                        {step.title}
                      </h3>
                    </div>

                    <div className="step_item_info_wrap">
                      <p className="step_info">{step.info}</p>
                    </div>

                    <div className={`step_icon ${isHovered ? 'rotated' : ''}`}>
                      <div className="step_icon_code_embed">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M24 12.0001L16 20L8 12" stroke="black" strokeWidth="2" strokeMiterlimit="16" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
