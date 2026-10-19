import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { projectsData } from '../data/siteData';
import CTASection from '../components/CTASection';

const CATEGORIES = [
  'ALL',
  'MOTORSPORT TECH',
  'AI & AUTOMATION',
  'FULL-STACK',
  'HEALTHCARE SOFTWARE',
  'WEB SECURITY',
  'UI/UX & WEB'
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  useEffect(() => {
    // Entrance animations
    gsap.fromTo(
      '.projects_hero_title',
      { opacity: 0, y: 35 },
      { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }
    );
    gsap.fromTo(
      '.project_grid_card',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out', delay: 0.2 }
    );
  }, []);

  const filteredProjects = projectsData.filter((item) => {
    if (activeFilter === 'ALL') return true;
    const cat1 = (item.category || '').toUpperCase();
    const cat2 = (item.categorySecondary || '').toUpperCase();
    const tags = (item.tags || []).map((t) => t.toUpperCase());
    return cat1.includes(activeFilter) || cat2.includes(activeFilter) || tags.includes(activeFilter);
  });

  return (
    <div className="projects_page_view">
      {/* Editorial Hero */}
      <section className="projects_hero_section">
        <div className="padding_global">
          <div className="container">
            <div className="projects_hero_header">
              <div className="floating_text" style={{ marginBottom: '20px' }}>
                SELECTED PROJECTS
              </div>
              <h1 className="projects_hero_title">
                ENGINEERING SYSTEMS AT THE INTERSECTION OF INNOVATION.
              </h1>
              <p className="projects_hero_subtitle">
                An archive of full-stack platforms, autonomous AI agents, telemetry dashboards, enterprise HR solutions, and healthcare architectures engineered by Nandan Gaikwad.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="project_filter_bar" role="tablist" aria-label="Project Categories">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={activeFilter === cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`filter_pill ${activeFilter === cat ? 'is-active' : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Project Grid */}
            <div className="projects_archive_grid">
              {filteredProjects.map((project) => (
                <Link
                  key={project.id}
                  to={`/projects/${project.slug}`}
                  className="project_grid_card w-inline-block"
                  style={{ textDecoration: 'none' }}
                >
                  <div className="project_card_media_wrap" style={{ backgroundColor: project.visualBg || project.cardBg }}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="image-cover project_card_thumb"
                      loading="lazy"
                    />
                    <div className="project_card_badge" style={{ backgroundColor: project.cardBg }}>
                      {project.category}
                    </div>
                  </div>

                  <div className="project_card_info">
                    <div className="project_card_meta_row">
                      <span className="project_card_client">{project.client}</span>
                      <span className="project_card_year">{project.year}</span>
                    </div>

                    <h3 className="project_card_title">{project.title}</h3>
                    <p className="project_card_desc">{project.description}</p>

                    <div className="project_card_cta">
                      <span>Explore Case Study</span>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </div>
                  </div>
                </Link>
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
