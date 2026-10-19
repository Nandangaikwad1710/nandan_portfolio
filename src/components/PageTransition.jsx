import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function PageTransition({ children }) {
  const containerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (!containerRef.current) return;

    // Editorial fade entrance animation on route change
    const anim = gsap.fromTo(
      containerRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.35,
        ease: 'power2.out',
        onComplete: () => {
          ScrollTrigger.refresh();
        }
      }
    );

    return () => {
      anim.kill();
    };
  }, [location.pathname]);

  return (
    <div ref={containerRef} className="page-transition-wrapper">
      {children}
    </div>
  );
}
