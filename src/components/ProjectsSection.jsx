import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { projectsData } from '../data/siteData';
import ProjectModal from './ProjectModal';

gsap.registerPlugin(ScrollTrigger);

const FEATURED_PROJECT_IDS = [
  'f1-live-telemetry',
  'shadow-ai-agent',
  'krishiai-agri-ai',
  'empay-smart-hrms'
];

export default function ProjectsSection() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header entrance
      gsap.fromTo(
        '.work_section_title, [data-floating-badge].is-work',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.section_header.is_work',
            start: 'top 85%',
          }
        }
      );

      // Desktop 3D Card Stacking Scrubbed by ScrollTrigger
      const mm = gsap.matchMedia();

      mm.add('(min-width: 992px)', () => {
        // Explicitly initialize 3D card transforms
        gsap.set('.work_collection_list_wrapper:nth-child(1)', { y: 0, scale: 1, rotationX: 0, transformOrigin: 'center center' });
        gsap.set('.work_collection_list_wrapper:nth-child(2)', { y: 40, scale: 0.94, rotationX: 0, transformOrigin: 'center center' });
        gsap.set('.work_collection_list_wrapper:nth-child(3)', { y: 80, scale: 0.88, rotationX: 0, transformOrigin: 'center center' });
        gsap.set('.work_collection_list_wrapper:nth-child(4)', { y: 120, scale: 0.82, rotationX: 0, transformOrigin: 'center center' });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: trackRef.current,
            start: 'top 80px',
            end: '+=2400',
            pin: true,
            pinSpacing: true,
            scrub: 0.8,
            invalidateOnRefresh: true
          }
        });

        // Stage 1 (pos: 0.1 to 0.6): Card 1 flips in 3D perspective, Card 2 advances to front
        tl.to('.work_collection_list_wrapper:nth-child(1)', {
          yPercent: -120,
          rotationX: 45,
          ease: 'none'
        }, 0.1)
        .to('.work_collection_list_wrapper:nth-child(2)', {
          y: 0,
          scale: 1,
          ease: 'none'
        }, 0.1)
        .to('.work_collection_list_wrapper:nth-child(3)', {
          y: 40,
          scale: 0.94,
          ease: 'none'
        }, 0.1)
        .to('.work_collection_list_wrapper:nth-child(4)', {
          y: 80,
          scale: 0.88,
          ease: 'none'
        }, 0.1);

        // Stage 2 (pos: 0.61 to 1.11): Card 2 flips in 3D perspective, Card 3 advances to front
        tl.to('.work_collection_list_wrapper:nth-child(2)', {
          yPercent: -120,
          rotationX: 45,
          ease: 'none'
        }, 0.61)
        .to('.work_collection_list_wrapper:nth-child(3)', {
          y: 0,
          scale: 1,
          ease: 'none'
        }, 0.61)
        .to('.work_collection_list_wrapper:nth-child(4)', {
          y: 40,
          scale: 0.94,
          ease: 'none'
        }, 0.61);

        // Stage 3 (pos: 1.12 to 1.62): Card 3 flips in 3D perspective, Card 4 advances to front
        tl.to('.work_collection_list_wrapper:nth-child(3)', {
          yPercent: -120,
          rotationX: 45,
          ease: 'none'
        }, 1.12)
        .to('.work_collection_list_wrapper:nth-child(4)', {
          y: 0,
          scale: 1,
          ease: 'none'
        }, 1.12);

        // Stage 4 (pos: 1.63 to 2.0): Settle phase - Card 4 is displayed in full before pin releases
        tl.to({}, { duration: 0.38 }, 1.63);
      });

      // Mobile / Tablet normal scroll reveals
      mm.add('(max-width: 991px)', () => {
        gsap.utils.toArray('.work_collection_list_wrapper').forEach((card) => {
          gsap.fromTo(
            card,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
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
    <>
      <section ref={sectionRef} id="projects" className="work_section">
        <div className="padding_global">
          <div className="container">
            <div className="section_header is_work">
              <h2 data-title-anim="" className="work_section_title">
                FEATURED PROJECTS
              </h2>
              <div data-floating-badge="" className="floating_text is-work">
                SELECTED WORK
              </div>
            </div>

            <div ref={trackRef} className="work_items_track">
              <div className="work_items_wrapper">
                {FEATURED_PROJECT_IDS
                  .map(id => projectsData.find(p => p.id === id))
                  .filter(Boolean)
                  .map((project, idx) => {
                    const zIndex = 4 - idx;

                  return (
                    <div
                      key={project.id}
                      data-work-item=""
                      className={`work_collection_list_wrapper ${idx > 0 ? `_${idx + 1}` : ''}`}
                      style={{ zIndex }}
                    >
                      <div className="w-dyn-items">
                        <div
                          className={`work_item ${idx > 0 ? `_${idx + 1}` : ''}`}
                          style={{ backgroundColor: project.cardBg }}
                        >
                          <div className="work_left_content">
                            <a
                              href={`#${project.id}`}
                              onClick={(e) => {
                                e.preventDefault();
                                setSelectedProject(project);
                              }}
                              className="work_link w-inline-block"
                            >
                              <h3 className="heading_style_h4 work_title">
                                {project.title}
                              </h3>
                            </a>

                            <p className="work_description_text">
                              {project.description}
                            </p>

                            <button
                              type="button"
                              data-button-primary-v2=""
                              onClick={() => setSelectedProject(project)}
                              className="button_primary v2 w-inline-block"
                              style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
                            >
                              <div className="button_line_mask_wrapper">
                                <div
                                  className="button_line_mask_v2"
                                  style={{ background: project.cardBg }}
                                ></div>
                                <span
                                  className="button_line_mask_v2 _2"
                                  style={{ background: project.cardBg }}
                                ></span>
                                <div
                                  className="button_line_mask_v2 _3"
                                  style={{ background: project.cardBg }}
                                ></div>
                              </div>
                              <div className="button_line"></div>
                              <div className="button_text_wrapper">
                                <p className="button_text_v2">Learn More</p>
                                <p className="button_text_v2 second_text">Learn More</p>
                              </div>
                            </button>
                          </div>

                          <div
                            className="work_right_content"
                            style={{ backgroundColor: project.visualBg }}
                            onClick={() => setSelectedProject(project)}
                            role="button"
                            tabIndex={0}
                            aria-label={`View ${project.title}`}
                            onKeyDown={(e) => e.key === 'Enter' && setSelectedProject(project)}
                          >
                            <div className="work_image_visual">
                              <img
                                src={project.image}
                                loading="lazy"
                                alt={project.title}
                                className="image-cover"
                              />
                            </div>
                          </div>
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

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
