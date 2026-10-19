import React from 'react';
import CTASection from '../components/CTASection';

export default function LicensesPage() {
  return (
    <div className="licenses_page_view">
      <section className="licenses_hero_section">
        <div className="padding_global">
          <div className="container is-narrow">
            <div className="section_header" style={{ marginBottom: '60px' }}>
              <div className="floating_text" style={{ marginBottom: '16px' }}>LEGAL & CREDITS</div>
              <h1 className="heading_style_h1" style={{ color: '#ffffff', textTransform: 'uppercase' }}>
                LICENSING INFO & USAGE RIGHTS
              </h1>
              <p className="text-18px" style={{ color: '#a1a1aa', marginTop: '16px', lineHeight: 1.7 }}>
                All creative assets, typographical licenses, and icon libraries utilized in Nandan Gaikwad's portfolio are sourced under commercial-friendly and open licenses.
              </p>
            </div>

            <div className="licenses_card_list">
              <div className="license_card">
                <span className="license_tag">TYPOGRAPHY</span>
                <h2 className="license_title">Google Fonts — Bebas Neue &amp; DM Sans</h2>
                <p className="license_desc">
                  Fonts used across this portfolio website are licensed under the SIL Open Font License (OFL) Version 1.1. They are freely usable across commercial and editorial digital platforms.
                </p>
                <a href="https://fonts.google.com" target="_blank" rel="noreferrer" className="license_link">
                  View Google Fonts Directory ↗
                </a>
              </div>

              <div className="license_card">
                <span className="license_tag">PHOTOGRAPHY & MEDIA</span>
                <h2 className="license_title">Lummi, Unsplash & Freepik</h2>
                <p className="license_desc">
                  Images and video showreels featured across our projects and journal articles are licensed under Creative Commons Zero (CC0) and commercial royalty-free licenses via Lummi and Freepik.
                </p>
                <a href="https://lummi.ai" target="_blank" rel="noreferrer" className="license_link">
                  Visit Lummi Library ↗
                </a>
              </div>

              <div className="license_card">
                <span className="license_tag">ICONOGRAPHY & UI</span>
                <h2 className="license_title">Hugeicons & Lucide Icons</h2>
                <p className="license_desc">
                  Vector icons and UI action indicators are licensed and available through Hugeicons and Lucide React under MIT License for seamless responsive interaction.
                </p>
                <a href="https://lucide.dev" target="_blank" rel="noreferrer" className="license_link">
                  View Lucide Project ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
