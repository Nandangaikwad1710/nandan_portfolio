import React, { useState } from 'react';
import { testimonialsData } from '../data/siteData';

export default function Testimonials() {
  const [activeCard, setActiveCard] = useState(0);

  const starIcon = (isYellow) => (
    <div className={`testimonial_icon ${isYellow ? 'is-yellow' : ''}`}>
      <svg width="24" height="24" viewBox="0 0 30 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M29.3006 12.3412C30.5991 11.1057 29.7421 8.91745 27.9499 8.89246L21.0115 8.79572C20.2382 8.78493 19.5404 8.32929 19.2196 7.62562L16.2765 1.17078C15.5234 -0.480956 13.1365 -0.355867 12.5602 1.36554L10.308 8.09275C10.0625 8.82606 9.41623 9.35212 8.64837 9.44372L1.76686 10.2647C-0.0121395 10.4769 -0.636125 12.7413 0.783057 13.8348L6.37958 18.1471C6.98072 18.6103 7.26791 19.3739 7.12106 20.1184L5.7342 27.15C5.38381 28.9265 7.38617 30.217 8.85934 29.1641L14.5881 25.0697C15.2216 24.6169 16.0602 24.573 16.7375 24.957L22.863 28.4302C24.4381 29.3234 26.2946 27.8306 25.7605 26.1005L23.6465 19.2533C23.4224 18.5277 23.6287 17.7378 24.1789 17.2143L29.3006 12.3412Z" fill="currentColor" />
      </svg>
    </div>
  );

  return (
    <section id="feedbacks" className="testimonial_section">
      <div className="padding_global">
        <div className="container">
          <div className="section_header">
            <h2 data-title-anim="" className="text-center">
              COLLABORATION &amp; TESTIMONIALS
            </h2>
            <div data-floating-badge="" className="floating_text is-testimony">
              VERIFIED IMPACT
            </div>
          </div>

          <div data-slide-cards="" className="testimonial_cards">
            {testimonialsData.map((t, idx) => {
              const isActive = activeCard === idx;
              const cardClass = idx === 0 ? '' : idx === 1 ? 'card_two' : idx === 2 ? 'card_three' : 'card_four';

              return (
                <div
                  key={t.id}
                  className={`testimonial_card ${cardClass} ${isActive ? 'is-active-card' : ''}`}
                  onClick={() => setActiveCard(idx)}
                  onMouseEnter={() => setActiveCard(idx)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Testimonial from ${t.author}`}
                  onKeyDown={(e) => e.key === 'Enter' && setActiveCard(idx)}
                  style={{
                    cursor: 'pointer',
                    transform: isActive ? 'scale(1.02) translateY(-6px)' : undefined,
                    zIndex: isActive ? 10 : 1,
                    transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease'
                  }}
                >
                  <div className="testimonial_icon_area">
                    {Array.from({ length: t.stars }).map((_, s) => (
                      <React.Fragment key={s}>{starIcon(t.isDark)}</React.Fragment>
                    ))}
                  </div>

                  <div className="testimonial_content_area">
                    <p className={`testimonial_text ${t.isDark ? 'color-white' : ''}`}>
                      {t.quote}
                    </p>

                    <div className="testimonial_author_area">
                      <div className="testimonial_author_image">
                        <img src={t.avatar} loading="lazy" alt={t.author} className="image-cover" />
                      </div>
                      <div className="testimonial_author_content">
                        <p className={`testimonial_author_name ${t.isDark ? 'color-white' : ''}`}>
                          {t.author}
                        </p>
                        <p className={`testimonial_author_profession ${t.isDark ? 'color-white' : ''}`}>
                          {t.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
