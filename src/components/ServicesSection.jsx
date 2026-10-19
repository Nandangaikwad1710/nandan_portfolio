import React, { useRef, useState } from 'react';
import { servicesData } from '../data/siteData';

export default function ServicesSection() {
  const [playingStates, setPlayingStates] = useState({
    'graphics-design': true,
    'uiux-design': true,
    'web-development': true,
    'digital-marketing': true
  });

  const videoRefs = useRef({});

  const togglePlay = (id) => {
    const vid = videoRefs.current[id];
    if (vid) {
      if (vid.paused) {
        vid.play();
        setPlayingStates((prev) => ({ ...prev, [id]: true }));
      } else {
        vid.pause();
        setPlayingStates((prev) => ({ ...prev, [id]: false }));
      }
    }
  };

  return (
    <section id="services" className="service_section">
      <div className="padding_global">
        <div className="container">
          <div className="section_header is_service">
            <h2 data-title-anim="" className="service_section_title">
              TECHNICAL STACK &amp; CAPABILITIES
            </h2>
            <div data-floating-badge="" className="floating_text is_service">
              CORE COMPETENCIES
            </div>
          </div>

          {servicesData.map((service) => {
            const isPlaying = playingStates[service.id];

            return (
              <div key={service.id} className="service_item">
                <div className="service_item_inner">
                  <div className="service_item_content">
                    <h3 data-title-anim="" className="service_item_title">
                      {service.title}
                    </h3>

                    <div className="service_item_tags_area">
                      <p className="service_item_tags_subtitle">Technologies &amp; Systems:</p>
                      <div className="service_item_tags_wrapper">
                        {service.tags.map((tag, i) => (
                          <div key={i} className="service_item_tag">
                            <p className="service_item_tag_text">{tag}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="service_item_video_wrap">
                    <div className="service_item_video w-background-video">
                      <video
                        ref={(el) => (videoRefs.current[service.id] = el)}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="service_video_element"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      >
                        <source src={service.video} type="video/mp4" />
                      </video>

                      <div className="video_controls_layer">
                        <button
                          type="button"
                          className="video_control_button"
                          onClick={() => togglePlay(service.id)}
                          aria-label={isPlaying ? 'Pause video' : 'Play video'}
                        >
                          <span className="video_state">
                            {isPlaying ? (
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                                <rect x="6" y="4" width="4" height="16" rx="1" />
                                <rect x="14" y="4" width="4" height="16" rx="1" />
                              </svg>
                            ) : (
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            )}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
