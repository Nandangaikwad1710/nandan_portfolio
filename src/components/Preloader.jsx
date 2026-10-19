import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

export default function Preloader({ onComplete }) {
  const [hidden, setHidden] = useState(false);
  const containerRef = useRef(null);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setHidden(true);
          if (onCompleteRef.current) onCompleteRef.current();
        }
      });

      tl.fromTo(
        '[data-preloader-logo]',
        { yPercent: 100, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
      )
      .fromTo(
        '.preloader_border .border_line',
        { scaleX: 0 },
        { scaleX: 1, duration: 0.6, stagger: 0.08, ease: 'power2.inOut' },
        '-=0.4'
      )
      .to(
        containerRef.current,
        {
          yPercent: -100,
          duration: 0.85,
          ease: 'power3.inOut',
          delay: 0.2
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  if (hidden) return null;

  return (
    <div ref={containerRef} className="preloader">
      <div data-preloader-logo="" className="logo_text">
        //NANDAN GAIKWAD
      </div>
      <div className="preloader_border">
        <div data-wf--border--variant="base" className="border">
          <div className="border_line" style={{ backgroundColor: '#121212' }}></div>
          <div className="border_line _2" style={{ backgroundColor: '#121212' }}></div>
          <div className="border_line _3" style={{ backgroundColor: '#121212' }}></div>
          <div className="border_line _4" style={{ backgroundColor: '#121212' }}></div>
          <div className="border_line _5" style={{ backgroundColor: '#121212' }}></div>
        </div>
      </div>
    </div>
  );
}
