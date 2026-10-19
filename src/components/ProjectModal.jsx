import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;

    document.body.style.overflow = 'hidden';

    gsap.fromTo(
      '.project_modal_backdrop',
      { opacity: 0 },
      { opacity: 1, duration: 0.4, ease: 'power2.out' }
    );

    gsap.fromTo(
      '.project_modal_container',
      { y: 60, opacity: 0, scale: 0.96 },
      { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: 'power3.out', delay: 0.1 }
    );

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="project_modal_backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="project_modal_container"
        onClick={(e) => e.stopPropagation()}
        style={{ borderTop: `6px solid ${project.cardBg}` }}
      >
        <button
          className="project_modal_close"
          onClick={onClose}
          aria-label="Close modal"
        >
          ✕
        </button>

        <div className="project_modal_header">
          <span className="floating_text is-modal" style={{ backgroundColor: project.cardBg }}>
            {project.category}
          </span>
          <h2 className="project_modal_title">{project.title}</h2>
          <p className="project_modal_desc">{project.description}</p>
        </div>

        <div className="project_modal_meta_grid">
          <div className="meta_item">
            <span className="meta_label">Client</span>
            <span className="meta_value">{project.client}</span>
          </div>
          <div className="meta_item">
            <span className="meta_label">Year</span>
            <span className="meta_value">{project.year}</span>
          </div>
          <div className="meta_item">
            <span className="meta_label">Country</span>
            <span className="meta_value">{project.country || 'Global'}</span>
          </div>
        </div>

        <div className="project_modal_image_wrap" style={{ backgroundColor: project.visualBg }}>
          <img src={project.image} alt={project.title} className="image-cover" />
        </div>

        <div className="project_modal_body">
          <div className="modal_section">
            <h3>The Challenge</h3>
            <p>{project.challenge}</p>
          </div>

          <div className="modal_section">
            <h3>The Solution</h3>
            <p>{project.solution}</p>
          </div>

          <div className="modal_section">
            <h3>Key Deliverables</h3>
            <div className="deliverables_tags">
              {project.deliverables && project.deliverables.map((item, idx) => (
                <span key={idx} className="deliverable_tag">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="project_modal_footer" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Link
            to={`/projects/${project.slug || project.id}`}
            className="modal_cta_button"
            onClick={onClose}
            style={{ textDecoration: 'none', background: '#ffffff', color: '#09090b' }}
          >
            <span>View Full Case Study & Gallery</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </Link>
          <Link
            to="/contact-us"
            className="modal_cta_button"
            onClick={onClose}
            style={{ textDecoration: 'none', background: project.cardBg, color: '#000000' }}
          >
            <span>Start A Similar Project</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
