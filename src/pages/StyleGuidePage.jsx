import React, { useState } from 'react';
import CTASection from '../components/CTASection';

const COLOR_SWATCHES = [
  { name: 'Lilac Primary', hex: '#ab9bff', darkText: true },
  { name: 'Lilac Visual', hex: '#8673ee', darkText: false },
  { name: 'Coral Terracotta', hex: '#ff905f', darkText: true },
  { name: 'Coral Dark', hex: '#ff7d44', darkText: false },
  { name: 'Melon Pink', hex: '#ff767a', darkText: true },
  { name: 'Melon Dark', hex: '#ff5b60', darkText: false },
  { name: 'Electric Chartreuse', hex: '#b8c56f', darkText: true },
  { name: 'Olive Chartreuse', hex: '#9fae4b', darkText: false },
  { name: 'Amber Gold', hex: '#ffd37a', darkText: true },
  { name: 'Mint Green', hex: '#b7ff93', darkText: true },
  { name: 'Deep Onyx', hex: '#09090b', darkText: false },
  { name: 'Surface Gray', hex: '#18181b', darkText: false }
];

export default function StyleGuidePage() {
  const [copiedHex, setCopiedHex] = useState('');

  const copyColor = (hex) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(''), 1800);
  };

  return (
    <div className="styleguide_page_view">
      <section className="styleguide_hero_section">
        <div className="padding_global">
          <div className="container">
            <div className="section_header" style={{ marginBottom: '60px' }}>
              <div className="floating_text" style={{ marginBottom: '16px' }}>SYSTEM TOKENS</div>
              <h1 className="heading_style_h1" style={{ color: '#ffffff', textTransform: 'uppercase' }}>
                CRAFTING A UNIQUE VISUAL IDENTITY
              </h1>
              <p className="text-18px" style={{ color: '#a1a1aa', maxWidth: '650px', marginTop: '16px' }}>
                Comprehensive reference guide for typography, curated color tokens, component anatomy, and interface micro-interactions powering Nandan Gaikwad's portfolio.
              </p>
            </div>

            {/* Colors Section */}
            <div className="styleguide_section_block">
              <h2 className="heading_style_h3" style={{ color: '#ffffff', marginBottom: '24px' }}>
                COLOR PALETTE
              </h2>
              <div className="swatches_grid">
                {COLOR_SWATCHES.map((swatch, idx) => (
                  <div
                    key={idx}
                    className="swatch_card"
                    onClick={() => copyColor(swatch.hex)}
                    style={{ backgroundColor: swatch.hex }}
                  >
                    <div className="swatch_info" style={{ color: swatch.darkText ? '#000000' : '#ffffff' }}>
                      <span className="swatch_name">{swatch.name}</span>
                      <span className="swatch_hex">{copiedHex === swatch.hex ? 'Copied ✓' : swatch.hex}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Typography Section */}
            <div className="styleguide_section_block" style={{ marginTop: '80px' }}>
              <h2 className="heading_style_h3" style={{ color: '#ffffff', marginBottom: '32px' }}>
                TYPOGRAPHY SCALE
              </h2>
              <div className="type_specimen_list">
                <div className="type_specimen_row">
                  <span className="type_label">Display H1 (Bebas Neue)</span>
                  <h1 className="type_sample_h1">THE QUICK BROWN FOX JUMPS</h1>
                </div>
                <div className="type_specimen_row">
                  <span className="type_label">Heading H2 (Bebas Neue)</span>
                  <h2 className="type_sample_h2">FEATURED WORKS &amp; EXPERTISE</h2>
                </div>
                <div className="type_specimen_row">
                  <span className="type_label">Heading H3 (Bebas Neue)</span>
                  <h3 className="type_sample_h3">ENGINEERING ARCHITECTURE &amp; DESIGN</h3>
                </div>
                <div className="type_specimen_row">
                  <span className="type_label">Heading H4 (DM Sans Bold)</span>
                  <h4 className="type_sample_h4">F1 Live Telemetry Platform</h4>
                </div>
                <div className="type_specimen_row">
                  <span className="type_label">Body Paragraph 18px (DM Sans Regular)</span>
                  <p className="type_sample_body">
                    I build software, AI systems, and technology experiences at the intersection of engineering and innovation.
                  </p>
                </div>
              </div>
            </div>

            {/* Buttons & Badges */}
            <div className="styleguide_section_block" style={{ marginTop: '80px', paddingBottom: '100px' }}>
              <h2 className="heading_style_h3" style={{ color: '#ffffff', marginBottom: '32px' }}>
                BUTTONS & PILLS
              </h2>
              <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', alignItems: 'center' }}>
                <div className="floating_text">TAG PILL</div>
                <div className="filter_pill is-active">ACTIVE FILTER</div>
                <div className="filter_pill">INACTIVE FILTER</div>
                <div className="modal_cta_button">
                  <span>PRIMARY BUTTON</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
