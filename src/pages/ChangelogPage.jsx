import React from 'react';
import CTASection from '../components/CTASection';

export default function ChangelogPage() {
  return (
    <div className="changelog_page_view">
      <section className="changelog_hero_section">
        <div className="padding_global">
          <div className="container is-narrow">
            <div className="section_header" style={{ marginBottom: '60px' }}>
              <div className="floating_text" style={{ marginBottom: '16px' }}>RELEASES & NOTES</div>
              <h1 className="heading_style_h1" style={{ color: '#ffffff', textTransform: 'uppercase' }}>
                STAY INFORMED ABOUT THE UPDATES
              </h1>
              <p className="text-18px" style={{ color: '#a1a1aa', marginTop: '16px', lineHeight: 1.7 }}>
                A chronological record of new releases, architectural improvements, and interaction refinements across Nandan Gaikwad's portfolio ecosystem.
              </p>
            </div>

            <div className="changelog_entries">
              {/* Version 2.0 */}
              <div className="changelog_entry_card">
                <div className="changelog_badge_row">
                  <span className="changelog_version">VER 2.0</span>
                  <span className="changelog_date">MARCH 2026</span>
                  <span className="changelog_status is-latest">LATEST FULL-STACK</span>
                </div>
                <h2 className="changelog_heading">Complete Full-Stack Platform Launch</h2>
                <ul className="changelog_list">
                  <li>Added dynamic multi-page routing with React Router for all core routes.</li>
                  <li>Implemented dedicated Project Detail pages with galleries and previous/next navigation.</li>
                  <li>Implemented dedicated Service Detail pages with capabilities, workflow playbooks, and interactive FAQs.</li>
                  <li>Implemented Journal / Blog listing and rich editorial article pages with social share.</li>
                  <li>Deployed functional 2-tab Contact page ("Say Hello" &amp; "Get a Quote") with server-side validation.</li>
                  <li>Integrated persistent JSON backend storage for contact inquiries and newsletter subscribers.</li>
                  <li>Launched Portfolio Management Console at <code>/admin</code> to monitor incoming proposals in real time.</li>
                </ul>
              </div>

              {/* Version 1.0 */}
              <div className="changelog_entry_card" style={{ marginTop: '40px' }}>
                <div className="changelog_badge_row">
                  <span className="changelog_version">VER 1.0</span>
                  <span className="changelog_date">DECEMBER 23, 2025</span>
                </div>
                <h2 className="changelog_heading">Initial Portfolio Architecture &amp; Concept Release</h2>
                <ul className="changelog_list">
                  <li>Initial homepage launch with Lenis smooth scrolling and GSAP animations.</li>
                  <li>Interactive 3D card stacking scroll showcase for featured works.</li>
                  <li>Horizontal timeline scrub for studio history (2020-2025).</li>
                  <li>Brand showreel and client feedback marquee components.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
