import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="not_found_page_view">
      <div className="padding_global">
        <div className="container" style={{ minHeight: '75vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="not_found_content" style={{ textAlign: 'center', maxWidth: '600px' }}>
            <span className="not_found_badge">ERROR 404</span>
            <h1 className="not_found_giant_num">404</h1>
            <h2 className="heading_style_h3" style={{ color: '#ffffff', marginBottom: '16px' }}>
              LOST IN DIGITAL REALMS
            </h2>
            <p className="text-18px" style={{ color: '#a1a1aa', marginBottom: '40px', lineHeight: 1.6 }}>
              The page or resource you are looking for has been relocated, archived, or does not exist in this sector.
            </p>

            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link
                to="/"
                className="modal_cta_button"
                style={{ textDecoration: 'none', background: '#ab9bff', color: '#09090b' }}
              >
                <span>Return To Homepage</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                to="/projects"
                className="modal_cta_button"
                style={{ textDecoration: 'none', background: 'transparent', border: '1px solid #3f3f46', color: '#ffffff' }}
              >
                <span>Browse All Projects</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
