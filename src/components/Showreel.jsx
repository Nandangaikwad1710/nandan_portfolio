import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Showreel() {
  const trackRef = useRef(null);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add('(min-width: 768px)', () => {
        // Set initial state matching live reference (starts at edges, invisible)
        gsap.set('.showreel_text._1', { x: '0vw', yPercent: -50, opacity: 0 });
        gsap.set('.showreel_text._2', { x: '0vw', yPercent: -50, opacity: 0 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: trackRef.current,
            start: 'top top',
            end: '+=2000',
            pin: true,
            pinSpacing: true,
            scrub: 0.8,
            invalidateOnRefresh: true,
          }
        });

        // Expand video mask to full bleed
        tl.to('.showreel_video_mask', {
          width: '100vw',
          height: '100vh',
          maxWidth: '100vw',
          maxHeight: '100vh',
          borderRadius: '0px',
          ease: 'power1.inOut'
        }, 0)
        // Slide "Play" inward toward center over the expanding video
        .to('.showreel_text._1', {
          x: '34vw',
          opacity: 1,
          ease: 'power1.inOut'
        }, 0)
        // Slide "Reel" inward toward center over the expanding video
        .to('.showreel_text._2', {
          x: '-34vw',
          opacity: 1,
          ease: 'power1.inOut'
        }, 0)
        // Hold/settle at full bleed before releasing the pin
        .to({}, { duration: 0.35 });
      });
    }, trackRef);

    return () => ctx.revert();
  }, []);

  const toggleVideo = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      {/* Decorative border separation */}
      <div data-wf--border--variant="base" className="border">
        <div className="border_line" style={{ backgroundColor: '#e9dcd2' }}></div>
        <div className="border_line _2" style={{ backgroundColor: '#e9dcd2' }}></div>
        <div className="border_line _3" style={{ backgroundColor: '#e9dcd2' }}></div>
        <div className="border_line _4" style={{ backgroundColor: '#e9dcd2' }}></div>
        <div className="border_line _5" style={{ backgroundColor: '#e9dcd2' }}></div>
      </div>

      <section className="showreel_section">
        <div ref={trackRef} className="showreel_track">
          <div className="showreel_sticky">
            <div className="showreel_wrapper">
              <div className="showreel_video_mask">
                <div className="showreel_video_wrapper">
                  <div className="showreel_video w-background-video">
                    <video
                      ref={videoRef}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="showreel_video_element"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    >
                      <source src="/videos/showreel.mp4" type="video/mp4" />
                    </video>

                    <button
                      type="button"
                      className="showreel_video_button"
                      onClick={toggleVideo}
                      aria-label={isPlaying ? 'Pause video' : 'Play video'}
                    >
                      <span className="showreel_video_icon_wrapper">
                        {isPlaying ? (
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                            <rect x="6" y="4" width="4" height="16" rx="1" />
                            <rect x="14" y="4" width="4" height="16" rx="1" />
                          </svg>
                        ) : (
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        )}
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              <h3 className="showreel_text _1">Play</h3>
              <h3 className="showreel_text _2">Reel</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
