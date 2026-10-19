import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { projectsData } from '../data/siteData';
import CTASection from '../components/CTASection';

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const currentIndex = projectsData.findIndex(
    (p) => p.slug === slug || p.id === slug
  );

  const project = currentIndex !== -1 ? projectsData[currentIndex] : null;

  const prevProject = project
    ? projectsData[(currentIndex - 1 + projectsData.length) % projectsData.length]
    : null;
  const nextProject = project
    ? projectsData[(currentIndex + 1) % projectsData.length]
    : null;

  useEffect(() => {
    if (!project) return;

    const ctx = gsap.context(() => {
      // Hero entrance
      gsap.fromTo(
        '.project_detail_hero_title',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );
      gsap.fromTo(
        '.project_meta_item',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out', delay: 0.2 }
      );
      gsap.fromTo(
        '.project_hero_image_frame',
        { opacity: 0, scale: 0.97 },
        { opacity: 1, scale: 1, duration: 0.9, ease: 'power3.out', delay: 0.3 }
      );

      // Scroll reveals for editorial body & gallery
      gsap.utils.toArray('.detail_reveal').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%'
            }
          }
        );
      });
    });

    return () => ctx.revert();
  }, [project, slug]);

  if (!project) {
    return (
      <div className="padding_global" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', maxWidth: '500px' }}>
          <h1 className="heading_style_h2" style={{ color: '#ffffff', marginBottom: '16px' }}>Project Not Found</h1>
          <p className="text-18px" style={{ color: '#a1a1aa', marginBottom: '32px' }}>
            The case study you are searching for might have been archived or moved.
          </p>
          <button
            onClick={() => navigate('/projects')}
            className="modal_cta_button"
            style={{ margin: '0 auto' }}
          >
            ← Back to All Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="project_detail_page">
      {/* Editorial Hero */}
      <section className="project_detail_hero">
        <div className="padding_global">
          <div className="container">
            <div className="project_detail_header">
              <div className="project_category_badge" style={{ backgroundColor: project.cardBg }}>
                {project.category}
              </div>
              <h1 className="project_detail_hero_title">{project.title}</h1>
            </div>

            {/* Metadata Sidebar / Bar */}
            <div className="project_meta_bar">
              <div className="project_meta_item">
                <span className="meta_title">Client</span>
                <span className="meta_detail">{project.client}</span>
              </div>
              <div className="project_meta_item">
                <span className="meta_title">Country</span>
                <span className="meta_detail">{project.country || 'Global'}</span>
              </div>
              <div className="project_meta_item">
                <span className="meta_title">Expertise</span>
                <span className="meta_detail">{project.expertise || project.role || 'Design & Engineering'}</span>
              </div>
              <div className="project_meta_item">
                <span className="meta_title">Duration</span>
                <span className="meta_detail">{project.duration || project.year}</span>
              </div>
              <div className="project_meta_item">
                <span className="meta_title">Visit Site</span>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="meta_detail meta_link"
                >
                  Live Preview ↗
                </a>
              </div>
            </div>

            {/* Hero Image Showcase */}
            <div
              className="project_hero_image_frame"
              style={{ backgroundColor: project.visualBg || project.cardBg }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="image-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Overview Section */}
      <section className="project_overview_section detail_reveal">
        <div className="padding_global">
          <div className="container">
            <div className="overview_grid">
              <div className="overview_left">
                <div className="floating_text" style={{ marginBottom: '16px' }}>PROJECT OVERVIEW</div>
                <h2 className="heading_style_h2" style={{ color: '#ffffff', textTransform: 'uppercase' }}>
                  TECHNICAL OVERVIEW &amp; SYSTEM DESIGN
                </h2>
              </div>
              <div className="overview_right">
                <p className="text-18px" style={{ color: '#a1a1aa', lineHeight: 1.7, marginBottom: '24px' }}>
                  {project.overview}
                </p>
                <p className="text-18px" style={{ color: '#a1a1aa', lineHeight: 1.7 }}>
                  {project.challenge}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="project_gallery_section detail_reveal" style={{ padding: '80px 0' }}>
          <div className="padding_global">
            <div className="container">
              <div className="section_header" style={{ marginBottom: '40px' }}>
                <div className="floating_text" style={{ marginBottom: '16px' }}>INTERFACE &amp; ARTIFACTS</div>
                <h2 className="heading_style_h2" style={{ color: '#ffffff', textTransform: 'uppercase' }}>
                  ARCHITECTURE &amp; SYSTEM VIEWS
                </h2>
              </div>

              <div className="project_gallery_grid">
                {project.gallery.map((imgUrl, i) => (
                  <div key={i} className={`gallery_item_wrap ${i === 0 ? 'is-wide' : ''}`}>
                    <img
                      src={imgUrl}
                      alt={`${project.title} gallery preview ${i + 1}`}
                      className="image-cover gallery_img"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* The Result & Deliverables */}
      <section className="project_result_section detail_reveal" style={{ paddingBottom: '100px' }}>
        <div className="padding_global">
          <div className="container">
            <div className="result_card" style={{ borderLeft: `6px solid ${project.cardBg}` }}>
              <div className="floating_text" style={{ marginBottom: '16px' }}>THE RESULT</div>
              <h2 className="heading_style_h3" style={{ color: '#ffffff', marginBottom: '20px' }}>
                {project.solution}
              </h2>
              {project.results && (
                <p className="text-18px" style={{ color: '#d4d4d8', marginBottom: '32px', lineHeight: 1.7 }}>
                  {project.results}
                </p>
              )}

              <div className="deliverables_wrapper">
                <span className="deliverables_title">Deliverables Delivered:</span>
                <div className="deliverables_tags">
                  {project.deliverables && project.deliverables.map((item, idx) => (
                    <span key={idx} className="deliverable_tag" style={{ borderColor: project.cardBg }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Previous / Next Project Navigation Bar */}
      <section className="project_pagination_bar detail_reveal">
        <div className="padding_global">
          <div className="container">
            <div className="pagination_split">
              {prevProject && (
                <Link
                  to={`/projects/${prevProject.slug}`}
                  className="pagination_nav_item is-prev w-inline-block"
                  style={{ textDecoration: 'none' }}
                >
                  <span className="pagination_sub">← PREVIOUS PROJECT</span>
                  <span className="pagination_title">{prevProject.title}</span>
                </Link>
              )}

              {nextProject && (
                <Link
                  to={`/projects/${nextProject.slug}`}
                  className="pagination_nav_item is-next w-inline-block"
                  style={{ textDecoration: 'none' }}
                >
                  <span className="pagination_sub">NEXT PROJECT →</span>
                  <span className="pagination_title">{nextProject.title}</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Global CTA */}
      <CTASection />
    </div>
  );
}
