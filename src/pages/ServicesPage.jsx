import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { servicesData, testimonialsData } from '../data/siteData';
import CTASection from '../components/CTASection';

export default function ServicesPage() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.services_hero_title',
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }
      );
      gsap.fromTo(
        '.service_page_panel',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.services_panel_list',
            start: 'top 85%'
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="services_page_view">
      {/* Editorial Hero */}
      <section className="services_hero_section">
        <div className="padding_global">
          <div className="container">
            <div className="services_hero_header">
              <div className="floating_text" style={{ marginBottom: '20px' }}>
                TECHNICAL STACK &amp; DOMAINS
              </div>
              <h1 className="services_hero_title">
                COMPUTATIONAL LOGIC, ARCHITECTURE &amp; CLOUD SYSTEMS
              </h1>
              <p className="services_hero_subtitle">
                A comprehensive overview of programming languages, frontend frameworks, backend microservices, databases, DevOps tools, and cloud platforms engineered by Nandan Gaikwad.
              </p>
            </div>

            {/* Service Panels Stack */}
            <div className="services_panel_list">
              {servicesData.map((service, idx) => (
                <div key={service.id} className="service_page_panel">
                  <div className="service_panel_left">
                    <span className="service_panel_number">0{idx + 1}</span>
                    <h2 className="service_panel_title">{service.title}</h2>
                    <p className="service_panel_desc">{service.description}</p>

                    <div className="service_panel_tags">
                      {service.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="service_tag_pill">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="service_panel_actions" style={{ marginTop: '32px' }}>
                      <Link
                        to={`/service/${service.slug}`}
                        className="modal_cta_button"
                        style={{ textDecoration: 'none', display: 'inline-flex' }}
                      >
                        <span>Explore {service.title} In-Depth</span>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                      </Link>
                    </div>
                  </div>

                  <div className="service_panel_right">
                    <div className="service_video_container">
                      <video
                        src={service.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="image-cover service_video"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Deck */}
      <section className="service_testimonials_section" style={{ padding: '120px 0' }}>
        <div className="padding_global">
          <div className="container">
            <div className="section_header" style={{ marginBottom: '60px' }}>
              <div className="floating_text" style={{ marginBottom: '16px' }}>COLLABORATIVE IMPACT</div>
              <h2 className="heading_style_h2" style={{ color: '#ffffff', textTransform: 'uppercase' }}>
                ENDORSEMENTS &amp; COMMUNITY COLLABORATION
              </h2>
            </div>

            <div className="service_testimonials_grid">
              {testimonialsData.map((t) => (
                <div key={t.id} className={`service_feedback_card ${t.isDark ? 'is-dark' : 'is-light'}`}>
                  <div className="feedback_stars">{'★'.repeat(t.stars)}</div>
                  <blockquote className="feedback_quote">"{t.quote}"</blockquote>
                  <div className="feedback_author_row">
                    <img src={t.avatar} alt={t.author} className="feedback_avatar" />
                    <div>
                      <p className="feedback_author_name">{t.author}</p>
                      <p className="feedback_author_role">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global CTA */}
      <CTASection />
    </div>
  );
}
