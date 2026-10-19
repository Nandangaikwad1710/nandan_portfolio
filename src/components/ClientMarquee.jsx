import React, { useState } from 'react';
import { brandLogos } from '../data/siteData';

export default function ClientMarquee() {
  // Generate a grid of boxes for the subtle interactive dot matrix background
  const [hoveredBox, setHoveredBox] = useState(null);
  const totalBoxes = 96;

  return (
    <div className="brands_section">
      <div className="brands_wrapper">
        {/* Background interactive matrix */}
        <div className="brands_grid">
          {Array.from({ length: totalBoxes }).map((_, idx) => (
            <div
              key={idx}
              className={`box ${idx >= totalBoxes - 24 ? 'bottom_border' : ''} ${hoveredBox === idx ? 'box-active' : ''}`}
              onMouseEnter={() => setHoveredBox(idx)}
              onMouseLeave={() => setHoveredBox(null)}
            />
          ))}
        </div>

        {/* Foreground Content */}
        <div className="brands_grid absolute">
          {/* Continuous Ticker */}
          <div className="brands_ticker">
            <div className="brands_ticker_row">
              {Array.from({ length: 4 }).map((_, i) => (
                <React.Fragment key={i}>
                  <p className="brands_ticker_text">ENGINEERING EXCELLENCE &amp; IMPACT</p>
                  <div className="brands_ticker_icon">
                    <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g opacity="0.6">
                        <path d="M7.95238 0H10.0476V2.02765H7.95238V0Z" fill="white" />
                        <path d="M0 0H2.09524V2.02765H0V0Z" fill="white" />
                        <path d="M11.9286 4.49309H14.0238V6.52074H11.9286V4.49309Z" fill="white" />
                        <path d="M4.64286 4.49309H6.7381V6.52074H4.64286V4.49309Z" fill="white" />
                        <path d="M14.9048 8.98617H17V11.0138H14.9048V8.98617Z" fill="white" />
                        <path d="M9.28572 8.98617H11.381V11.0138H9.28572V8.98617Z" fill="white" />
                        <path d="M11.9286 13.4793H14.0238V15.5069H11.9286V13.4793Z" fill="white" />
                        <path d="M4.64286 13.4793H6.7381V15.5069H4.64286V13.4793Z" fill="white" />
                        <path d="M7.95238 17.9723H10.0476V20H7.95238V17.9723Z" fill="white" />
                        <path d="M0 17.9723H2.09524V20H0V17.9723Z" fill="white" />
                      </g>
                    </svg>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Testimonial Statement */}
          <div className="brands_testimony_area">
            <p data-text-anim="" className="brands_testimony_text">
              “Delivering tailored software solutions, web billing tools, and robust architectures across 400+ clients with relentless focus on uptime and clean execution.”
            </p>
            <div className="brands_testimony_author_content">
              <p className="brands_testimony_author_name">FlyFour Infotech Operations</p>
              <p className="brands_testimony_author_designation">Tailored Business Software &amp; Solutions</p>
            </div>
          </div>

          {/* 6 Monochrome Brand Logos */}
          {brandLogos.map((logo, index) => (
            <div key={index} className="brand_logo_wrapper">
              <img src={logo} loading="lazy" alt={`Brand client logo ${index + 1}`} className="brand_logo" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
