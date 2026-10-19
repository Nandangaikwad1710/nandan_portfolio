import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { servicesData } from '../data/siteData';
import CTASection from '../components/CTASection';

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(0);

  const service = servicesData.find((s) => s.slug === slug || s.id === slug);

  useEffect(() => {
    if (!service) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.service_detail_hero_title',
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }
      );
      gsap.fromTo(
        '.capability_card',
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.capabilities_grid',
            start: 'top 85%'
          }
        }
      );
    });

    return () => ctx.revert();
  }, [service, slug]);

  if (!service) {
    return (
      <div className="padding_global" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', maxWidth: '500px' }}>
          <h1 className="heading_style_h2" style={{ color: '#ffffff', marginBottom: '16px' }}>Service Not Found</h1>
          <p className="text-18px" style={{ color: '#a1a1aa', marginBottom: '32px' }}>
            The requested service could not be located.
          </p>
          <button
            onClick={() => navigate('/service')}
            className="modal_cta_button"
            style={{ margin: '0 auto' }}
          >
            ← Back to All Services
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="service_detail_page">
      {/* Editorial Hero */}
      <section className="service_detail_hero">
        <div className="padding_global">
          <div className="container">
            <div className="service_detail_header">
              <div className="floating_text" style={{ marginBottom: '16px' }}>
                SPECIALIZED CAPABILITY
              </div>
              <h1 className="service_detail_hero_title">{service.title}</h1>
              <p className="service_detail_headline">{service.headline}</p>
              <p className="service_detail_desc">{service.description}</p>
            </div>

            {/* Video Feature */}
            <div className="service_detail_video_wrapper">
              <video
                src={service.video}
                autoPlay
                loop
                muted
                playsInline
                className="image-cover service_detail_video"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="service_capabilities_section" style={{ padding: '100px 0' }}>
        <div className="padding_global">
          <div className="container">
            <div className="section_header" style={{ marginBottom: '50px' }}>
              <div className="floating_text" style={{ marginBottom: '16px' }}>CORE COMPETENCIES</div>
              <h2 className="heading_style_h2" style={{ color: '#ffffff', textTransform: 'uppercase' }}>
                DEEP DOMAIN CAPABILITIES
              </h2>
            </div>

            <div className="capabilities_grid">
              {service.capabilities && service.capabilities.map((cap, idx) => (
                <div key={idx} className="capability_card">
                  <span className="capability_number">0{idx + 1}</span>
                  <h3 className="capability_title">{cap}</h3>
                  <div className="capability_arrow">↗</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Process Section */}
      {service.process && service.process.length > 0 && (
        <section className="service_process_section" style={{ paddingBottom: '100px' }}>
          <div className="padding_global">
            <div className="container">
              <div className="section_header" style={{ marginBottom: '50px' }}>
                <div className="floating_text" style={{ marginBottom: '16px' }}>OUR METHODOLOGY</div>
                <h2 className="heading_style_h2" style={{ color: '#ffffff', textTransform: 'uppercase' }}>
                  THE EXECUTION PLAYBOOK
                </h2>
              </div>

              <div className="service_process_grid">
                {service.process.map((step, idx) => (
                  <div key={idx} className="service_process_card">
                    <span className="step_number_badge">{step.step}</span>
                    <h3 className="step_title">{step.title}</h3>
                    <p className="step_desc">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Deliverables Section */}
      {service.deliverables && service.deliverables.length > 0 && (
        <section className="service_deliverables_section" style={{ paddingBottom: '100px' }}>
          <div className="padding_global">
            <div className="container">
              <div className="deliverables_box">
                <h3 className="heading_style_h3" style={{ color: '#ffffff', marginBottom: '20px' }}>
                  Standard Tangible Deliverables
                </h3>
                <div className="deliverables_tags">
                  {service.deliverables.map((item, idx) => (
                    <span key={idx} className="deliverable_tag is-highlight">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQs Section */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="service_faq_section" style={{ paddingBottom: '120px' }}>
          <div className="padding_global">
            <div className="container">
              <div className="section_header" style={{ marginBottom: '40px' }}>
                <div className="floating_text" style={{ marginBottom: '16px' }}>QUESTIONS & ANSWERS</div>
                <h2 className="heading_style_h2" style={{ color: '#ffffff', textTransform: 'uppercase' }}>
                  FREQUENTLY ASKED QUESTIONS
                </h2>
              </div>

              <div className="faq_accordion">
                {service.faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className={`faq_item ${openFaq === idx ? 'is-open' : ''}`}
                    onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  >
                    <div className="faq_question_row">
                      <span className="faq_question">{faq.q}</span>
                      <span className="faq_toggle_icon">{openFaq === idx ? '−' : '+'}</span>
                    </div>
                    {openFaq === idx && (
                      <div className="faq_answer">
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Global CTA */}
      <CTASection />
    </div>
  );
}
